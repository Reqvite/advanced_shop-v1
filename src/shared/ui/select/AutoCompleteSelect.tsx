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

type Props = Omit<
  AutocompleteProps<AutoCompleteOptionsI, false, false, false>,
  'error' | 'onChange'
> & {
  label?: string;
  helperText?: string;
  options: AutoCompleteOptionsI[];
  onChange: (value?: string | null) => void;
  error?: string;
  required?: boolean;
};

function findOptionById(
  options: AutoCompleteOptionsI[],
  value?: string | null
): AutoCompleteOptionsI | null {
  if (!value) return null;

  const foundOption = options.find((option) => value === option._id);
  return foundOption || null;
}

export const AutoCompleteSelect = forwardRef<HTMLSelectElement, Props>(
  (
    {label, helperText, options, error, required, disabled, value, onChange, ...otherProps},
    ref
  ): ReactElement => {
    const newValue = findOptionById(options, value as string | null);

    return (
      <FormControl fullWidth>
        <FormLabel required={required} sx={{fontSize: 14}}>
          {label}
        </FormLabel>
        <Autocomplete
          options={options}
          value={newValue}
          getOptionLabel={(option: AutoCompleteOptionsI) => option.label}
          onChange={(_, updatedValue) => {
            if (onChange) {
              onChange(updatedValue?._id || null);
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
