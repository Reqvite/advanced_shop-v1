import CloseIcon from '@mui/icons-material/Close';
import {Box, CardContent, CardMedia, Stack, SxProps} from '@mui/material';
import {grey} from '@/app/theme/theme';
import {useAuth, useDebouncedCallback, useMediaQuery} from '@/shared/lib/hooks';
import {UseCartAndWishlistActionsType} from '@/shared/lib/hooks/useCartAndWishlistActions.hook';
import {maxQuantitySchema} from '@/shared/lib/yup/maxQuantity.schema';
import {CartProductI} from '@/shared/types/product';
import {Flex} from '../../base/Flex';
import {Button, WishlistButton} from '../../button';
import {Form} from '../../form';
import {CharacteristicList} from '../ui/CharacteristicList';
import {PriceText} from '../ui/PriceText';
import {ProductHeading} from '../ui/ProductHeading';
import {cartProductCardOptions} from './option';

type Props = CartProductI & {
  sx?: SxProps;
  useActions: UseCartAndWishlistActionsType;
};

const breakPoint = 1030;

export const CartProductCard = ({
  _id,
  rating = 0,
  title,
  characteristics,
  price,
  discount,
  images,
  sx,
  quantity,
  orderedQuantity,
  useActions
}: Props) => {
  const auth = useAuth();
  const {
    onConfirmDeleteItem,
    onClickWishlist,
    onUpdateCartQuantity,
    updateWishlistIsLoading,
    deleteIsLoading
  } = useActions({quantity: orderedQuantity, title});
  const isMobile = useMediaQuery(breakPoint);

  const options = cartProductCardOptions({
    maxQuantity: quantity
  });

  const onChange = useDebouncedCallback(({quantity}): void => {
    onUpdateCartQuantity({_id, quantity});
  }, 500);

  return (
    <Flex sx={{...sx}} width="100%" gap={1} py={1}>
      <Flex flexDirection={isMobile ? 'column' : 'row'} width="100%" justifyContent="space-between">
        <Flex>
          <Stack>
            <CardMedia
              component="img"
              alt={title}
              height="67"
              sx={{objectFit: 'contain'}}
              image={images[0]?.src}
            />
            <Box>
              <Stack>
                <WishlistButton
                  isClear
                  isLiked={auth.user?.wishlist.includes(_id)}
                  isLoading={updateWishlistIsLoading}
                  onClick={() => onClickWishlist({_id})}
                >
                  Wishlist
                </WishlistButton>
                <Button
                  variant="text"
                  LeftAddon={CloseIcon}
                  iconSize="small"
                  iconColor="black"
                  sx={{color: grey[200]}}
                  onClick={() => onConfirmDeleteItem(_id)}
                  isLoading={deleteIsLoading}
                >
                  Remove
                </Button>
              </Stack>
            </Box>
          </Stack>
          <CardContent sx={{p: 1}}>
            <ProductHeading
              title={title}
              variant="small"
              rating={rating}
              titleMaxWidth={300}
              headingRows={1}
            />
            <CharacteristicList
              characteristics={characteristics}
              maxListItems={2}
              noWrap
              descriptionMaxWidth={80}
            />
            <PriceText
              priceColor="primary.main"
              price={price}
              discount={discount}
              quantity={orderedQuantity}
            />
          </CardContent>
        </Flex>
        <Box display="flex" justifyContent="flex-end" alignItems="flex-end" pr={1}>
          <Form
            options={options}
            defaultValues={{quantity: orderedQuantity}}
            formValidationSchema={maxQuantitySchema({max: quantity})}
            initialTrigger
            onChange={onChange}
          />
        </Box>
      </Flex>
    </Flex>
  );
};
