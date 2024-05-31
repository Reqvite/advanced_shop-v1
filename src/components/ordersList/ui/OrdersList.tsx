import {ReactElement} from 'react';
import {useFilter, useMediaQuery} from '@/shared/lib/hooks';
import {OrderI} from '@/shared/types/order';
import {List, PageWrapper, Pagination, StickyContentLayout} from '@/shared/ui';
import {OrderCard} from '@/shared/ui/order';
import {useGetOrdersQuery} from '@/slices/cart';

export const OrdersList = (): ReactElement => {
  const isMobile = useMediaQuery('md');
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
            itemStyle={{justifyContent: 'center', width: isMobile ? '300px' : '100%'}}
            emptyListTitle="No orders yet"
            row={isMobile}
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
