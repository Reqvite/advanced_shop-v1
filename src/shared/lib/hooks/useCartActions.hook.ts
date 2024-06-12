import {RtkApiTagsEnum} from '@/shared/enums/rtkTags.enum';
import {CartItem, CompleteOrderArgs} from '@/shared/types/cart';
import {
  useAddToCartMutation,
  useCreateCheckoutSessionMutation,
  useDeleteItemByIdMutation,
  useUpdatedCartMutation
} from '@/slices/cart/cart.rtk';
import {productsApi} from '@/slices/products/products.rtk';
import {useAppDispatch} from './useAppDispatch.hook';
import {useConfirm} from './useConfirm.hook';

type Params = {
  quantity: number;
  title: string;
};

type UseCartActionsReturnType = {
  onConfirmDeleteItem: (_id: string) => void;
  invalidateProduct: () => void;
  onCreateCheckoutSession: (data: CompleteOrderArgs) => void;
  onClickAddToCart: (data: CartItem) => any;
  onUpdateCartQuantity: (data: CartItem) => any;
  createCheckoutSessionIsLoading: boolean;
  addToCartIsLoading: boolean;
  updateCartIsLoading: boolean;
  deleteIsLoading: boolean;
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
  const [onCreateCheckoutSession, {isLoading: createCheckoutSessionIsLoading}] =
    useCreateCheckoutSessionMutation();

  const onConfirmDeleteItem = async (_id: string): Promise<void> => {
    await confirm();
    deleteItem({_id});
  };

  const invalidateProduct = (): void => {
    dispatch(productsApi.util.invalidateTags([RtkApiTagsEnum.Product]));
  };

  return {
    invalidateProduct,
    onConfirmDeleteItem,
    onClickAddToCart,
    onUpdateCartQuantity,
    onCreateCheckoutSession,
    createCheckoutSessionIsLoading,
    addToCartIsLoading,
    updateCartIsLoading,
    deleteIsLoading
  };
};

export type UseCartActionsType = typeof useCartActions;
