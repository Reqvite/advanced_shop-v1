import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {messageValidation, ratingValidation} from '@/shared/const/validation.const';

export const createReview = yup.object().shape({
  rating: ratingValidation(1),
  message: messageValidation
});

export const replyReview = yup.object().shape({
  rating: ratingValidation(0),
  message: messageValidation
});

export const createReviewSchema = yupResolver(createReview);
export const replyReviewSchema = yupResolver(replyReview);
