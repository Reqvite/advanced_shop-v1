import {lazy} from 'react';

export const MainPage = lazy(() => import('@/pages/MainPage/MainPage'));
export const ProductDetailsPage = lazy(() => import('@/pages/ProductDetails/ProductDetailsPage'));
export {ErrorPage} from './ErrorPage/ErrorPage';
