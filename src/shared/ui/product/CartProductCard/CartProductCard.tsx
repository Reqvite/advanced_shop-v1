import CloseIcon from '@mui/icons-material/Close';
import {Box, CardContent, CardMedia, Stack, SxProps} from '@mui/material';
import {grey} from '@/app/theme/theme';
import {useAuth, useConfirm, useDebouncedCallback, useMediaQuery} from '@/shared/lib/hooks';
import {maxQuantitySchema} from '@/shared/lib/yup/maxQuantity.schema';
import {DeleteItemByIdMutation} from '@/shared/types/cart';
import {CartProductI, UpdateCartMutation, UpdateWishlistMutation} from '@/shared/types/product';
import {Flex} from '../../base/Flex';
import {Button, WishlistButton} from '../../button';
import {Form} from '../../form';
import {CharacteristicList} from '../ui/CharacteristicList';
import {PriceText} from '../ui/PriceText';
import {ProductHeading} from '../ui/ProductHeading';
import {cartProductCardOptions} from './option';

type Props = CartProductI & {
  sx?: SxProps;
  onUpdateWishlist: UpdateWishlistMutation;
  onDeleteItem: DeleteItemByIdMutation;
  onUpdateCart: UpdateCartMutation;
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
  onDeleteItem,
  onUpdateWishlist,
  onUpdateCart
}: Props) => {
  const auth = useAuth();
  const isMobile = useMediaQuery(breakPoint);

  const confirm = useConfirm({
    message: `Are you sure you want to delete ${quantity} item(s) of "${title}" ?`
  });
  const [onClickWishlist, {isLoading: isLoadingWishlist}] = onUpdateWishlist();
  const [deleteItem, {isLoading: deleteIsLoading}] = onDeleteItem();
  const [onUpdateCartQuantity] = onUpdateCart();

  const options = cartProductCardOptions({
    maxQuantity: quantity
  });

  const onConfirmDeleteItem = async (_id: string): Promise<void> => {
    await confirm();
    deleteItem({_id});
  };

  const onChange = useDebouncedCallback(({quantity}): void => {
    onUpdateCartQuantity({_id, quantity});
  }, 500);

  return (
    <Flex sx={{...sx}} width="100%" justifyContent="center" gap={1} py={1}>
      <Flex flexDirection={isMobile ? 'column' : 'row'}>
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
                  isLoading={isLoadingWishlist}
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
        <Box display="flex" alignItems="flex-end" pr={1}>
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
