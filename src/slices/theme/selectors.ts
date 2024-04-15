import {store} from '@/app/providers/StoreProvider/config/store';

export const selectTheme = (state: ReturnType<typeof store.instance.getState>) =>
  state.theme.darkMode;
