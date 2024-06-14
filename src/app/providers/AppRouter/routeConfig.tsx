import {ReactNode} from 'react';
import {RouteProps} from 'react-router-dom';
import {
  DashboardPage,
  MainPage,
  OrdersPage,
  PrivacyPolicyPage,
  ProductDetailsPage,
  ShoppingCartPage,
  SuccessPage,
  TermsAndConditionsPage,
  WishlistPage
} from '@/pages';
import {UserRole} from '@/shared/enums/roles.enum';

export enum AppRoutes {
  MAIN = 'main',
  PRODUCT_DETAILS = 'product-details',
  WISHLIST = 'wishlist',
  SHOPPING_CART = 'shopping-cart',
  PRIVACY_POLICY = 'privacy-policy',
  TERMS_AND_CONDITIONS = 'terms-and-conditions',
  ORDERS = 'orders',
  SUCCESS = 'success',
  DASHBOARD = 'dashboard',
  NOT_FOUND = 'not-found'
}

export type AppRoutesProps = Omit<RouteProps, 'children'> & {
  rolesWithAccess?: UserRole[];
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
export const getRouteSuccess = () => `/success`;
export const getRoutePrivacyPolicy = () => `/privacy-policy`;
export const getRouteTermsAndConditions = () => `/terms`;
export const getRouteDashboard = () => `/dashboard`;
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
    rolesWithAccess: [UserRole.USER]
  },
  [AppRoutes.ORDERS]: {
    path: getRouteOrders(),
    element: <OrdersPage />,
    breadcrumbName: 'Orders history',
    rolesWithAccess: [UserRole.USER]
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
  [AppRoutes.SUCCESS]: {
    path: getRouteSuccess(),
    element: <SuccessPage />,
    breadcrumbName: 'Success',
    rolesWithAccess: [UserRole.USER]
  },
  [AppRoutes.SHOPPING_CART]: {
    path: getRouteShoppingCart(),
    element: <ShoppingCartPage />,
    breadcrumbName: 'Shopping cart',
    rolesWithAccess: [UserRole.USER]
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
  [AppRoutes.DASHBOARD]: {
    path: getRouteDashboard(),
    element: <DashboardPage />,
    breadcrumbName: 'Dashboard',
    rolesWithAccess: [UserRole.ADMIN]
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <MainPage />
  }
};
