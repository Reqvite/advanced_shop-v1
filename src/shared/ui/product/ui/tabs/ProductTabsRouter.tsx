import {Route, Routes} from 'react-router-dom';
import {getRouteProductDetailsReviewsTab} from '@/app/providers/AppRouter/routeConfig';
import {LabelOptionsWithId} from '@/shared/types/options';
import {ProductDescription} from './ProductDescription';

type Props = {
  description: LabelOptionsWithId[];
};

export const TabsRouter = ({description}: Props) => {
  return (
    <Routes>
      <Route path="*" element={<ProductDescription description={description} />} />
      <Route path={getRouteProductDetailsReviewsTab()} element={<div>reviews</div>} />
    </Routes>
  );
};
