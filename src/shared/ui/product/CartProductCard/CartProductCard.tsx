import {Box, CardMedia, Stack, SxProps} from '@mui/material';
import {useAuth, useDebouncedCallback, useMediaQuery} from '@/shared/lib/hooks';
import {UseCartActionsType} from '@/shared/lib/hooks/useCartActions.hook';
import {useWishlistActionsType} from '@/shared/lib/hooks/useWishlistActions.hook';
import {maxQuantitySchema} from '@/shared/lib/yup/maxQuantity.schema';
import {CartProductI} from '@/shared/types/product';
import {Flex} from '../../base/Flex';
import {WishlistButton} from '../../button';
import {DeleteButton} from '../../button/DeleteButton';
import {Form} from '../../form';
import {CharacteristicList} from '../base/CharacteristicList';
import {PriceText} from '../base/PriceText';
import {ProductHeading} from '../base/ProductHeading';
import {getCharacteristicsWithQuantity} from '../model/getCharacteristicsWithQuantity';
import {cartProductCardOptions} from './option';

type Props = CartProductI & {
  sx?: SxProps;
  useCartActions: UseCartActionsType;
  useWishlistActions: useWishlistActionsType;
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
  useCartActions,
  useWishlistActions
}: Props) => {
  const auth = useAuth();
  const {onClickWishlist, updateWishlistIsLoading} = useWishlistActions();
  const {onConfirmDeleteItem, onUpdateCartQuantity} = useCartActions({
    quantity: orderedQuantity,
    title
  });
  const isMobile = useMediaQuery(breakPoint);
  const options = cartProductCardOptions({
    maxQuantity: quantity
  });
  const characteristicsWithQuantity = getCharacteristicsWithQuantity(characteristics, quantity);

  const onChange = useDebouncedCallback(({quantity}): void => {
    onUpdateCartQuantity({_id, quantity});
  }, 500);

  return (
    <Flex sx={{...sx}} width="100%" padding={1} gap={1}>
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
            <Stack alignItems="center">
              <WishlistButton
                isSmall
                isLiked={auth.user?.wishlist.includes(_id)}
                isLoading={updateWishlistIsLoading}
                onClick={() => onClickWishlist({_id})}
              >
                Wishlist
              </WishlistButton>
              <DeleteButton onClick={() => onConfirmDeleteItem(_id)} />
            </Stack>
          </Stack>
          <Box pb={1}>
            <ProductHeading
              title={title}
              variant="small"
              rating={rating}
              titleMaxWidth={300}
              headingRows={1}
            />
            <CharacteristicList
              characteristics={characteristicsWithQuantity}
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
          </Box>
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
