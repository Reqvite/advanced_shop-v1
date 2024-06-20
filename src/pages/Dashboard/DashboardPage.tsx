import {Stack} from '@mui/material';
import {ReactElement} from 'react';
import {BarTimelineCard, ChoroplethCard, PieCard} from '@/components/charts';
import {timelineOptions} from '@/shared/lib/helpers/enumLabelResolver/options';
import {Flex, PageWrapper} from '@/shared/ui';
import {useGetOrdersStatisticQuery} from '@/slices/dashboard/dashboard.rtk';

const DashboardPage = (): ReactElement => {
  return (
    <PageWrapper withScroll={false}>
      <Stack gap={2}>
        <BarTimelineCard
          tabOptions={timelineOptions}
          title="Earnings by"
          useQuery={useGetOrdersStatisticQuery}
        />
        <Flex width="100%" gap={2}>
          <PieCard
            tabOptions={timelineOptions}
            title="Earnings by"
            useQuery={useGetOrdersStatisticQuery}
            sx={{width: '50%'}}
          />
          <ChoroplethCard title="Orders Distribution by Country Map" sx={{width: '50%'}} />
        </Flex>
      </Stack>
    </PageWrapper>
  );
};

export default DashboardPage;
