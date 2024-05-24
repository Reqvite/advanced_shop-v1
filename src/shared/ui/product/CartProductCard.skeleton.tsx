import {Box, CardActions, Skeleton, Stack} from '@mui/material';
import {ReactElement} from 'react';
import {Flex} from '../base/Flex';

export const CartProductCardSkeleton = (): ReactElement => {
  return (
    <Flex width="100%" gap={1} py={2}>
      <Stack>
        <Skeleton variant="rectangular" height={67} sx={{borderRadius: '12px'}} />
        <CardActions>
          <Box>
            <Skeleton width="60px" />
            <Skeleton width="60px" />
          </Box>
        </CardActions>
      </Stack>
      <Box width="100%">
        <Skeleton width="100%" />
        <Skeleton width="40%" />
        <Skeleton width="40%" />
      </Box>
    </Flex>
  );
};
