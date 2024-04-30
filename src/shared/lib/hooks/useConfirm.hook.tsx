import {ConfirmationForm} from '@/shared/ui';
import {actions as modalActions} from '@/slices/modal';
import {useAppDispatch} from './useAppDispatch.hook';

export const useConfirm = ({
  message = 'Please, confirm your action.'
}: {
  message?: string;
}): (() => void) => {
  const dispatch = useAppDispatch();

  const confirm = async () => {
    await new Promise((resolve, reject) => {
      dispatch(
        modalActions.openModal({
          children: (
            <ConfirmationForm
              message={message}
              onConfirm={() => {
                resolve(true);
                dispatch(modalActions.closeModal());
              }}
              onCancel={() => {
                reject();
                dispatch(modalActions.closeModal());
              }}
            />
          ),
          props: {
            maxWidth: 'sm'
          }
        })
      );
    });
  };

  return confirm;
};
