import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  Rating,
  RatingProps,
  Stack,
  Typography
} from '@mui/material';
import {forwardRef, ReactElement, SyntheticEvent} from 'react';

type Props = RatingProps & {
  label?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  onChange?: (value: number) => void;
};

const defaultValue = 0;

export const FormRating = forwardRef<HTMLElement, Props>(
  (
    {value = defaultValue, onChange, helperText, error, required, label, ...otherProps},
    ref
  ): ReactElement => {
    const onChangeRating = (event: SyntheticEvent<Element, Event>): void => {
      if (onChange) {
        const target = event.target as HTMLInputElement;
        onChange(Number(target.value));
      }
    };

    return (
      <Stack>
        {label && (
          <InputLabel required={required} sx={{fontSize: 14}}>
            {label}
          </InputLabel>
        )}
        <FormControl>
          <Rating
            ref={ref}
            onChange={onChangeRating}
            name="simple-controlled"
            value={value}
            {...otherProps}
          />
          {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
        {error && (
          <Box height="6px" mt="1px">
            <Typography fontSize={12} color="error.light">
              {error}
            </Typography>
          </Box>
        )}
      </Stack>
    );
  }
);
