import EditIcon from '@mui/icons-material/Edit';
import {Box, IconButton, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {grey} from '@/app/theme/theme';
import {CreateReviewForm} from '@/components/modalContent';
import {formateDate} from '@/shared/lib/helpers';
import {useAppDispatch, useAuth} from '@/shared/lib/hooks';
import {ReviewI} from '@/shared/types/review';
import {actions as modalActions} from '@/slices/modal';
import {Flex} from '../../base/Flex';
import {Title} from '../../base/Title';
import {Rating} from '../../rating/Rating';

type Props = ReviewI;

export const ReviewItem = ({username, userId, createdAt, rating, message}: Props): ReactElement => {
  const dispatch = useAppDispatch();
  const {user} = useAuth();
  const isUserComment = user?._id === userId;

  const onEditReviewClick = (): void => {
    dispatch(
      modalActions.openModal({children: <CreateReviewForm defaultValues={{rating, message}} />})
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
        {isUserComment && (
          <IconButton onClick={onEditReviewClick}>
            <EditIcon />
          </IconButton>
        )}
      </Flex>
    </Box>
  );
};
