import {
  Box,
  Card,
  CardActions,
  CardContent,
  Skeleton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {ReactElement} from 'react';
import {Flex} from '../base/Flex';
import {CardVariants} from './ProductCard';
import {boxStyle, productCardStyles} from './styles/styles';

type Props = {
  variant?: CardVariants;
};

export const ProductCardSkeleton = ({variant}: Props): ReactElement => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (variant === 'small' || isMobile) {
    return (
      <Card sx={productCardStyles.smallCardContainerStyles}>
        <Skeleton variant="rectangular" width="100%" height={240} />
        <CardContent sx={(theme) => ({p: theme.spacing(1)})}>
          <Skeleton width="60%" />
          <Skeleton width="40%" />
        </CardContent>
        <CardActions sx={productCardStyles.smallCardActionsContainerStyles}>
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
    <Card sx={productCardStyles.bigCardContainerStyles}>
      <Flex minHeight="280px">
        <Skeleton variant="rectangular" sx={productCardStyles.bigCardMediaStyles} />
        <CardContent sx={productCardStyles.bigCardContentStyles}>
          <Box sx={boxStyle}>
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
          <Box sx={boxStyle}>
            <Box>
              <Skeleton width="50px" />
              <Skeleton width="40px" />
            </Box>
            <Box>
              <Skeleton width="50px" />
              <Skeleton width="60px" />
            </Box>
            <CardActions sx={productCardStyles.bigCardActionsContainerStyles}>
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
