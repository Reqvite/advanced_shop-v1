import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {Box, FormHelperText, IconButton, InputLabel, TextField, Typography} from '@mui/material';
import {ChangeEvent, forwardRef, ReactElement, SetStateAction} from 'react';
import {Flex} from '../base/Flex';
import {InputProps} from './Input';

type Props = InputProps & {
  value: number | '';
  onChange: (callback: SetStateAction<number | string>) => void;
  label?: string;
  helperText?: string;
  error?: string;
  min?: number;
  max?: number;
};

export const QuantityInput = forwardRef<HTMLInputElement, Props>(
  (
    {value, onChange, label, helperText, error, min = 1, max = 100, required, ...otherProps},
    ref
  ): ReactElement => {
    const numberValue = Number(value);

    const onIncrement = (): void => {
      if (numberValue < max) {
        onChange((prev) => Number(prev) + 1);
      }
    };

    const onDecrement = (): void => {
      if (numberValue > min) {
        onChange((prev) => Number(prev) - 1);
      }
    };

    const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
      const inputValue = event.target.value;
      const numericValue = Number(inputValue);

      if (!isNaN(numericValue)) {
        if (numericValue >= min && numericValue <= max) {
          onChange(numericValue);
        }
      } else {
        onChange(min);
      }
    };

    return (
      <>
        {label && <InputLabel required={required}>{label}</InputLabel>}
        <Flex gap={1} alignItems="center">
          <IconButton size="small" onClick={onDecrement} disabled={numberValue <= min}>
            <RemoveIcon fontSize="small" />
          </IconButton>
          <TextField
            type="number"
            value={value ?? String(value)}
            onChange={onInputChange}
            inputRef={ref}
            {...otherProps}
            inputProps={{style: {textAlign: 'center'}}}
            sx={{width: 60}}
          />
          <IconButton size="small" onClick={onIncrement} disabled={numberValue >= max}>
            <AddIcon fontSize="small" />
          </IconButton>
        </Flex>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        <Box height="6px" mt="1px">
          {error && (
            <Typography fontSize={12} color="error.light">
              {error}
            </Typography>
          )}
        </Box>
      </>
    );
  }
);
