import {Slider, SliderProps, Stack, Typography} from '@mui/material';
import {ChangeEvent, forwardRef, ReactElement, useState} from 'react';
import {Input} from './Input';

interface Props extends SliderProps {
  min?: number;
  max?: number;
}

type Value = [number, number];
type onChangeInputValue = (value: Value) => void;

export const PriceRangeInput = forwardRef<HTMLSpanElement, Props>(
  ({min = 1, max = 1000, onChange, ...otherProps}, ref): ReactElement => {
    const [minNum] = useState<number>(min);
    const [maxNum] = useState<number>(max);
    const [priceRangeValue, setPriceRangeValue] = useState<Value>(
      (otherProps.value as Value) || [min, max]
    );

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
      setPriceRangeValue(newValue as Value);
      if (onChange) onChange(event, newValue, 0);
    };

    const onPriceChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      const value = Number(event.target.value);
      const isMin = event.target.name === 'min';
      let newPriceRangeValue: Value;

      if (isMin) {
        if (value <= minNum) {
          newPriceRangeValue = [minNum, priceRangeValue[1]];
        } else if (value >= maxNum) {
          newPriceRangeValue = [maxNum, priceRangeValue[1]];
        } else {
          newPriceRangeValue = [value, priceRangeValue[1]];
        }
      } else {
        if (value <= minNum) {
          newPriceRangeValue = [priceRangeValue[0], minNum];
        } else if (value >= maxNum) {
          newPriceRangeValue = [priceRangeValue[0], maxNum];
        } else {
          newPriceRangeValue = [priceRangeValue[0], value];
        }
      }

      setPriceRangeValue(newPriceRangeValue);

      const onChangeInput = onChange as unknown as onChangeInputValue;
      if (onChangeInput) {
        onChangeInput(newPriceRangeValue);
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
            onChange={(event) => onPriceChange(event)}
          />
          <Typography variant="body2">-</Typography>
          <Input
            sx={{width: '90px'}}
            name="max"
            value={priceRangeValue[1]}
            onChange={(event) => onPriceChange(event)}
          />
        </Stack>
      </Stack>
    );
  }
);
