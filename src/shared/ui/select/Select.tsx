import {Box, FormControl, FormHelperText, MenuItem, SelectProps, Typography} from '@mui/material';
import {forwardRef, ReactElement} from 'react';
import {renderSelect} from '@/shared/services/templateService/renderSelect.service';
import {LabelOptionsI} from '@/shared/types/options';

export type SelectStyleVariants = 'withLabelInside';

type Props = Omit<SelectProps, 'error'> & {
  helperText?: string;
  options: LabelOptionsI[];
  error?: string;
  styleVariant?: SelectStyleVariants;
};

export const Select = forwardRef<HTMLSelectElement, Props>(
  ({label, helperText, options, error, styleVariant, ...otherProps}, ref): ReactElement => {
    const renderOptions = options.map(({label, value}) => (
      <MenuItem key={value} value={value}>
        {label}
      </MenuItem>
    ));

    return (
      <FormControl fullWidth>
        {renderSelect({styleVariant, options: renderOptions, label, ref, ...otherProps})}
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
