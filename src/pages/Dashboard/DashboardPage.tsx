import {ReactElement} from 'react';
import {BarTimelineCard} from '@/components/charts';
import {PageWrapper} from '@/shared/ui';
import {useGetOrdersStatisticQuery} from '@/slices/dashboard/dashboard.rtk';

const options = [
  {
    label: 'Weekly',
    value: 'week'
  },
  {
    label: 'Monthly',
    value: 'month'
  },
  {
    label: 'Quarterly',
    value: 'quarter'
  }
];

const DashboardPage = (): ReactElement => {
  return (
    <PageWrapper>
      <BarTimelineCard
        tabOptions={options}
        title="Earnings by period"
        useQuery={useGetOrdersStatisticQuery}
      />
    </PageWrapper>
  );
};

export default DashboardPage;
