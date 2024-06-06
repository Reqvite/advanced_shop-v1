import {lazy} from 'react';

export {AuthForm} from './AuthForm';
export {ConfirmationForm} from './ConfirmationForm';
export const CreateReviewForm = lazy(() => import('@/components/modalContent/CreateReviewForm'));
