import {getRouteMain} from '@/app/providers/AppRouter/routeConfig';

export const navigationOptions = [
  {
    id: 1,
    label: 'Blog',
    link: getRouteMain()
  },
  {
    id: 2,
    label: 'About Us',
    link: getRouteMain()
  },
  {
    id: 3,
    label: 'Careers',
    link: getRouteMain()
  }
];
