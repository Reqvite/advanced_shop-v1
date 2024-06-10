import {Box, Card, CardActions, CardContent, CardMedia, Stack, SxProps} from '@mui/material';
import {ReactElement} from 'react';
import {getRouteProductDetails} from '@/app/providers/AppRouter/routeConfig';
import {productCardStyles} from '@/app/theme/styles';
import {useAuth, useMediaQuery} from '@/shared/lib/hooks';
import {ProductI, UpdateWishlistMutation} from '@/shared/types/product';
import {Flex} from '../../base/Flex';
import {NavigateButton} from '../../button/NavigateButton';
import {WishlistButton} from '../../button/WishlistButton';
import {CharacteristicList} from '../base/CharacteristicList';
import {DeliveryText} from '../base/DeliveryText';
import {PriceText} from '../base/PriceText';
import {ProductHeading} from '../base/ProductHeading';
import {getCharacteristicsWithQuantity} from '../model/getCharacteristicsWithQuantity';

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
  const characteristicsWithQuantity = getCharacteristicsWithQuantity(characteristics, quantity);
  const [onClickWishlist, {isLoading}] = onUpdateWishlist();

  const renderContent = (): ReactElement => {
    if (isMobile || variant === 'small') {
      return (
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
      return (
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
                  characteristics={characteristicsWithQuantity}
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
  };

  return !quantity ? (
    <Flex sx={productCardStyles.outOfStockBox}>{renderContent()}</Flex>
  ) : (
    renderContent()
  );
};
