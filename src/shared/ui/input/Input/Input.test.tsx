import {fireEvent, render, screen} from '@testing-library/react';
import {testIdValues} from '@/test/const/testId';
import {Input} from './Input';

describe('Input Component', () => {
  it('renders input field with label', () => {
    render(<Input label="Username" />);
    const inputElement = screen.getByLabelText('Username') as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe('text');
  });

  it('input write', () => {
    render(<Input label="Username" />);
    const inputElement = screen.getByLabelText('Username') as HTMLInputElement;

    fireEvent.change(inputElement, {target: {value: 'test-username'}});
    expect(inputElement.value).toBe('test-username');
  });

  it('toggles password visibility correctly', async () => {
    render(<Input label="Password" type="password" />);
    const inputElement = screen.getByLabelText('Password') as HTMLInputElement;
    const toggleButton = screen.getByTestId(testIdValues.passwordInputButton);

    expect(inputElement.type).toBe('password');
    fireEvent.click(toggleButton);
    expect(inputElement.type).toBe('text');
  });

  it('displays error message correctly', () => {
    const errorMessage = 'Password is required';
    render(<Input label="Password" error={errorMessage} />);
    const errorElement = screen.getByTestId(testIdValues.inputErrorMessage);

    expect(errorElement).toBeInTheDocument();
  });
});
