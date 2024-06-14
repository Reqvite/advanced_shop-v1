import {ReactElement} from 'react';
import {PageWrapper} from '@/shared/ui';
import {Bar} from '@/shared/ui/charts';

const DashboardPage = (): ReactElement => {
  return (
    <PageWrapper>
      <Bar />
    </PageWrapper>
  );
};

export default DashboardPage;
