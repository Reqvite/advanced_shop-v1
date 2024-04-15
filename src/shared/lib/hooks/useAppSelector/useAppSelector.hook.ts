import {type TypedUseSelectorHook, useSelector} from 'react-redux';
import {StoreSchema} from '@/app/providers/StoreProvider/config/types';

export const useAppSelector: TypedUseSelectorHook<ReturnType<StoreSchema>> = useSelector;
