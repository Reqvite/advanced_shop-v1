import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  NativeSelect,
  NativeSelectProps,
  OutlinedInput,
  Typography
} from '@mui/material';
import {forwardRef, ReactElement} from 'react';
import {LabelOptionsI} from '@/shared/types/options';

type Props = Omit<NativeSelectProps, 'error'> & {
  label?: string;
  helperText?: string;
  options: LabelOptionsI[];
  error?: string;
};

export const CustomNativeSelect = forwardRef<HTMLSelectElement, Props>(
  ({label, helperText, options, error, required, disabled, ...otherProps}, ref): ReactElement => {
    const renderOptions = options.map(({label, value}) => (
      <option key={value} value={value}>
        {label}
      </option>
    ));

    return (
      <FormControl fullWidth>
        <FormLabel required={required} sx={{fontSize: 14}}>
          {label}
        </FormLabel>
        <NativeSelect
          input={<OutlinedInput />}
          inputProps={{onChange: otherProps.onChange}}
          inputRef={ref}
          disabled={disabled}
          {...otherProps}
        >
          {renderOptions}
        </NativeSelect>
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
