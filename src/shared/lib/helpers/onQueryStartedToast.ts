import {notificationService} from '@/shared/services';
import {ErrorI} from '@/shared/types/error';

export const onQueryStartedToast = async (
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
  }
};
