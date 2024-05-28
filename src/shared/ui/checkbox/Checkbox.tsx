import {
  alpha,
  Box,
  Checkbox as MuiCheckbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Stack,
  Typography
} from '@mui/material';
import {forwardRef, ReactElement, ReactNode} from 'react';
import {grey} from '@/app/theme/theme';

type Props = CheckboxProps & {
  type?: string;
  helperText?: string;
  label?: string;
  error?: string;
  labelComponent?: ReactNode;
};

export const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({helperText, label, error, labelComponent, ...otherProps}, ref): ReactElement => {
    return (
      <Stack>
        <FormControl
          sx={{
            padding: '3px 10px',
            border: `1px solid ${grey[200]}`,
            borderRadius: '12px',
            backgroundColor: alpha(grey[100], 0.2)
          }}
        >
          <FormControlLabel
            control={<MuiCheckbox inputRef={ref} {...otherProps} />}
            label={
              labelComponent ? labelComponent : <Typography className="body2">{label}</Typography>
            }
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
