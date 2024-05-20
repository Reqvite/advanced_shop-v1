import {Box, Card, CardActions, CardContent, Skeleton} from '@mui/material';
import {ReactElement} from 'react';
import {productCardStyles} from '@/app/theme/styles';
import {useMediaQuery} from '@/shared/lib/hooks';
import {Flex} from '../base/Flex';
import {CardVariants} from './ProductCard';

type Props = {
  variant?: CardVariants;
};

export const ProductCardSkeleton = ({variant}: Props): ReactElement => {
  const isMobile = useMediaQuery('md');

  if (variant === 'small' || isMobile) {
    return (
      <Card sx={productCardStyles.smallCardContainer}>
        <Skeleton variant="rectangular" width="100%" height={240} />
        <CardContent sx={(theme) => ({p: theme.spacing(1)})}>
          <Skeleton width="60%" />
          <Skeleton width="40%" />
        </CardContent>
        <CardActions sx={productCardStyles.smallCardActionsContainer}>
          <Box>
            <Skeleton width="60px" />
            <Skeleton width="50px" />
          </Box>
          <Skeleton height="60px" width="100px" />
        </CardActions>
      </Card>
    );
  }

  return (
    <Card sx={productCardStyles.bigCardContainer}>
      <Flex minHeight="280px">
        <Skeleton
          variant="rectangular"
          sx={{
            ...productCardStyles.bigCardMedia,
            minHeight: '280px',
            minWidth: '180px'
          }}
        />
        <CardContent sx={productCardStyles.bigCardContent}>
          <Box sx={productCardStyles.box}>
            <Box>
              <Skeleton width="150px" />
              <Skeleton width="250px" />
            </Box>
            <Box>
              <Skeleton width="100px" />
              <Skeleton width="100px" />
              <Skeleton width="100px" />
              <Skeleton width="100px" />
            </Box>
          </Box>
          <Box sx={productCardStyles.box}>
            <Box>
              <Skeleton width="50px" />
              <Skeleton width="40px" />
            </Box>
            <Box>
              <Skeleton width="50px" />
              <Skeleton width="60px" />
            </Box>
            <CardActions sx={productCardStyles.bigCardActionsContainer}>
              <Box>
                <Skeleton height={60} width="100px" />
                <Skeleton height={60} width="100px" />
              </Box>
            </CardActions>
          </Box>
        </CardContent>
      </Flex>
    </Card>
  );
};
