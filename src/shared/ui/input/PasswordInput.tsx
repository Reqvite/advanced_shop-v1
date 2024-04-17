import {Visibility, VisibilityOff} from '@mui/icons-material';
import {Box, FormLabel, IconButton, TextField, TextFieldProps, Typography} from '@mui/material';
import {InputAdornment} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import {forwardRef, ReactElement, useState} from 'react';

type Props = Omit<TextFieldProps, 'error'> & {
  label?: string;
  helperText?: string;
  error?: string;
};

export const PasswordInput = forwardRef<HTMLInputElement, Props>(
  ({variant = 'outlined', error, label, helperText, ...otherProps}, ref): ReactElement => {
    const [showPassword, setShowPassword] = useState(false);

    const onClickShowPassword = (): void => setShowPassword(!showPassword);
    const onMouseDownPassword = (): void => setShowPassword(!showPassword);

    return (
      <FormControl fullWidth>
        {label && <FormLabel>{label}</FormLabel>}
        <TextField
          variant={variant}
          inputRef={ref}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={onClickShowPassword}
                  onMouseDown={onMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
          {...otherProps}
          type={showPassword ? 'text' : 'password'}
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
    );
  }
);
