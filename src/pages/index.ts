import {lazy} from 'react';

export const MainPage = lazy(() => import('@/pages/MainPage/MainPage'));
export const ProductDetailsPage = lazy(() => import('@/pages/ProductDetails/ProductDetailsPage'));
export const WishlistPage = lazy(() => import('@/pages/WishlistPage/WishlistPage'));
export const ShoppingCartPage = lazy(() => import('@/pages/ShoppingCart/ShoppingCartPage'));
export {ErrorPage} from './ErrorPage/ErrorPage';
