import {Typography} from '@mui/material';
import Stack from '@mui/material/Stack';
import {ReactElement} from 'react';
import {useLocation} from 'react-router-dom';
import {useAppDispatch} from '@/shared/lib/hooks';
import {UseReviewActionsType} from '@/shared/lib/hooks/useReviewActions';
import {createReviewSchema, replyReviewSchema} from '@/shared/lib/yup/createReview.schema';
import {ReviewModel} from '@/shared/models/reviewModel';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {Form} from '@/shared/ui';
import {actions as modalActions} from '@/slices/modal';

type Props = {
  defaultValues?: ReviewModel;
  isEdit?: boolean;
  reviewId?: string;
  title?: string;
  isReply?: boolean;
  useReviewActions: UseReviewActionsType;
};

const createReviewOptions: FormOption<FormVariantsEnum>[] = [
  {
    id: 'rating',
    variant: FormVariantsEnum.Rating,
    name: 'Rating',
    isRequired: true
  },
  {
    id: 'message',
    variant: FormVariantsEnum.TextArea,
    name: 'Your review',
    placeholder: 'Write something about product...',
    sx: {height: '150px'},
    isRequired: true
  }
];

const replyOptions: FormOption<FormVariantsEnum>[] = [
  {
    id: 'message',
    variant: FormVariantsEnum.TextArea,
    name: 'Message',
    placeholder: 'Write your reply...',
    sx: {height: '150px'},
    isRequired: true
  }
];

export const CreateReviewForm = ({
  defaultValues,
  title,
  isReply,
  isEdit,
  reviewId,
  useReviewActions
}: Props): ReactElement => {
  const dispatch = useAppDispatch();
  const {pathname} = useLocation();
  const productId = pathname.split('/')[2];
  const {
    onCreateReview,
    onUpdateReview,
    createReviewIsLoading,
    reviewUpdateIsLoading,
    invalidateProduct
  } = useReviewActions();

  const onSubmit = async (data: ReviewModel): Promise<void> => {
    if (isEdit) {
      await onUpdateReview({_id: reviewId!, ...data});
    } else {
      await onCreateReview({productId, parentId: reviewId, ...data});
    }
    invalidateProduct();
    dispatch(modalActions.closeModal());
  };

  return (
    <Stack direction="column" gap={2}>
      <Typography component="h5" variant="h5" textAlign="center">
        {title || (isEdit ? 'Edit your review' : 'Write your review')}
      </Typography>
      <Form<ReviewModel>
        options={isReply ? replyOptions : createReviewOptions}
        defaultValues={new ReviewModel(defaultValues)}
        formValidationSchema={isReply ? replyReviewSchema : createReviewSchema}
        onSubmit={onSubmit}
        isLoading={createReviewIsLoading || reviewUpdateIsLoading}
      />
    </Stack>
  );
};

export default CreateReviewForm;
