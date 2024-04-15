import {ReactElement, ReactNode} from 'react';
import {BrowserRouter} from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import {StoreProvider} from './StoreProvider/ui/StoreProvider';
import {ThemeProvider} from './ThemeProvider/ThemeProvider';

type Props = {
  children: ReactNode;
};

export const Providers = (props: Props): ReactElement => {
  const {children} = props;
  return (
    <StoreProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <ThemeProvider>{children}</ThemeProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </StoreProvider>
  );
};
