import {SliderProps, Stack, Typography} from '@mui/material';
import {ChangeEvent, forwardRef, ReactElement, useEffect, useState} from 'react';
import {Input} from '../../input/Input/Input';
import {Slider} from '../Slider';
import {calculateNewRangeValue} from './model/calculateNewRangeValue';
import {Value} from './model/types';

interface Props extends SliderProps {
  min?: number;
  max?: number;
  label?: string;
}

type onChangeInputValue = (value: Value) => void;

const defaultMin = 1;
const defaultMax = 1000;

export const SliderWithInput = forwardRef<HTMLSpanElement, Props>(
  ({min = defaultMin, max = defaultMax, onChange, label, ...otherProps}, ref): ReactElement => {
    const [rangeValue, setRangeValue] = useState<Value>((otherProps.value as Value) || [min, max]);

    useEffect(() => {
      setRangeValue(otherProps.value as Value);
    }, [otherProps.value]);

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
      setRangeValue(newValue as Value);
      if (onChange) onChange(event, newValue, 0);
    };

    const onInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      const value = parseFloat(event.target.value);
      if (isNaN(value)) {
        return;
      }
      const isMin = event.target.name === 'min';
      const newRangeValue = calculateNewRangeValue({value, isMin, min, max, rangeValue});

      setRangeValue(newRangeValue);
      const onChangeInput = onChange as unknown as onChangeInputValue;

      if (onChangeInput) {
        onChangeInput(newRangeValue);
      }
    };

    return (
      <Stack spacing={2} direction="column">
        <Slider
          {...otherProps}
          ref={ref}
          value={rangeValue}
          onChange={handleSliderChange}
          min={min}
          max={max}
          label={label}
          step={0.5}
        />
        <Stack direction="row" spacing={2} alignItems="center">
          <Input
            sx={{width: '90px'}}
            name="min"
            value={rangeValue[0]}
            onChange={(event) => onInputChange(event)}
          />
          <Typography variant="body2">-</Typography>
          <Input
            sx={{width: '90px'}}
            name="max"
            value={rangeValue[1]}
            onChange={(event) => onInputChange(event)}
          />
        </Stack>
      </Stack>
    );
  }
);
