import {CartItem} from '@/shared/types/cart';
import {
  useAddToCartMutation,
  useDeleteItemByIdMutation,
  useUpdatedCartMutation
} from '@/slices/cart';
import {useUpdateWishlistMutation} from '@/slices/products';
import {useConfirm} from './useConfirm.hook';

type Params = {
  quantity: number;
  title: string;
};

type UseCartAndWishlistActionsReturnType = {
  onConfirmDeleteItem: (_id: string) => void;
  onClickWishlist: ({_id}: {_id: string}) => void;
  onClickAddToCart: (data: CartItem) => void;
  onUpdateCartQuantity: (data: CartItem) => void;
  updateWishlistIsLoading: boolean;
  addToCartIsLoading: boolean;
  updateCartIsLoading: boolean;
  deleteIsLoading: boolean;
};

export const useCartAndWishlistActions = ({
  quantity,
  title
}: Params): UseCartAndWishlistActionsReturnType => {
  const confirm = useConfirm({
    message: `Are you sure you want to delete ${quantity} item(s) of "${title}" ?`
  });
  const [onClickWishlist, {isLoading: updateWishlistIsLoading}] = useUpdateWishlistMutation();
  const [onClickAddToCart, {isLoading: addToCartIsLoading}] = useAddToCartMutation();
  const [onUpdateCartQuantity, {isLoading: updateCartIsLoading}] = useUpdatedCartMutation();
  const [deleteItem, {isLoading: deleteIsLoading}] = useDeleteItemByIdMutation();

  const onConfirmDeleteItem = async (_id: string): Promise<void> => {
    await confirm();
    deleteItem({_id});
  };

  return {
    onConfirmDeleteItem,
    onClickWishlist,
    onClickAddToCart,
    onUpdateCartQuantity,
    updateWishlistIsLoading,
    addToCartIsLoading,
    updateCartIsLoading,
    deleteIsLoading
  };
};

export type UseCartAndWishlistActionsType = typeof useCartAndWishlistActions;