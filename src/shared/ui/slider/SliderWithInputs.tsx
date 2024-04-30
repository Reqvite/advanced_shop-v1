import {SliderProps, Stack, Typography} from '@mui/material';
import {ChangeEvent, forwardRef, ReactElement, useState} from 'react';
import {Input} from '../input/Input';
import {Slider} from '../slider/Slider';

interface Props extends SliderProps {
  min?: number;
  max?: number;
  label?: string;
}

type Value = [number, number];
type onChangeInputValue = (value: Value) => void;

export const SliderWithInput = forwardRef<HTMLSpanElement, Props>(
  ({min = 1, max = 1000, onChange, label, ...otherProps}, ref): ReactElement => {
    const [minNum] = useState<number>(min);
    const [maxNum] = useState<number>(max);
    const [rangeValue, setRangeValue] = useState<Value>((otherProps.value as Value) || [min, max]);

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
      setRangeValue(newValue as Value);
      if (onChange) onChange(event, newValue, 0);
    };

    const onInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      const value = Number(event.target.value);
      const isMin = event.target.name === 'min';
      let newRangeValue: Value;

      if (isMin) {
        if (value <= minNum) {
          newRangeValue = [minNum, rangeValue[1]];
        } else if (value >= maxNum) {
          newRangeValue = [maxNum, rangeValue[1]];
        } else {
          newRangeValue = [value, rangeValue[1]];
        }
      } else {
        if (value <= minNum) {
          newRangeValue = [rangeValue[0], minNum];
        } else if (value >= maxNum) {
          newRangeValue = [rangeValue[0], maxNum];
        } else {
          newRangeValue = [rangeValue[0], value];
        }
      }

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
          min={minNum}
          max={maxNum}
          label={label}
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
