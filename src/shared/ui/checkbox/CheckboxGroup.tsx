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
import {LabelOptionsI} from '@/shared/types/options';
import {Flex} from '../base/Flex';
import {Button} from '../button/Button';
import {Chip} from '../chip/Chip';
import {Checkbox} from './Checkbox';

interface Props {
  label?: string;
  options: LabelOptionsI[];
  name: string;
  row?: boolean;
  helperText?: string;
  isDisabled?: boolean;
  control: Control<any>;
  max?: number;
  showCheckbox?: boolean;
}

const MotionFormControlLabel = motion(FormControlLabel);
const animation = {
  initial: {opacity: 0, y: -20},
  animate: {opacity: 1, y: 0},
  exit: {opacity: 0, y: -20},
  transition: {duration: 0.1}
};

export const CheckboxGroup = forwardRef<HTMLInputElement, Props>(
  (
    {label, options, name, row, isDisabled, max = 5, showCheckbox = true, control},
    ref
  ): ReactElement => {
    const {
      field: {value, onChange, ...inputProps},
      formState: {errors}
    } = useController({
      name,
      defaultValue: [],
      control
    });
    const [showMore, setShowMore] = useState<boolean>(false);
    const checkboxIds = useWatch({control, name}) || [];
    const styles = {
      formGroup: {
        gap: showCheckbox ? 0 : 1
      },
      checkbox: {
        display: showCheckbox ? 'flex' : 'none'
      }
    };

    const handleChange = (value: number): void => {
      const newArray = [...checkboxIds];
      if (newArray.includes(value)) {
        const index = newArray.findIndex((index) => index === value);
        newArray.splice(index, 1);
      } else {
        newArray.push(value);
      }

      onChange(newArray.map(Number));
    };

    const renderOptions = showMore ? options : options.slice(0, max);

    return (
      <>
        <FormControl>
          {label && <FormLabel>{label}</FormLabel>}
          <FormGroup row={row} sx={styles.formGroup}>
            <AnimatePresence>
              {renderOptions.map((option) => (
                <Flex justifyContent="space-between" alignItems="center" key={option.value}>
                  <MotionFormControlLabel
                    sx={{ml: 0}}
                    {...animation}
                    key={option.value}
                    control={
                      <Checkbox
                        checked={value?.includes(Number(option.value))}
                        inputRef={ref}
                        onChange={() => handleChange(Number(option.value))}
                        disabled={isDisabled}
                        sx={styles.checkbox}
                        {...inputProps}
                      />
                    }
                    label={
                      <Typography
                        variant="body2"
                        color={
                          !showCheckbox && value?.includes(Number(option.value))
                            ? 'primary.main'
                            : 'text.primary'
                        }
                      >
                        {option.label}
                      </Typography>
                    }
                  />
                  {option.quantity !== undefined && <Chip label={option.quantity} />}
                </Flex>
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
