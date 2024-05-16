import {notificationService} from '@/shared/services';
import {ErrorI} from '@/shared/types/error';
import {GetWishlistQuery, productsApi} from './products.rtk';

const onQueryStartedToast = async (
  {queryFulfilled}: {queryFulfilled: Promise<unknown>},
  message = 'Success',
  callback?: () => void
): Promise<void> => {
  try {
    await queryFulfilled;
    if (callback) {
      callback();
    }
    notificationService.success(message);
  } catch (error: unknown) {
    const {error: customError} = error as {error: ErrorI};
    if (customError.code === 401) return;
    notificationService.error(customError?.message);
  }
};

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

  await onQueryStartedToast({queryFulfilled}, 'Wishlist updated', updateCallback);
};

const forceRefetch = ({currentArg, previousArg}: {currentArg: unknown; previousArg: unknown}) => {
  return currentArg !== previousArg;
};

export {forceRefetch, onQueryStartedToast, onQueryStartedUpdateWishlist};
