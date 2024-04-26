import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel
} from '@mui/material';
import {forwardRef, ReactElement} from 'react';
import {Control, FieldError, useController, useWatch} from 'react-hook-form';

interface Props {
  label?: string;
  options: {label: string; value: number}[];
  name: string;
  row?: boolean;
  helperText?: string;
  className?: string;
  isDisabled?: boolean;
  control: Control<any>;
}

export const CheckboxGroup = forwardRef<HTMLInputElement, Props>(
  ({label, options, name, row, isDisabled, className, control}, ref): ReactElement => {
    const {
      field: {value, onChange, ...inputProps},
      formState: {errors}
    } = useController({
      name,
      defaultValue: [],
      control
    });
    const checkboxIds = useWatch({control, name: name}) || [];

    const handleChange = (value: number): void => {
      const newArray = [...checkboxIds];
      const item = value;
      if (newArray.includes(item)) {
        const index = newArray.findIndex((index) => Number(index) === item);
        newArray.splice(index, 1);
      } else {
        newArray.push(item);
      }

      onChange(newArray.map((el) => Number(el)));
    };

    return (
      <>
        <FormControl className={className}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormGroup row={row}>
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                control={
                  <Checkbox
                    checked={value?.includes(Number(option.value))}
                    inputRef={ref}
                    onChange={() => handleChange(Number(option.value))}
                    disabled={isDisabled}
                    {...inputProps}
                  />
                }
                label={<p className="body2">{option.label}</p>}
              />
            ))}
          </FormGroup>
        </FormControl>
        <FormHelperText>{errors[name] && (errors[name] as FieldError).message}</FormHelperText>
      </>
    );
  }
);
