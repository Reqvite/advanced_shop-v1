import {fireEvent, render, screen} from '@testing-library/react';
import {vi} from 'vitest';
import {testIdValues} from '@/test/const/testId';
import {QuantityInput} from './QuantityInput';

describe('QuantityInput Component', () => {
  it('increments value when Add button is clicked', () => {
    const onChangeMock = vi.fn();
    render(<QuantityInput value={5} onChange={onChangeMock} label="Quantity" min={1} max={10} />);

    const addButton = screen.getByTestId(testIdValues.quantityInputIncrease);
    fireEvent.click(addButton);

    expect(onChangeMock).toHaveBeenCalledWith(6);
  });

  it('decrements value when Remove button is clicked', () => {
    const onChangeMock = vi.fn();
    render(<QuantityInput value={5} onChange={onChangeMock} label="Quantity" min={1} max={10} />);

    const removeButton = screen.getByTestId(testIdValues.quantityInputDecrease);
    fireEvent.click(removeButton);

    expect(onChangeMock).toHaveBeenCalledWith(4);
  });

  it('updates value when typing into the input field', () => {
    const onChangeMock = vi.fn();
    render(<QuantityInput value={5} onChange={onChangeMock} label="Quantity" min={1} max={10} />);

    const inputElement = screen.getByRole('spinbutton') as HTMLInputElement;
    fireEvent.change(inputElement, {target: {value: '7'}});

    expect(onChangeMock).toHaveBeenCalledWith(7);
  });

  it('does not exceed maximum value', () => {
    const onChangeMock = vi.fn();
    render(<QuantityInput value={10} onChange={onChangeMock} label="Quantity" min={1} max={10} />);

    const addButton = screen.getByTestId(testIdValues.quantityInputIncrease);
    fireEvent.click(addButton);

    expect(onChangeMock).not.toHaveBeenCalled();
  });

  it('does not go below minimum value', () => {
    const onChangeMock = vi.fn();
    render(<QuantityInput value={1} onChange={onChangeMock} label="Quantity" min={1} max={10} />);

    const removeButton = screen.getByTestId(testIdValues.quantityInputDecrease);
    fireEvent.click(removeButton);

    expect(onChangeMock).not.toHaveBeenCalled();
  });
});
