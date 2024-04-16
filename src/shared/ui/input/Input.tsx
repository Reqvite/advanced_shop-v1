import {Box, FormLabel, TextField, TextFieldProps, Typography} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import {forwardRef} from 'react';

type Props = Omit<TextFieldProps, 'error'> & {
  label?: string;
  helperText?: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, Props>(
  ({variant = 'outlined', error, label, helperText, ...otherProps}, ref) => {
    return (
      <FormControl fullWidth>
        {label && <FormLabel>{label}</FormLabel>}
        <TextField variant={variant} inputRef={ref} {...otherProps} />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        <Box height="5px">{error && <Typography color="error.light">{error}</Typography>}</Box>
      </FormControl>
    );
  }
);
