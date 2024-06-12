import {RtkApiTagsEnum} from '@/shared/enums/rtkTags.enum';
import {CreateReviewI, UpdateReviewI} from '@/shared/types/review';
import {productsApi} from '@/slices/products/products.rtk';
import {
  useCreateReviewMutation,
  useDeleteReviewMutation,
  useUpdateReviewMutation
} from '@/slices/reviews/reviews.rtk';
import {useAppDispatch} from './useAppDispatch.hook';
import {useConfirm} from './useConfirm.hook';

type UseReviewActionsReturnType = {
  onCreateReview: (data: CreateReviewI) => void;
  onUpdateReview: (data: UpdateReviewI) => void;
  onConfirmDeleteReview: (id: string) => void;
  invalidateProduct: () => void;
  createReviewIsLoading: boolean;
  reviewUpdateIsLoading: boolean;
  reviewDeleteIsLoading: boolean;
};

export const useReviewActions = (): UseReviewActionsReturnType => {
  const dispatch = useAppDispatch();
  const confirm = useConfirm({
    message: `Are you sure you want to delete review?`
  });
  const [onCreateReview, {isLoading: createReviewIsLoading}] = useCreateReviewMutation();
  const [onUpdateReview, {isLoading: reviewUpdateIsLoading}] = useUpdateReviewMutation();
  const [onDeleteReview, {isLoading: reviewDeleteIsLoading}] = useDeleteReviewMutation();

  const invalidateProduct = () => {
    dispatch(productsApi.util.invalidateTags([RtkApiTagsEnum.Product]));
  };

  const onConfirmDeleteReview = async (id: string): Promise<void> => {
    await confirm();
    await onDeleteReview(id);
    invalidateProduct();
  };

  return {
    onCreateReview,
    onUpdateReview,
    onConfirmDeleteReview,
    invalidateProduct,
    createReviewIsLoading,
    reviewUpdateIsLoading,
    reviewDeleteIsLoading
  };
};

export type UseReviewActionsType = typeof useReviewActions;
