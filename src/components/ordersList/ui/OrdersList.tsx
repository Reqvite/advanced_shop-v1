import {ReactElement} from 'react';
import {useFilter} from '@/shared/lib/hooks';
import {OrderI} from '@/shared/types/order';
import {List, PageWrapper, Pagination, StickyContentLayout} from '@/shared/ui';
import {OrderCard} from '@/shared/ui/order';
import {useGetOrdersQuery} from '@/slices/cart';

export const OrdersList = (): ReactElement => {
  const {params} = useFilter();
  const {data, isLoading} = useGetOrdersQuery(params);
  const isLastPage = data?.totalPages === params?.page || data?.totalPages === 1;

  return (
    <PageWrapper isLoading={isLoading}>
      <StickyContentLayout
        content={
          <List<OrderI>
            items={data?.results || []}
            renderItem={(order) => <OrderCard {...order} />}
            itemStyle={{
              justifyContent: 'justify-center',
              width: '100%',
              maxWidth: data?.results.length === 1 ? '100%' : '500px',
              mb: 'auto'
            }}
            emptyListTitle="No orders yet"
            row
          />
        }
        bottom={
          <Pagination
            label="Orders"
            page={params.page}
            count={data?.totalPages}
            total={data?.results.length}
            isLastPage={isLastPage}
          />
        }
      />
    </PageWrapper>
  );
};
