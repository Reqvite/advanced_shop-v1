import {ReactElement} from 'react';
import {ProductI} from '@/shared/types/product';
import {List, PageWrapper, Pagination, ProductCard, StickyContentLayout} from '@/shared/ui';
import {useGetProductsQuery} from '@/slices/products';

const MainPage = (): ReactElement => {
  const {data, isLoading} = useGetProductsQuery();

  return (
    <PageWrapper isLoading={isLoading}>
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
        content={<List<ProductI> items={data?.results || []} renderItem={ProductCard} />}
        bottom={<Pagination defaultPage={1} count={data?.totalPages} total={data?.totalItems} />}
      />
    </PageWrapper>
  );
};

export default MainPage;
