import {onQueryStartedToast} from '@/shared/lib/helpers';
import {GetWishlistQuery, productsApi} from './products.rtk';

const updateQueryDataCallback =
  ({_id, dispatch}: GetWishlistQuery & {dispatch: (args: unknown) => void}) =>
  () => {
    dispatch(
      productsApi.util.updateQueryData('getUserWishlist', _id, (draft) => {
        draft.results = draft.results.filter((item) => item._id !== _id);
        return draft;
      })
    );
  };

const onQueryStartedUpdateWishlist = async (
  {_id}: GetWishlistQuery,
  {dispatch, queryFulfilled}: {dispatch: (args: unknown) => void; queryFulfilled: Promise<unknown>}
) => {
  const updateCallback = updateQueryDataCallback({_id, dispatch});
  onQueryStartedToast({queryFulfilled}, 'Wishlist updated', updateCallback);
};

const forceRefetch = ({currentArg, previousArg}: {currentArg: unknown; previousArg: unknown}) => {
  return currentArg !== previousArg;
};

export {forceRefetch, onQueryStartedUpdateWishlist};
