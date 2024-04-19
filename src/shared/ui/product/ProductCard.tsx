import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {ReactElement} from 'react';
import {ProductI} from '@/shared/types/product';
import {Flex} from '../base/Flex';
import {Button} from '../button/Button';
import {boxStyle} from './styles/styles';
import {CharacteristicList} from './ui/CharacteristicList';
import {DeliveryText} from './ui/DeliveryText';
import {PriceText} from './ui/PriceText';
import {ProductDetailsButton} from './ui/ProductDetailsButton';
import {ProductHeading} from './ui/ProductHeading';

export type CardVariants = 'small' | 'medium';

type Props = ProductI & {
  variant?: CardVariants;
};

export const ProductCard = ({
  _id,
  rating = 0,
  title,
  description,
  characteristics,
  price,
  discount,
  variant,
  img,
  ...otherProps
}: Props): ReactElement => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (variant === 'small' || isMobile) {
    return (
      <Card sx={{width: '100%', maxWidth: 500}} {...otherProps}>
        <CardMedia component="img" alt={title} height="240" image={img} />
        <CardContent sx={(theme) => ({p: theme.spacing(1)})}>
          <ProductHeading title={title} description={description} />
        </CardContent>
        <CardActions sx={{display: 'flex', justifyContent: 'space-between', gap: 2}}>
          <PriceText price={price} discount={discount} />
          <Button variant="contained" size="small">
            Buy now
          </Button>
        </CardActions>
      </Card>
    );
  }

  return (
    <Card sx={{maxWidth: 869, minHeight: 280, maxHeight: 280, width: '100%'}} {...otherProps}>
      <Flex sx={{minHeight: 280}}>
        <CardMedia
          component="img"
          sx={{minHeight: '100%', maxWidth: 268, objectFit: 'cover'}}
          image={img}
          alt={title}
        />
        <CardContent
          sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box sx={boxStyle}>
            <ProductHeading title={title} description={description} rating={rating} />
            <CharacteristicList characteristics={characteristics} maxListItems={4} />
          </Box>
          <Box sx={boxStyle}>
            <Box>
              <PriceText price={price} discount={discount} />
              <DeliveryText />
            </Box>
            <CardActions sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
              <ProductDetailsButton fullWidth id={_id} />
              <Button fullWidth size="small">
                Add to wishlist
              </Button>
            </CardActions>
          </Box>
        </CardContent>
      </Flex>
    </Card>
  );
};
