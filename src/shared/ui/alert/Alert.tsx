import 'react-toastify/dist/ReactToastify.css';
import {ReactElement} from 'react';
import {ToastContainer} from 'react-toastify';
import {useAppSelector} from '@/shared/lib/hooks';
import {selectTheme} from '@/slices/theme';

export const Alert = (): ReactElement => {
  const darkMode = useAppSelector(selectTheme);

  return (
    <ToastContainer autoClose={3000} position="top-center" theme={darkMode ? 'dark' : 'light'} />
  );
};
