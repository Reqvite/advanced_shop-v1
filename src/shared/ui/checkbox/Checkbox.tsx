import {
  Checkbox as MuiCheckbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Typography
} from '@mui/material';
import {forwardRef, ReactElement} from 'react';

type Props = CheckboxProps & {
  type?: string;
  helperText?: string;
  label?: string;
};

export const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({helperText, label, ...otherProps}, ref): ReactElement => {
    return (
      <FormControl>
        {label && <FormLabel>{label}</FormLabel>}
        <FormControlLabel
          control={<MuiCheckbox inputRef={ref} {...otherProps} />}
          label={<Typography className="body2">{label}</Typography>}
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  }
);
