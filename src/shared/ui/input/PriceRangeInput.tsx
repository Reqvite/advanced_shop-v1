import {Slider, SliderProps, Stack, Typography} from '@mui/material';
import {ChangeEvent, forwardRef, ReactElement, useState} from 'react';
import {Input} from './Input';

interface Props extends SliderProps {
  min?: number;
  max?: number;
}

type Value = [number, number];

export const PriceRangeInput = forwardRef<HTMLSpanElement, Props>(
  ({min = 1, max = 1000, onChange, ...otherProps}, ref): ReactElement => {
    const [minNum] = useState(min);
    const [maxNum] = useState(max);
    const [priceRangeValue, setPriceRangeValue] = useState<Value>(
      (otherProps.value as Value) || [min, max]
    );

    const handleSliderChange = (event: Event, newValue: Value | number) => {
      setPriceRangeValue(newValue as Value);
      if (onChange) onChange(event, newValue, 0);
    };

    const onMinPriceChange = (event: ChangeEvent<HTMLInputElement>): void => {
      const value = Number(event.target.value);
      if (value <= minNum) {
        setPriceRangeValue([Number(minNum), priceRangeValue[1]]);
      } else if (value >= maxNum) {
        setPriceRangeValue([Number(maxNum), priceRangeValue[1]]);
      } else {
        setPriceRangeValue([Number(value), priceRangeValue[1]]);
      }
      if (onChange) {
        onChange([Number(value), priceRangeValue[1]], 0);
      }
    };

    const onMaxPriceChange = (event: ChangeEvent<HTMLInputElement>): void => {
      const value = Number(event.target.value);
      if (value <= minNum) {
        setPriceRangeValue([priceRangeValue[0], Number(minNum)]);
      } else if (value >= maxNum) {
        setPriceRangeValue([priceRangeValue[0], Number(maxNum)]);
      } else {
        setPriceRangeValue([priceRangeValue[0], Number(value)]);
      }
      if (onChange) {
        onChange([priceRangeValue[0], Number(value)], 0);
      }
    };

    return (
      <Stack spacing={2} direction="column">
        <Slider
          {...otherProps}
          ref={ref}
          value={priceRangeValue}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={minNum}
          max={maxNum}
        />
        <Stack direction="row" spacing={2} alignItems="center">
          <Input
            sx={{width: '90px'}}
            name="min"
            value={priceRangeValue[0]}
            onChange={onMinPriceChange}
          />
          <Typography variant="body2">-</Typography>
          <Input
            sx={{width: '90px'}}
            name="max"
            value={priceRangeValue[1]}
            onChange={onMaxPriceChange}
          />
        </Stack>
      </Stack>
    );
  }
);
