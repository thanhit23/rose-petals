import { Product } from 'src/common/types';
import BestSellingProducts from 'src/components/BestSellingProducts';
import { useGetProduct } from 'src/queries/product';

function BestSelling() {
  const { data: bestSellingProduct = [] } = useGetProduct(
    { best_selling: true },
    {
      queryKey: ['bestSellingProducts'],
    },
  );

  return <BestSellingProducts products={bestSellingProduct as Product[]} />;
}

export default BestSelling;
