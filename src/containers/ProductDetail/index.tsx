import { createContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FormattedMessage } from 'react-intl';
import { useSearchParams } from 'react-router-dom';

import Container from '@mui/material/Container';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { Product } from 'src/common/types';
import BreadCrumb from 'src/components/BreadCrumb';
import DetailReviewTabbedPane from 'src/components/DetailReviewTabbedPane';
import ProductBriefing from 'src/components/ProductBriefing';
import { ProductReviewType } from 'src/components/ProductReview/types';
import RelatedProducts from 'src/components/RelatedProducts';
import { useGetProductDetail } from 'src/queries/product';
import { PATH_PUBLIC } from 'src/routes/paths';

import messages from './messages';
import { createComment, deleteComment, getComments, getRelatedProducts, updateComment } from './services';

export const DescriptionContext = createContext({
  description: '',
  isLoading: false,
});

function ProductDetail() {
  const queryClient = useQueryClient();

  const [listProductReview, setListProductReview] = useState<ProductReviewType[]>([]);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [idComment, setIdComment] = useState<string>('');

  const [searchParams] = useSearchParams();

  const productId = searchParams.get('id') as string;
  const { data, isLoading } = useGetProductDetail(productId);

  const dataBreadCrumbs = [
    {
      label: data?.category.name,
      path: PATH_PUBLIC.product.search(
        `${data?.slug}?categoryId=${data?.category._id}&categoryName=${encodeURIComponent(
          data?.category.name as string,
        )}`,
      ),
    },
    { label: data?.name, path: PATH_PUBLIC.product.slug(data?.slug as string, data?._id as string) },
  ];

  const relatedProducts = useQuery({
    queryKey: ['RelatedProducts', data?.category?._id],
    queryFn: () => getRelatedProducts(data?.category?._id as string),
    enabled: !!data?.category?._id,
    select: ({ data: { data } }) => (data as Product[]).filter(product => product._id !== productId),
  });

  const productReview = useQuery({
    queryKey: ['getProductReview', page],
    queryFn: () => getComments(productId, page),
    onSuccess: ({ data: { data, meta } }) => {
      setTotalPage(meta?.totalPages);
      setListProductReview(data);
    },
  });

  const commentCreate = useMutation({
    mutationFn: (data: object) => createComment(data),
    onSuccess: ({ data: { status } }) => {
      if (status) {
        void queryClient.invalidateQueries({
          queryKey: ['getProductReview', page],
        });
        toast.success(<FormattedMessage {...messages.createMessage} />);
      }
    },
  });

  const commentUpdate = useMutation({
    mutationFn: (data: object) => updateComment(data, idComment),
    onSuccess: ({ data: { status } }) => {
      if (status) {
        void queryClient.invalidateQueries({
          queryKey: ['getProductReview', page],
        });
        toast.success(<FormattedMessage {...messages.updateMessage} />);
      }
    },
  });

  const commentDelete = useMutation({
    mutationFn: (variables: string) => deleteComment(variables),
    onSuccess: ({ data: { status } }) => {
      if (status) {
        void queryClient.invalidateQueries({
          queryKey: ['getProductReview', page],
        });
        toast.success(<FormattedMessage {...messages.deleteMessage} />);
      }
    },
  });

  const handleCreateComment = async (data: object) => {
    await commentCreate.mutateAsync(data);
  };

  const handleUpdateComment = (data: object) => {
    commentUpdate.mutate(data);
  };

  return (
    <Container maxWidth="lg" sx={{ margin: '32px auto' }}>
      <BreadCrumb data={dataBreadCrumbs} />
      <ProductBriefing product={data} isLoading={isLoading} />

      <DescriptionContext.Provider
        value={{
          description: data?.description || '',
          isLoading,
        }}
      >
        <DetailReviewTabbedPane
          listProductReview={listProductReview}
          onCreateComment={handleCreateComment}
          onUpdateComment={handleUpdateComment}
          totalPage={totalPage}
          page={page}
          setPage={setPage}
          isFetching={productReview.isFetching}
          idComment={idComment}
          setIdComment={setIdComment}
          onDeleteComment={commentDelete.mutate}
        />
      </DescriptionContext.Provider>

      <RelatedProducts
        listRelatedProduct={relatedProducts.data || []}
        isRelatedProductsLoading={relatedProducts.isLoading}
      />
    </Container>
  );
}
export const Component = ProductDetail;
