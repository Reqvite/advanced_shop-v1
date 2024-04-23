import {ReactElement} from 'react';
import {ProductI} from '@/shared/types/product';
import {List, Pagination, ProductCard, ProductCardSkeleton, StickyContentLayout} from '@/shared/ui';
import {useGetProductsQuery} from '@/slices/products';

const MainPage = (): ReactElement => {
  const {data, isLoading} = useGetProductsQuery();

  return (
    <>
      <StickyContentLayout
        left={
          <div>
            <div>Filter</div>
            <div>Filter</div>
            <div>Filter</div>
            <div>Filter</div>
            <div>Filter</div>
            <div>Filter</div>
          </div>
        }
        content={
          <List<ProductI>
            items={data?.results || []}
            renderItem={ProductCard}
            isLoading={isLoading}
            skeleton={<ProductCardSkeleton />}
            skeletonLength={5}
          />
        }
        bottom={<Pagination defaultPage={1} count={data?.totalPages} total={data?.totalItems} />}
      />
    </>
  );
};

export default MainPage;
