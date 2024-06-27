import {screen} from '@testing-library/react';
import {testIdValues} from '@/test/const/testId';
import {renderWithProviders} from '@/test/wrappers/renderWithProviders';
import App from './App';

describe('App', () => {
  it('renders the App component', () => {
    renderWithProviders(<App />);

    expect(screen.getByTestId(testIdValues.appId)).toBeInTheDocument();
  });
});
