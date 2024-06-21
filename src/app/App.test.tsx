import {screen} from '@testing-library/react';
import {renderWithProviders} from '@/test/wrappers/renderWithProviders';
import App from './App';

const appId = 'app';
describe('App', () => {
  it('renders the App component', () => {
    renderWithProviders(<App />);

    expect(screen.getByTestId(appId)).toBeInTheDocument();
  });
});
