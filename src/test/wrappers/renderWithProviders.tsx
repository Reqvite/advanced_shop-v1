import type {RenderOptions} from '@testing-library/react';
import {render} from '@testing-library/react';
import React, {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {store as appStore} from '@/app/providers/StoreProvider/config/store';
import {RootReducer, StoreInstance} from '@/app/providers/StoreProvider/config/types';
import {ThemeProvider} from '@/app/providers/ThemeProvider/ThemeProvider';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootReducer>;
  store?: StoreInstance;
}

export function renderWithProviders(
  ui: React.ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {}
) {
  const {store = appStore.instance, ...renderOptions} = extendedRenderOptions;

  const Wrapper = ({children}: PropsWithChildren) => (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>{children}</ThemeProvider>
      </BrowserRouter>
    </Provider>
  );

  return {
    store,
    ...render(ui, {wrapper: Wrapper, ...renderOptions})
  };
}
