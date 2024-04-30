import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Typography
} from '@mui/material';
import {AnimatePresence, motion} from 'framer-motion';
import {forwardRef, ReactElement, useState} from 'react';
import {Control, FieldError, useController, useWatch} from 'react-hook-form';
import {Button} from '../button/Button';
import {Checkbox} from './Checkbox';

interface Props {
  label?: string;
  options: {label: string; value: number}[];
  name: string;
  row?: boolean;
  helperText?: string;
  isDisabled?: boolean;
  control: Control<any>;
  max?: number;
}

const MotionFormControlLabel = motion(FormControlLabel);
const animation = {
  initial: {opacity: 0, y: -20},
  animate: {opacity: 1, y: 0},
  exit: {opacity: 0, y: -20},
  transition: {duration: 0.1}
};

export const CheckboxGroup = forwardRef<HTMLInputElement, Props>(
  ({label, options, name, row, isDisabled, max = 5, control}, ref): ReactElement => {
    const {
      field: {value, onChange, ...inputProps},
      formState: {errors}
    } = useController({
      name,
      defaultValue: [],
      control
    });
    const [showMore, setShowMore] = useState<boolean>(false);
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

    const renderOptions = showMore ? options : options.slice(0, max);

    return (
      <>
        <FormControl>
          {label && <FormLabel>{label}</FormLabel>}
          <FormGroup row={row}>
            <AnimatePresence>
              {renderOptions.map((option) => (
                <MotionFormControlLabel
                  key={option.value}
                  {...animation}
                  control={
                    <Checkbox
                      checked={value?.includes(Number(option.value))}
                      inputRef={ref}
                      onChange={() => handleChange(Number(option.value))}
                      disabled={isDisabled}
                      {...inputProps}
                    />
                  }
                  label={<Typography variant="body2">{option.label}</Typography>}
                />
              ))}
            </AnimatePresence>
          </FormGroup>
          {options.length > 5 && (
            <Button variant="text" color="primary" onClick={() => setShowMore(!showMore)}>
              {showMore ? 'Show Less' : 'Show More'}
            </Button>
          )}
        </FormControl>
        <FormHelperText>{errors[name] && (errors[name] as FieldError).message}</FormHelperText>
      </>
    );
  }
);
