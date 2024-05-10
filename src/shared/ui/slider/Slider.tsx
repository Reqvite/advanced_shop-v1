import {
  Box,
  FormHelperText,
  FormLabel,
  Slider as MuiSlider,
  SliderProps,
  Typography
} from '@mui/material';
import {ComponentType, forwardRef, ReactElement} from 'react';
import {Flex} from '../base/Flex';
type Props = SliderProps & {
  required?: boolean;
  label?: string;
  helperText?: string;
  error?: string;
  iconComponent?: ComponentType<any>;
};

export const Slider = forwardRef<HTMLSpanElement, Props>(
  (
    {label, required, helperText, error, value, iconComponent: Component, onChange, ...otherProps},
    ref
  ): ReactElement => {
    return (
      <Box>
        <Flex alignItems="center" justifyContent="space-between">
          {label && (
            <FormLabel sx={{mb: 0}} required={required}>
              {label}
            </FormLabel>
          )}
          {Component && <Component readOnly value={value} />}
        </Flex>
        <MuiSlider
          sx={{
            '& .MuiSlider-thumb': {
              color: 'yellow'
            },
            '& .MuiSlider-track': {
              color: 'yellow'
            },
            '& .MuiSlider-rail': {
              color: '#acc4e4'
            },
            '& .MuiSlider-active': {
              color: 'green'
            }
          }}
          value={value}
          ref={ref}
          valueLabelDisplay="auto"
          onChange={onChange}
          {...otherProps}
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        <Box height="6px" mt="1px">
          {error && (
            <Typography fontSize={12} color="error.light">
              {error}
            </Typography>
          )}
        </Box>
      </Box>
    );
  }
);
