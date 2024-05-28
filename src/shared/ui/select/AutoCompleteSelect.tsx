import {
  Autocomplete,
  AutocompleteProps,
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  TextField,
  Typography
} from '@mui/material';
import {forwardRef, ReactElement} from 'react';
import {autoCompleteStyles} from '@/app/theme/styles';
import {AutoCompleteOptionsI} from '@/shared/types/options';

type Props = Omit<AutocompleteProps<any, any, any, any, any>, 'error' | 'onChange'> & {
  label?: string;
  helperText?: string;
  options: AutoCompleteOptionsI[];
  onChange: (value: string | null | undefined) => void;
  error?: string;
  required?: boolean;
};

export const AutoCompleteSelect = forwardRef<HTMLSelectElement, Props>(
  (
    {label, helperText, options, error, required, disabled, value, onChange, ...otherProps},
    ref
  ): ReactElement => {
    return (
      <FormControl fullWidth>
        <FormLabel required={required} sx={{fontSize: 14}}>
          {label}
        </FormLabel>
        <Autocomplete
          options={options}
          value={
            value
              ? options.find((option) => {
                  return value === option._id;
                }) ?? null
              : null
          }
          getOptionLabel={(option: AutoCompleteOptionsI) => option.label}
          onChange={(_, newValue) => {
            if (onChange) {
              onChange(newValue ? newValue._id : null);
            }
          }}
          disabled={disabled}
          sx={autoCompleteStyles.autoComplete}
          {...otherProps}
          renderInput={(params) => (
            <TextField
              placeholder={label}
              inputRef={ref}
              sx={autoCompleteStyles.textField}
              {...params}
            />
          )}
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
