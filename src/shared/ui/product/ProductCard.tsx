import {Box, Card, CardActions, CardContent, CardMedia, Stack, SxProps} from '@mui/material';
import {ReactElement} from 'react';
import {useSearchParams} from 'react-router-dom';
import {getRouteProductDetails} from '@/app/providers/AppRouter/routeConfig';
import {productCardStyles} from '@/app/theme/styles';
import {useAuth, useMediaQuery} from '@/shared/lib/hooks';
import {ProductI} from '@/shared/types/product';
import {useUpdateWishlistMutation} from '@/slices/products';
import {Flex} from '../base/Flex';
import {Button} from '../button/Button';
import {NavigateButton} from '../button/NavigateButton';
import {WishlistButton} from '../button/WishlistButton';
import {CharacteristicList} from './ui/CharacteristicList';
import {DeliveryText} from './ui/DeliveryText';
import {PriceText} from './ui/PriceText';
import {ProductHeading} from './ui/ProductHeading';

export type CardVariants = 'small' | 'medium';

type Props = ProductI & {
  variant?: CardVariants;
  sx?: SxProps;
  onUpdateWishlist: typeof useUpdateWishlistMutation;
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
  image,
  sx,
  onUpdateWishlist
}: Props): ReactElement => {
  const isMobile = useMediaQuery('md');
  const [, setSearchParams] = useSearchParams();
  const auth = useAuth();

  const [onClickWishlist, {isLoading}] = onUpdateWishlist();

  if (isMobile || variant === 'small') {
    return (
      <Card sx={{...productCardStyles.smallCardContainer, ...sx} as SxProps}>
        <CardMedia
          component="img"
          alt={title}
          height="180"
          sx={{objectFit: 'contain'}}
          image={image[0]}
        />
        <Stack>
          <CardContent sx={(theme) => ({p: theme.spacing(1)})}>
            <ProductHeading
              title={title}
              description={description}
              descriptionMaxWidth={220}
              withRating={false}
            />
          </CardContent>
          <CardActions sx={productCardStyles.smallCardActionsContainer}>
            <PriceText price={price} discount={discount} />
            <Box>
              <WishlistButton
                isSmall
                isLiked={auth.user?.wishlist.includes(_id)}
                isLoading={isLoading}
                onClick={() => onClickWishlist({_id, setSearchParams})}
              />
              <Button variant="contained" size="small">
                Buy now
              </Button>
            </Box>
          </CardActions>
        </Stack>
      </Card>
    );
  }

  return (
    <Card sx={productCardStyles.bigCardContainer}>
      <Flex minHeight="280px">
        <CardMedia
          component="img"
          sx={productCardStyles.bigCardMedia}
          image={image[0]}
          alt={title}
        />
        <CardContent sx={productCardStyles.bigCardContent}>
          <Box sx={productCardStyles.box}>
            <ProductHeading
              title={title}
              description={description}
              titleMaxWidth={250}
              descriptionMaxWidth={220}
              rating={rating}
            />
            <CharacteristicList
              characteristics={characteristics}
              maxListItems={4}
              noWrap
              descriptionMaxWidth={80}
            />
          </Box>
          <Box sx={productCardStyles.box}>
            <Box>
              <PriceText price={price} discount={discount} />
              <DeliveryText />
            </Box>
            <Box sx={productCardStyles.bigCardActionsContainer}>
              <NavigateButton fullWidth to={getRouteProductDetails(_id)} />
              <WishlistButton
                isLiked={auth.user?.wishlist.includes(_id)}
                fullWidth
                isLoading={isLoading}
                onClick={() => onClickWishlist({_id, setSearchParams})}
              />
            </Box>
          </Box>
        </CardContent>
      </Flex>
    </Card>
  );
};
