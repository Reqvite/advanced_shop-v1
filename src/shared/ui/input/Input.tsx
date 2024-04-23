import {Visibility, VisibilityOff} from '@mui/icons-material';
import {Box, IconButton, InputLabel, TextField, TextFieldProps, Typography} from '@mui/material';
import {InputAdornment} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import {forwardRef, ReactElement, useState} from 'react';

export type InputProps = Omit<TextFieldProps, 'error'> & {
  label?: string;
  helperText?: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {variant = 'outlined', error, label, helperText, type = 'text', required, ...otherProps},
    ref
  ): ReactElement => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
      <Box>
        {label && <InputLabel required={required}>{label}</InputLabel>}
        <FormControl fullWidth>
          <TextField
            variant={variant}
            inputRef={ref}
            type={showPassword ? 'text' : type}
            {...otherProps}
            InputProps={
              type === 'password'
                ? {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }
                : undefined
            }
          />
          {helperText && <FormHelperText>{helperText}</FormHelperText>}
          <Box height="6px" mt="1px">
            {error && (
              <Typography fontSize={12} color="error.light">
                {error}
              </Typography>
            )}
          </Box>
        </FormControl>
      </Box>
    );
  }
);
