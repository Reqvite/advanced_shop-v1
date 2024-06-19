import {ReactElement} from 'react';
import {BarTimelineCard, ChoroplethCard} from '@/components/charts';
import {Flex, PageWrapper} from '@/shared/ui';
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
      <Flex width="100%" gap={2}>
        <BarTimelineCard
          sx={{width: '50%'}}
          tabOptions={options}
          title="Earnings by period"
          useQuery={useGetOrdersStatisticQuery}
        />
        <ChoroplethCard title="World Purchase Map" sx={{width: '50%'}} />
      </Flex>
    </PageWrapper>
  );
};

export default DashboardPage;
