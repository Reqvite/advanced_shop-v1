import {Box, FormControl, FormHelperText, FormLabel, Typography} from '@mui/material';
import {forwardRef, ReactElement, TextareaHTMLAttributes} from 'react';
import {TextAreaStyled} from './styles';

type Props = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'error'> & {
  label?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
};

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({label, helperText, error, required, disabled, ...otherProps}, ref): ReactElement => {
    return (
      <FormControl fullWidth>
        <FormLabel required={required} sx={{fontSize: 14}}>
          {label}
        </FormLabel>
        <TextAreaStyled
          disabled={disabled}
          sx={{resize: 'none', width: '100%'}}
          ref={ref}
          {...otherProps}
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        {error && (
          <Box height="6px" mt="1px">
            <Typography fontSize={12} color="error.light">
              {error}
            </Typography>
          </Box>
        )}
      </FormControl>
    );
  }
);
