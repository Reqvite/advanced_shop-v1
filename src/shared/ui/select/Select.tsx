import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select as MuiSelect,
  SelectProps,
  Typography
} from '@mui/material';
import {forwardRef, ReactElement} from 'react';
import {LabelOptionsI} from '@/shared/types/options';
import {CustomBox, CustomSelectFormLabel, CustomSelectStyle} from './CustomSelect';

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

    let select = (
      <>
        {label && <FormLabel>{label}</FormLabel>}
        <MuiSelect label={label} inputRef={ref} {...otherProps}>
          {renderOptions}
        </MuiSelect>
      </>
    );

    if (styleVariant === 'withLabelInside') {
      select = (
        <CustomBox>
          <CustomSelectFormLabel>{label}</CustomSelectFormLabel>
          <MuiSelect label={label} inputRef={ref} input={<CustomSelectStyle />} {...otherProps}>
            {renderOptions}
          </MuiSelect>
        </CustomBox>
      );
    }

    return (
      <FormControl fullWidth>
        {select}
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
