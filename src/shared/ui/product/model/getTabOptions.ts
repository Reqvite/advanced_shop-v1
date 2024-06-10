import {
  getRouteProductDetailsReviewsTab,
  getRouteProductDetailsTab
} from '@/app/providers/AppRouter/routeConfig';
import {TabOptionsI} from '@/shared/types/options';

export const getTabOptions = ({reviewCount = 0}: {reviewCount?: number}): TabOptionsI[] => [
  {label: 'Description', value: getRouteProductDetailsTab()},
  {label: 'Reviews', value: getRouteProductDetailsReviewsTab(), count: reviewCount},
  {label: 'Questions', value: 'questions'}
];
