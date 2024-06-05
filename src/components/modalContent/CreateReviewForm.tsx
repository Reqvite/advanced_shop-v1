import {Typography} from '@mui/material';
import Stack from '@mui/material/Stack';
import {ReactElement} from 'react';
import {createReviewSchema} from '@/shared/lib/yup/createReview.schema';
import {ReviewModel} from '@/shared/models/reviewModel';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {Form} from '@/shared/ui';

type Props = {
  defaultValues?: ReviewModel;
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
    isRequired: true
  }
];

export const CreateReviewForm = ({defaultValues}: Props): ReactElement => {
  const onSubmit = (data: ReviewModel): void => {
    console.log(data);
  };

  return (
    <Stack direction="column" gap={2}>
      <Typography component="h5" variant="h5" textAlign="center">
        Write your review
      </Typography>
      <Form<ReviewModel>
        options={createReviewOptions}
        defaultValues={new ReviewModel(defaultValues)}
        formValidationSchema={createReviewSchema}
        onSubmit={onSubmit}
      />
    </Stack>
  );
};
