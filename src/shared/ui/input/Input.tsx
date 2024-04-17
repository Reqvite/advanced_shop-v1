import {Box, FormLabel, TextField, TextFieldProps, Typography} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import {forwardRef, ReactElement} from 'react';

export type InputProps = Omit<TextFieldProps, 'error'> & {
  label?: string;
  helperText?: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({variant = 'outlined', error, label, helperText, ...otherProps}, ref): ReactElement => {
    return (
      <FormControl fullWidth>
        {label && <FormLabel>{label}</FormLabel>}
        <TextField variant={variant} inputRef={ref} {...otherProps} />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        <Box height="6px" mt="1px">
          {error && (
            <Typography fontSize={12} color="error.light">
              {error}
            </Typography>
          )}
        </Box>
      </FormControl>
    );
  }
);
