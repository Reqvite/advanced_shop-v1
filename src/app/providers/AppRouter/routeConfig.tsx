import {RouteProps} from 'react-router-dom';
import {MainPage} from '@/pages';

export enum AppRoutes {
  MAIN = 'main',
  NOT_FOUND = 'not-found',
  PRODUCT_DETAILS = 'product-details'
}

export type AppRoutesProps = RouteProps & {
  needAuth?: boolean;
};

export const getRouteMain = () => '/';
export const getRouteProductDetails = (id: string) => `/product/${id}`;

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <MainPage />
  },
  [AppRoutes.PRODUCT_DETAILS]: {
    path: getRouteProductDetails(':id'),
    element: <MainPage />
  }
};
