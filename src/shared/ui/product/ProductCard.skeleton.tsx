import {
  Box,
  Card,
  CardActions,
  CardContent,
  Skeleton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {Flex} from '../base/Flex';
import {CardVariants} from './ProductCard';
import {boxStyle} from './styles/styles';

type Props = {
  variant?: CardVariants;
};

export const ProductCardSkeleton = ({variant}: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (variant === 'small' || isMobile) {
    return (
      <Card sx={{width: '100%', maxWidth: 500}}>
        <Skeleton variant="rectangular" width="100%" height={240} />
        <CardContent sx={(theme) => ({p: theme.spacing(1)})}>
          <Skeleton width="60%" />
          <Skeleton width="40%" />
        </CardContent>
        <CardActions sx={{display: 'flex', justifyContent: 'space-between', gap: 2}}>
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
    <Card sx={{maxWidth: 869, minHeight: 280, maxHeight: 280, width: '100%'}}>
      <Flex sx={{minHeight: 280}}>
        <Skeleton variant="rectangular" sx={{height: 280, minWidth: 268, objectFit: 'cover'}} />
        <CardContent
          sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
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
            <CardActions sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
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
