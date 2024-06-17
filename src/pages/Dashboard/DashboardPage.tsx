import {ReactElement} from 'react';
import {PageWrapper} from '@/shared/ui';

const DashboardPage = (): ReactElement => {
  // const {data = [], isLoading} = useGetOrdersStatisticQuery({timeline: TimeLine.Week});

  return (
    <PageWrapper isLoading={isLoading}>
      {/* <Bar data={data} indexBy={data[0]?.indexBy} /> */}
    </PageWrapper>
  );
};

export default DashboardPage;
