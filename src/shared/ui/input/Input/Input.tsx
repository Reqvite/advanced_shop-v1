import {Visibility, VisibilityOff} from '@mui/icons-material';
import {Box, IconButton, InputLabel, TextField, TextFieldProps, Typography} from '@mui/material';
import {InputAdornment} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import {nanoid} from '@reduxjs/toolkit';
import {forwardRef, ReactElement, useState} from 'react';
import {testIdValues} from '@/test/const/testId';

export type InputProps = Omit<TextFieldProps, 'error'> & {
  label?: string;
  helperText?: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'outlined',
      error,
      label,
      helperText,
      type = 'text',
      required,
      placeholder,
      ...otherProps
    },
    ref
  ): ReactElement => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = (): void => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const renderEndAdornment = (): ReactElement | null => {
      if (type === 'password') {
        return (
          <InputAdornment position="end">
            <IconButton
              data-testid={testIdValues.passwordInputButton}
              aria-label="toggle password visibility"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        );
      }
      return null;
    };

    const textFieldId = otherProps.id || nanoid();

    return (
      <Box data-testid={testIdValues.input}>
        {label && (
          <InputLabel htmlFor={textFieldId} required={required} sx={{fontSize: 14}}>
            {label}
          </InputLabel>
        )}
        <FormControl fullWidth>
          <TextField
            id={textFieldId}
            variant={variant}
            inputRef={ref}
            type={showPassword ? 'text' : type}
            {...otherProps}
            InputProps={{
              endAdornment: renderEndAdornment()
            }}
            placeholder={placeholder ? placeholder : label}
          />
          {helperText && <FormHelperText>{helperText}</FormHelperText>}
          <Box height="6px" mt="1px">
            {error && (
              <Typography
                data-testid={testIdValues.inputErrorMessage}
                fontSize={12}
                color="error.light"
              >
                {error}
              </Typography>
            )}
          </Box>
        </FormControl>
      </Box>
    );
  }
);
