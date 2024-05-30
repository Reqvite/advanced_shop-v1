import {CartItem} from '@/shared/types/cart';
import {
  useAddToCartMutation,
  useDeleteItemByIdMutation,
  useUpdatedCartMutation
} from '@/slices/cart';
import {useConfirm} from './useConfirm.hook';

type Params = {
  quantity: number;
  title: string;
};

type UseCartActionsReturnType = {
  onConfirmDeleteItem: (_id: string) => void;
  onClickAddToCart: (data: CartItem) => void;
  onUpdateCartQuantity: (data: CartItem) => void;
  addToCartIsLoading: boolean;
  updateCartIsLoading: boolean;
  deleteIsLoading: boolean;
};

export const useCartActions = ({quantity, title}: Params): UseCartActionsReturnType => {
  const confirm = useConfirm({
    message: `Are you sure you want to delete ${quantity} item(s) of "${title}" ?`
  });
  const [onClickAddToCart, {isLoading: addToCartIsLoading}] = useAddToCartMutation();
  const [onUpdateCartQuantity, {isLoading: updateCartIsLoading}] = useUpdatedCartMutation();
  const [deleteItem, {isLoading: deleteIsLoading}] = useDeleteItemByIdMutation();

  const onConfirmDeleteItem = async (_id: string): Promise<void> => {
    await confirm();
    deleteItem({_id});
  };

  return {
    onConfirmDeleteItem,
    onClickAddToCart,
    onUpdateCartQuantity,
    addToCartIsLoading,
    updateCartIsLoading,
    deleteIsLoading
  };
};

export type UseCartActionsType = typeof useCartActions;
