import {Box} from '@mui/material';
import {ReactElement} from 'react';
import {reviewStyles} from '@/app/theme/styles';
import {AuthForm} from '@/components/modalContent';
import CreateReviewForm from '@/components/modalContent/CreateReviewForm';
import {useAppDispatch, useAuth} from '@/shared/lib/hooks';
import {useReviewActions} from '@/shared/lib/hooks/useReviewActions';
import {ReviewI} from '@/shared/types/review';
import {Button, List, Loader} from '@/shared/ui';
import {ReviewItem} from '@/shared/ui/review/ui/ReviewItem';
import {actions as modalActions} from '@/slices/modal';
import {useGetReviewsByProductIdQuery} from '@/slices/reviews/reviews.rtk';

type Props = {
  id: string;
};

const ProductReviews = ({id}: Props): ReactElement => {
  const dispatch = useAppDispatch();
  const {data = [], isLoading} = useGetReviewsByProductIdQuery(id);
  const {user} = useAuth();

  if (isLoading) {
    return <Loader />;
  }

  const onAddReviewClick = (): void => {
    dispatch(
      modalActions.openModal({
        children: user ? <CreateReviewForm useReviewActions={useReviewActions} /> : <AuthForm />
      })
    );
  };

  return (
    <Box>
      <Button onClick={onAddReviewClick}>Add review 🧾</Button>
      <List<ReviewI>
        items={data}
        renderItem={ReviewItem}
        sx={reviewStyles.list}
        itemStyle={reviewStyles.listItem}
        emptyListTitle="No reviews found for this product."
      />
    </Box>
  );
};

export default ProductReviews;
