import {RtkApiTagsEnum} from '@/shared/enums/rtkTags.enum';
import {CartItem, CompleteOrderArgs} from '@/shared/types/cart';
import {
  useAddToCartMutation,
  useCompleteOrderMutation,
  useDeleteItemByIdMutation,
  useUpdatedCartMutation
} from '@/slices/cart';
import {productsApi, useUpdateWishlistMutation} from '@/slices/products';
import {useAppDispatch} from './useAppDispatch.hook';
import {useConfirm} from './useConfirm.hook';

type Params = {
  quantity: number;
  title: string;
};

type UseCartAndWishlistActionsReturnType = {
  onConfirmDeleteItem: (_id: string) => void;
  onClickWishlist: ({_id}: {_id: string}) => void;
  onClickAddToCart: (data: CartItem) => any;
  onUpdateCartQuantity: (data: CartItem) => any;
  onCompleteOrder: ({orderInformation, products}: CompleteOrderArgs) => void;
  invalidateProduct: () => void;
  updateWishlistIsLoading: boolean;
  addToCartIsLoading: boolean;
  updateCartIsLoading: boolean;
  deleteIsLoading: boolean;
  completeOrderIsLoading: boolean;
};

export const useCartAndWishlistActions = (
  {quantity, title}: Params = {quantity: 1, title: 'product'}
): UseCartAndWishlistActionsReturnType => {
  const dispatch = useAppDispatch();
  const confirm = useConfirm({
    message: `Are you sure you want to delete ${quantity} item(s) of "${title}" ?`
  });
  const [onClickWishlist, {isLoading: updateWishlistIsLoading}] = useUpdateWishlistMutation();
  const [onClickAddToCart, {isLoading: addToCartIsLoading}] = useAddToCartMutation();
  const [onUpdateCartQuantity, {isLoading: updateCartIsLoading}] = useUpdatedCartMutation();
  const [deleteItem, {isLoading: deleteIsLoading}] = useDeleteItemByIdMutation();
  const [onCompleteOrder, {isLoading: completeOrderIsLoading}] = useCompleteOrderMutation();

  const onConfirmDeleteItem = async (_id: string): Promise<void> => {
    await confirm();
    deleteItem({_id});
  };

  const invalidateProduct = () => {
    dispatch(productsApi.util.invalidateTags([RtkApiTagsEnum.Product]));
  };

  return {
    invalidateProduct,
    onConfirmDeleteItem,
    onClickWishlist,
    onClickAddToCart,
    onUpdateCartQuantity,
    onCompleteOrder,
    updateWishlistIsLoading,
    addToCartIsLoading,
    updateCartIsLoading,
    deleteIsLoading,
    completeOrderIsLoading
  };
};

export type UseCartAndWishlistActionsType = typeof useCartAndWishlistActions;
