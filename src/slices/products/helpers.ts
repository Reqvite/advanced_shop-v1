import {encodeSearchParams} from '@/shared/lib/helpers';
import {notificationService} from '@/shared/services';
import {ErrorI} from '@/shared/types/error';
import {actions as filterActions} from '../filter';
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
  ({
    _id,
    setSearchParams,
    navigate,
    dispatch
  }: GetWishlistQuery & {dispatch: (args: unknown) => void}) =>
  () => {
    dispatch(
      productsApi.util.updateQueryData('getUserWishlist', _id, (draft) => {
        if (draft.results.length === 1) {
          dispatch(filterActions.addKey({page: 1}));
          setSearchParams(encodeSearchParams({page: 1}));
          navigate(0);
        }
        draft.results = draft.results.filter((item) => item._id !== _id);
        return draft;
      })
    );
  };

const onQueryStartedUpdateWishlist = async (
  {_id, setSearchParams, navigate}: GetWishlistQuery,
  {dispatch, queryFulfilled}: {dispatch: (args: unknown) => void; queryFulfilled: Promise<unknown>}
) => {
  onQueryStartedToast(
    {queryFulfilled},
    'Wishlist updated',
    updateQueryDataCallback({_id, setSearchParams, navigate, dispatch})
  );
};

const forceRefetch = ({currentArg, previousArg}: {currentArg: unknown; previousArg: unknown}) => {
  return currentArg !== previousArg;
};

export {forceRefetch, onQueryStartedToast, onQueryStartedUpdateWishlist};
