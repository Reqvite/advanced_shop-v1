import {lazy, ReactElement, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {getRouteProductDetailsReviewsTab} from '@/app/providers/AppRouter/routeConfig';
import {LabelOptionsWithId} from '@/shared/types/options';
import {Loader} from '@/shared/ui/loader/Loader';

type Props = {
  description: LabelOptionsWithId[];
  id: string;
};

const ProductReviews = lazy(() => import('./ProductReviews'));
const ProductDescription = lazy(() => import('./ProductDescription'));

export const TabsRouter = ({description, id}: Props): ReactElement => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="*" element={<ProductDescription description={description} />} />
        <Route path={getRouteProductDetailsReviewsTab()} element={<ProductReviews id={id} />} />
      </Routes>
    </Suspense>
  );
};
