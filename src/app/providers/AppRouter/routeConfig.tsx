import {ReactNode} from 'react';
import {RouteProps} from 'react-router-dom';
import {MainPage, ProductDetailsPage, ShoppingCartPage, WishlistPage} from '@/pages';

export enum AppRoutes {
  MAIN = 'main',
  NOT_FOUND = 'not-found',
  PRODUCT_DETAILS = 'product-details',
  WISHLIST = 'wishlist',
  SHOPPING_CART = 'shopping-cart'
}

export type AppRoutesProps = Omit<RouteProps, 'children'> & {
  needAuth?: boolean;
  children?: {index?: boolean; path: string; element?: ReactNode; breadcrumbName?: string}[];
  breadcrumbName?: string;
};

export type MatchedRoute = {
  params?: Record<string, string>;
  pathname: string;
  pathnameBase: string;
  route: AppRoutesProps;
};

export const getRouteMain = () => '/';
export const getRouteProductDetails = (id: string) => `/products/${id}`;
export const getRouteWishlist = () => `/wishlist`;
export const getRouteShoppingCart = () => `/shopping-cart`;
export const getRouteProductDetailsReviews = (id: string) => `/products/${id}/reviews`;
export const getRouteProductDetailsReviewsTab = () => 'reviews';
export const getRouteProductDetailsQuestionsTab = () => 'questions';
export const getRouteProductDetailsTab = () => '';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
    breadcrumbName: 'Home'
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <MainPage />
  },
  [AppRoutes.WISHLIST]: {
    path: getRouteWishlist(),
    element: <WishlistPage />,
    breadcrumbName: 'Wishlist',
    needAuth: true
  },
  [AppRoutes.SHOPPING_CART]: {
    path: getRouteShoppingCart(),
    element: <ShoppingCartPage />,
    breadcrumbName: 'Shopping cart'
  },
  [AppRoutes.PRODUCT_DETAILS]: {
    path: `${getRouteProductDetails(':id')}/*`,
    element: <ProductDetailsPage />,
    breadcrumbName: 'Product details',
    children: [
      {
        path: getRouteProductDetailsReviewsTab(),
        breadcrumbName: 'Reviews'
      },
      {
        path: getRouteProductDetailsQuestionsTab(),
        breadcrumbName: 'Questions'
      }
    ]
  }
};
