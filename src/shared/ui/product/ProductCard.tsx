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
import {getRouteProductDetails} from '@/app/providers/AppRouter/routeConfig';
import {ProductI} from '@/shared/types/product';
import {Flex} from '../base/Flex';
import {Button} from '../button/Button';
import {NavigateButton} from '../button/NavigateButton';
import {WishlistButton} from '../button/WishlistButton';
import {boxStyle, productCardStyles} from './styles/styles';
import {CharacteristicList} from './ui/CharacteristicList';
import {DeliveryText} from './ui/DeliveryText';
import {PriceText} from './ui/PriceText';
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
  image
}: Props): ReactElement => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (isMobile || variant === 'small') {
    return (
      <Card sx={productCardStyles.smallCardContainerStyles}>
        <CardMedia component="img" alt={title} height="240" image={image[0]} />
        <CardContent sx={(theme) => ({p: theme.spacing(1)})}>
          <ProductHeading title={title} description={description} descriptionMaxWidth={220} />
        </CardContent>
        <CardActions sx={productCardStyles.smallCardActionsContainerStyles}>
          <PriceText price={price} discount={discount} />
          <Button variant="contained" size="small">
            Buy now
          </Button>
        </CardActions>
      </Card>
    );
  }

  return (
    <Card sx={productCardStyles.bigCardContainerStyles}>
      <Flex minHeight="280px">
        <CardMedia
          component="img"
          sx={productCardStyles.bigCardMediaStyles}
          image={image[0]}
          alt={title}
        />
        <CardContent sx={productCardStyles.bigCardContentStyles}>
          <Box sx={boxStyle}>
            <ProductHeading
              title={title}
              description={description}
              descriptionMaxWidth={250}
              rating={rating}
            />
            <CharacteristicList
              characteristics={characteristics}
              maxListItems={4}
              noWrap
              descriptionMaxWidth={100}
            />
          </Box>
          <Box sx={boxStyle}>
            <Box>
              <PriceText price={price} discount={discount} />
              <DeliveryText />
            </Box>
            <CardActions sx={productCardStyles.bigCardActionsContainerStyles}>
              <NavigateButton fullWidth to={getRouteProductDetails(_id)} />
              <WishlistButton fullWidth />
            </CardActions>
          </Box>
        </CardContent>
      </Flex>
    </Card>
  );
};
