import {useDispatch} from 'react-redux';
import {StoreInstanceDispatch} from '@/app/providers/StoreProvider/config/types';

export const useAppDispatch: () => StoreInstanceDispatch = () => {
  return useDispatch<StoreInstanceDispatch>();
};
