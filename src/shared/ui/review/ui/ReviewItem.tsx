import EditIcon from '@mui/icons-material/Edit';
import {Box, IconButton, Typography} from '@mui/material';
import {ReactElement, Suspense} from 'react';
import {grey} from '@/app/theme/theme';
import {CreateReviewForm} from '@/components/modalContent';
import {formateDate} from '@/shared/lib/helpers';
import {useAppDispatch, useAuth} from '@/shared/lib/hooks';
import {useReviewActions} from '@/shared/lib/hooks/useReviewActions';
import {ReviewI} from '@/shared/types/review';
import {actions as modalActions} from '@/slices/modal';
import {Flex} from '../../base/Flex';
import {Title} from '../../base/Title';
import {DeleteButton} from '../../button/DeleteButton';
import {Loader} from '../../loader/Loader';
import {Rating} from '../../rating/Rating';

type Props = ReviewI;

export const ReviewItem = ({
  username,
  userId,
  createdAt,
  rating,
  message,
  _id
}: Props): ReactElement => {
  const dispatch = useAppDispatch();
  const {onConfirmDeleteReview} = useReviewActions();
  const {user} = useAuth();
  const isUsersReview = user?._id === userId;

  const onEditReviewClick = (): void => {
    dispatch(
      modalActions.openModal({
        children: (
          <Suspense fallback={<Loader />}>
            <CreateReviewForm isEdit defaultValues={{rating, message}} reviewId={_id} />
          </Suspense>
        )
      })
    );
  };

  return (
    <Box width="100%" p={2} borderRadius={1} border={`1px solid ${grey[100]}`}>
      <Flex justifyContent="space-between" alignItems="center" mb={1}>
        <Flex gap={1}>
          <Title title={username} description={formateDate(createdAt)} />
        </Flex>
        <Box>
          <Rating value={rating} />
        </Box>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Typography>{message}</Typography>
        {isUsersReview && (
          <Flex>
            <IconButton onClick={onEditReviewClick}>
              <EditIcon />
            </IconButton>
            <DeleteButton
              onClick={() => onConfirmDeleteReview(_id)}
              tooltipMessage="Delete review"
            />
          </Flex>
        )}
      </Flex>
    </Box>
  );
};
