import {ReactElement} from 'react';
import {BarTimelineCard} from '@/components/charts';
import {timelineOptions} from '@/shared/lib/helpers/enumLabelResolver/options';
import {PageWrapper} from '@/shared/ui';
import {useGetOrdersStatisticQuery} from '@/slices/dashboard/dashboard.rtk';

const DashboardPage = (): ReactElement => {
  return (
    <PageWrapper>
      <BarTimelineCard
        tabOptions={timelineOptions}
        title="Earnings by"
        useQuery={useGetOrdersStatisticQuery}
      />
    </PageWrapper>
  );
};

export default DashboardPage;
