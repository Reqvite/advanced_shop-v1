import {Stack} from '@mui/material';
import {ReactElement} from 'react';
import {BarTimelineCard, ChoroplethCard, PieCard} from '@/components/charts';
import {timelineOptions} from '@/shared/lib/helpers/enumLabelResolver/options';
import {useMediaQuery} from '@/shared/lib/hooks';
import {Flex, PageWrapper} from '@/shared/ui';
import {useGetOrdersStatisticQuery} from '@/slices/dashboard/dashboard.rtk';

const DashboardPage = (): ReactElement => {
  const isMobile = useMediaQuery('md');
  const width = isMobile ? '100%' : '50%';
  const flexWrap = isMobile ? 'wrap' : 'nowrap';

  return (
    <PageWrapper withScroll={false}>
      <Stack gap={2}>
        <BarTimelineCard
          tabOptions={timelineOptions}
          title="Earnings by"
          useQuery={useGetOrdersStatisticQuery}
        />
        <Flex width="100%" gap={2} flexWrap={flexWrap}>
          <PieCard
            tabOptions={timelineOptions}
            title="Earnings by"
            useQuery={useGetOrdersStatisticQuery}
            sx={{width}}
          />
          <ChoroplethCard title="Orders Distribution by Country Map" sx={{width}} />
        </Flex>
      </Stack>
    </PageWrapper>
  );
};

export default DashboardPage;
