import {ReactElement} from 'react';
import {BarTimelineCard, ChoroplethCard} from '@/components/charts';
import {timelineOptions} from '@/shared/lib/helpers/enumLabelResolver/options';
import {Flex, PageWrapper} from '@/shared/ui';
import {useGetOrdersStatisticQuery} from '@/slices/dashboard/dashboard.rtk';

const DashboardPage = (): ReactElement => {
  return (
    <PageWrapper>
      <Flex width="100%" gap={2}>
        <BarTimelineCard
          sx={{width: '50%'}}
          tabOptions={timelineOptions}
          title="Earnings by"
          useQuery={useGetOrdersStatisticQuery}
        />
        <ChoroplethCard title="World Purchase Map" sx={{width: '50%'}} />
      </Flex>
    </PageWrapper>
  );
};

export default DashboardPage;
