import {lazy} from 'react';

export const MainPage = lazy(() => import('@/pages/MainPage/MainPage'));
export const ProductDetailsPage = lazy(() => import('@/pages/ProductDetails/ProductDetailsPage'));
export const WishlistPage = lazy(() => import('@/pages/WishlistPage/WishlistPage'));
export const ShoppingCartPage = lazy(() => import('@/pages/ShoppingCart/ShoppingCartPage'));
export const TermsAndConditionsPage = lazy(
  () => import('@/pages/TermsAndConditionsPage/TermsAndConditionsPage')
);
export const OrdersPage = lazy(() => import('@/pages/OrdersPage/OrdersPage'));
export const SuccessPage = lazy(() => import('@/pages/SuccessPage/SuccessPage'));
export const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage/PrivacyPolicyPage'));
export {ErrorPage} from './ErrorPage/ErrorPage';
