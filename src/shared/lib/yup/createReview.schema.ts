import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {messageValidation, ratingValidation} from '@/shared/const/validation.const';

export const createReview = yup.object().shape({
  rating: ratingValidation,
  message: messageValidation
});

export const createReviewSchema = yupResolver(createReview);
