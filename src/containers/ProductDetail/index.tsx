import { createContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FormattedMessage } from 'react-intl';
import { useSearchParams } from 'react-router-dom';

import Container from '@mui/material/Container';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { Product } from 'src/common/types';
import DetailReviewTabbedPane from 'src/components/DetailReviewTabbedPane';
import ProductBriefing from 'src/components/ProductBriefing';
import { ProductReviewType } from 'src/components/ProductReview/types';
import RelatedProducts from 'src/components/RelatedProducts';
import { useGetProductDetail } from 'src/queries/product';

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

  const { data: listRelatedProducts = [], isLoading: isRelatedProductsLoading = false } = useQuery({
    queryKey: ['RelatedProducts', data?.category?._id],
    queryFn: () => getRelatedProducts(data?.category?._id as string),
    enabled: !!data?.category?._id,
    select: ({ data: { data } }) => (data as Product[]).filter(product => product._id !== productId),
  });

  const productReview = useQuery({
    queryKey: ['getProductReview', page],
    queryFn: () => getComments(productId, page),
    onSuccess: ({ data: { data, meta } }) => {
      setListProductReview(data);
      setTotalPage(meta?.totalPages);
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

  const handleCreateComment = (data: object) => {
    commentCreate.mutate(data);
  };

  const handleUpdateComment = (data: object) => {
    commentUpdate.mutate(data);
  };

  return (
    <Container maxWidth="lg" sx={{ margin: '32px auto' }}>
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

      <RelatedProducts listRelatedProduct={listRelatedProducts} isRelatedProductsLoading={isRelatedProductsLoading} />
    </Container>
  );
}
export const Component = ProductDetail;
