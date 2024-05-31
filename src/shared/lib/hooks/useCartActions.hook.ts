import {RtkApiTagsEnum} from '@/shared/enums/rtkTags.enum';
import {CartItem, CompleteOrderArgs} from '@/shared/types/cart';
import {
  useAddToCartMutation,
  useCompleteOrderMutation,
  useDeleteItemByIdMutation,
  useUpdatedCartMutation
} from '@/slices/cart';
import {productsApi} from '@/slices/products';
import {useAppDispatch} from './useAppDispatch.hook';
import {useConfirm} from './useConfirm.hook';

type Params = {
  quantity: number;
  title: string;
};

type UseCartActionsReturnType = {
  onConfirmDeleteItem: (_id: string) => void;
  onCompleteOrder: ({orderInformation, products}: CompleteOrderArgs) => void;
  invalidateProduct: () => void;
  onClickAddToCart: (data: CartItem) => any;
  onUpdateCartQuantity: (data: CartItem) => any;
  addToCartIsLoading: boolean;
  updateCartIsLoading: boolean;
  deleteIsLoading: boolean;
  completeOrderIsLoading: boolean;
};

export const useCartActions = (
  {quantity, title}: Params = {quantity: 1, title: 'product'}
): UseCartActionsReturnType => {
  const dispatch = useAppDispatch();
  const confirm = useConfirm({
    message: `Are you sure you want to delete ${quantity} item(s) of "${title}" ?`
  });
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
    onClickAddToCart,
    onUpdateCartQuantity,
    onCompleteOrder,
    addToCartIsLoading,
    updateCartIsLoading,
    deleteIsLoading,
    completeOrderIsLoading
  };
};

export type UseCartActionsType = typeof useCartActions;
