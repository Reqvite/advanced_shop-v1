import {loadStripe} from '@stripe/stripe-js';
import {toast} from 'react-toastify';
import {Messages} from '@/shared/const/messages.const';
import {CompleteOrderResponse} from '@/shared/types/cart';
import {ErrorI} from '@/shared/types/error';

export const onQueryCreateSessionStartedToast = async ({
  queryFulfilled
}: {
  queryFulfilled: Promise<{data: CompleteOrderResponse}>;
}): Promise<void> => {
  let toastId;
  try {
    toastId = toast.loading(Messages.IS_LOADING('Your checkout'));
    const stripe = await loadStripe(import.meta.env.VITE_STRAPI_PUBLISHABLE_KEY);
    const {
      data: {id}
    } = await queryFulfilled;

    toast.update(toastId, {
      render: 'Redirecting...',
      type: 'success',
      autoClose: 1000,
      isLoading: false
    });

    await stripe?.redirectToCheckout({sessionId: id});
  } catch (error: unknown) {
    const {error: customError} = error as {error: ErrorI};
    toast.error(customError?.message);
  }
};
