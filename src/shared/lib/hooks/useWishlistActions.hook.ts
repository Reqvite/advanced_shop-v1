import {useUpdateWishlistMutation} from '@/slices/products/products.rtk';

type UseWishlistActionsReturnType = {
  onClickWishlist: ({_id}: {_id: string}) => void;
  updateWishlistIsLoading: boolean;
};

export const useWishlistActions = (): UseWishlistActionsReturnType => {
  const [onClickWishlist, {isLoading: updateWishlistIsLoading}] = useUpdateWishlistMutation();

  return {
    onClickWishlist,
    updateWishlistIsLoading
  };
};

export type useWishlistActionsType = typeof useWishlistActions;
