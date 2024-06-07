import EditIcon from '@mui/icons-material/Edit';
import ReplyIcon from '@mui/icons-material/Reply';
import {Box, IconButton, Typography} from '@mui/material';
import {ReactElement, Suspense, useCallback} from 'react';
import {reviewStyles} from '@/app/theme/styles';
import {grey} from '@/app/theme/theme';
import {CreateReviewForm} from '@/components/modalContent';
import {formateDate} from '@/shared/lib/helpers';
import {useAppDispatch, useAuth} from '@/shared/lib/hooks';
import {useReviewActions} from '@/shared/lib/hooks/useReviewActions';
import {ReviewI} from '@/shared/types/review';
import {actions as modalActions} from '@/slices/modal';
import {Flex} from '../../base/Flex';
import {Title} from '../../base/Title';
import {Button} from '../../button';
import {DeleteButton} from '../../button/DeleteButton';
import {List} from '../../list/List';
import {Loader} from '../../loader/Loader';
import {Rating} from '../../rating/Rating';

type Props = ReviewI & {
  withReply?: boolean;
};

export const ReviewItem = ({
  username,
  userId,
  withReply = true,
  createdAt,
  rating,
  children = [],
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
            <CreateReviewForm
              isEdit
              isReply={!withReply}
              defaultValues={{rating, message}}
              reviewId={_id}
            />
          </Suspense>
        )
      })
    );
  };

  const onReplyReviewClick = (): void => {
    dispatch(
      modalActions.openModal({
        children: (
          <Suspense fallback={<Loader />}>
            <CreateReviewForm isReply title="Write your reply" reviewId={_id} />
          </Suspense>
        )
      })
    );
  };

  const NestedReview = useCallback(
    (item: ReviewI): ReactElement => <ReviewItem withReply={false} {...item} />,
    []
  );

  return (
    <Box width="100%" p={2} borderRadius={1} border={`1px solid ${grey[100]}`}>
      <Flex justifyContent="space-between" alignItems="center" mb={1}>
        <Flex gap={1}>
          <Title titleVariant="h5" title={username} description={formateDate(createdAt)} />
        </Flex>
        {withReply && (
          <Box>
            <Rating value={rating} />
          </Box>
        )}
      </Flex>
      <Typography>{message}</Typography>
      {user && (
        <Flex justifyContent={withReply ? 'space-between' : 'flex-end'} mt={1} alignItems="center">
          {withReply && (
            <Button LeftAddon={ReplyIcon} onClick={onReplyReviewClick}>
              Reply
            </Button>
          )}
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
      )}
      {withReply && children.length > 0 && (
        <Box mt={2} pl={4} borderLeft={`1px solid ${grey[300]}`}>
          <List<ReviewI>
            items={children}
            renderItem={NestedReview}
            sx={reviewStyles.list}
            itemStyle={reviewStyles.listItem}
          />
        </Box>
      )}
    </Box>
  );
};
