import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  SxProps,
  Typography
} from '@mui/material';
import {ReactElement} from 'react';
import {getRouteProductDetails} from '@/app/providers/AppRouter/routeConfig';
import {productCardStyles} from '@/app/theme/styles';
import {brand} from '@/app/theme/theme';
import {useAuth, useMediaQuery} from '@/shared/lib/hooks';
import {ProductI, UpdateWishlistMutation} from '@/shared/types/product';
import {Flex} from '../base/Flex';
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
  onUpdateWishlist: UpdateWishlistMutation;
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
  images,
  quantity,
  sx,
  onUpdateWishlist
}: Props): ReactElement => {
  const isMobile = useMediaQuery('md');
  const auth = useAuth();

  const isOutOfStock = quantity === 0;
  let content;

  const [onClickWishlist, {isLoading}] = onUpdateWishlist();

  if (isMobile || variant === 'small') {
    content = (
      <Card sx={{...productCardStyles.smallCardContainer, ...sx} as SxProps}>
        <CardMedia
          component="img"
          alt={title}
          height="180"
          sx={{objectFit: 'contain'}}
          image={images[0]?.src}
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
                onClick={() => onClickWishlist({_id})}
              />
              <NavigateButton
                sx={{minWidth: '90px'}}
                withIcon={false}
                size="small"
                label="Buy now"
                to={getRouteProductDetails(_id)}
              />
            </Box>
          </CardActions>
        </Stack>
      </Card>
    );
  } else {
    content = (
      <Card sx={productCardStyles.bigCardContainer}>
        <Flex minHeight="280px">
          <CardMedia
            component="img"
            sx={productCardStyles.bigCardMedia}
            image={images[0]?.src}
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
                  onClick={() => onClickWishlist({_id})}
                />
              </Box>
            </Box>
          </CardContent>
        </Flex>
      </Card>
    );
  }
  return isOutOfStock ? (
    <Flex sx={productCardStyles.outOfStockBox}>
      <Typography zIndex={100} color={brand[50]} component="p" variant="h1" position="absolute">
        Out of Stock
      </Typography>
      {content}
    </Flex>
  ) : (
    content
  );
};
