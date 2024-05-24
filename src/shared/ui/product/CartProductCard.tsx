import CloseIcon from '@mui/icons-material/Close';
import {Box, CardActions, CardContent, CardMedia, Stack, SxProps} from '@mui/material';
import {ReactElement} from 'react';
import {grey} from '@/app/theme/theme';
import {useAuth, useConfirm} from '@/shared/lib/hooks';
import {DeleteItemByIdMutation} from '@/shared/types/cart';
import {CartProductI, UpdateWishlistMutation} from '@/shared/types/product';
import {Flex} from '../base/Flex';
import {Button, WishlistButton} from '../button';
import {CharacteristicList} from './ui/CharacteristicList';
import {PriceText} from './ui/PriceText';
import {ProductHeading} from './ui/ProductHeading';

type Props = CartProductI & {
  sx?: SxProps;
  onUpdateWishlist: UpdateWishlistMutation;
  onDeleteItem: DeleteItemByIdMutation;
};

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
  onDeleteItem,
  onUpdateWishlist
}: Props): ReactElement => {
  const auth = useAuth();
  const confirm = useConfirm({
    message: `Are you sure you want to delete ${quantity} item(s) of "${title}" ?`
  });
  const [onClickWishlist, {isLoading}] = onUpdateWishlist();
  const [deleteItem, {isLoading: deleteIsLoading}] = onDeleteItem();

  const onConfirmDeleteItem = async (_id: string) => {
    await confirm();
    deleteItem({_id});
  };

  return (
    <Flex sx={{...sx} as SxProps} width="100%" justifyContent="space-between" gap={1} py={1}>
      <Flex>
        <Stack>
          <CardMedia
            component="img"
            alt={title}
            height="67"
            sx={{objectFit: 'contain'}}
            image={images[0]?.src}
          />
          <CardActions>
            <Stack>
              <WishlistButton
                isClear
                isLiked={auth.user?.wishlist.includes(_id)}
                isLoading={isLoading}
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
          </CardActions>
        </Stack>
        <CardContent sx={(theme) => ({p: theme.spacing(1)})}>
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
          <PriceText priceColor="primary.main" price={price} discount={discount} />
        </CardContent>
      </Flex>
      <Box display="flex" alignItems="flex-end">
        {/* <QuantityInput /> */}
      </Box>
    </Flex>
  );
};
