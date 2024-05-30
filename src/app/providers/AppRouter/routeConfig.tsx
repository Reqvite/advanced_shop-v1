import {ReactNode} from 'react';
import {RouteProps} from 'react-router-dom';
import {
  MainPage,
  OrdersPage,
  PrivacyPolicyPage,
  ProductDetailsPage,
  ShoppingCartPage,
  TermsAndConditionsPage,
  WishlistPage
} from '@/pages';

export enum AppRoutes {
  MAIN = 'main',
  PRODUCT_DETAILS = 'product-details',
  WISHLIST = 'wishlist',
  SHOPPING_CART = 'shopping-cart',
  PRIVACY_POLICY = 'privacy-policy',
  TERMS_AND_CONDITIONS = 'terms-and-conditions',
  ORDERS = 'orders',
  NOT_FOUND = 'not-found'
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
export const getRoutePrivacyPolicy = () => `/privacy-policy`;
export const getRouteTermsAndConditions = () => `/terms`;
export const getRouteOrders = () => `/orders`;
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
  [AppRoutes.WISHLIST]: {
    path: getRouteWishlist(),
    element: <WishlistPage />,
    breadcrumbName: 'Wishlist',
    needAuth: true
  },
  [AppRoutes.ORDERS]: {
    path: getRouteOrders(),
    element: <OrdersPage />,
    breadcrumbName: 'Orders history',
    needAuth: true
  },
  [AppRoutes.PRIVACY_POLICY]: {
    path: getRoutePrivacyPolicy(),
    element: <PrivacyPolicyPage />,
    breadcrumbName: 'Privacy policy'
  },
  [AppRoutes.TERMS_AND_CONDITIONS]: {
    path: getRouteTermsAndConditions(),
    element: <TermsAndConditionsPage />,
    breadcrumbName: 'Terms and conditions'
  },
  [AppRoutes.SHOPPING_CART]: {
    path: getRouteShoppingCart(),
    element: <ShoppingCartPage />,
    breadcrumbName: 'Shopping cart',
    needAuth: true
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
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <MainPage />
  }
};
