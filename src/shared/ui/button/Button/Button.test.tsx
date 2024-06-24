import {Icon} from '@mui/material';
import {render, screen} from '@testing-library/react';
import {vi} from 'vitest';
import {testIdValues} from '@/test/const/testId';
import {Button} from './Button';

vi.mock('../../loader/Loader', () => ({
  Loader: () => <div>Loading...</div>
}));

describe('Button component', () => {
  it('renders correctly with default props', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByTestId(testIdValues.buttonTestId)).toHaveTextContent('Click Me');
    expect(screen.getByTestId(testIdValues.buttonTestId)).toHaveClass('MuiButton-outlined');
  });

  it('renders with a left addon', () => {
    render(<Button LeftAddon={Icon}>Click Me</Button>);
    expect(screen.getByTestId(testIdValues.buttonTestId)).toContainElement(
      screen.getByTestId('LeftAddon')
    );
    expect(screen.getByTestId('LeftAddon')).toBeInTheDocument();
  });

  it('renders with a right addon', () => {
    render(<Button RightAddon={Icon}>Click Me</Button>);
    expect(screen.getByTestId(testIdValues.buttonTestId)).toContainElement(
      screen.getByTestId('RightAddon')
    );
    expect(screen.getByTestId('RightAddon')).toBeInTheDocument();
  });

  it('renders with both addons', () => {
    render(
      <Button LeftAddon={Icon} RightAddon={Icon}>
        Click Me
      </Button>
    );
    expect(screen.getByTestId(testIdValues.buttonTestId)).toContainElement(
      screen.getByTestId('LeftAddon')
    );
    expect(screen.getByTestId(testIdValues.buttonTestId)).toContainElement(
      screen.getByTestId('RightAddon')
    );
    expect(screen.getByTestId('LeftAddon')).toBeInTheDocument();
    expect(screen.getByTestId('RightAddon')).toBeInTheDocument();
  });

  it('displays loader when isLoading is true', () => {
    render(<Button isLoading>Click Me</Button>);
    expect(screen.getByTestId(testIdValues.buttonTestId)).toContainElement(
      screen.getByText('Loading...')
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('disables button when isLoading is true', () => {
    render(<Button isLoading>Click Me</Button>);
    expect(screen.getByTestId(testIdValues.buttonTestId)).toBeDisabled();
  });

  it('disables button when disabled is true', () => {
    render(<Button disabled>Click Me</Button>);
    expect(screen.getByTestId(testIdValues.buttonTestId)).toBeDisabled();
  });

  it('passes other props correctly', () => {
    render(<Button data-testid="custom-button">Click Me</Button>);
    expect(screen.getByTestId('custom-button')).toBeInTheDocument();
  });
});
