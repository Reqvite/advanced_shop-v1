import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Typography
} from '@mui/material';
import {AnimatePresence, motion} from 'framer-motion';
import {forwardRef, Fragment, ReactElement, useState} from 'react';
import {Control, FieldError, useController, useWatch} from 'react-hook-form';
import {checkboxGroupStyles} from '@/app/theme/styles';
import {LabelOptionsI} from '@/shared/types/options';
import {Flex} from '../base/Flex';
import {Button} from '../button/Button';
import {Chip} from '../chip/Chip';

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
  withQuantity?: boolean;
  withShowMore?: boolean;
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
    {
      label,
      options,
      name,
      row,
      isDisabled,
      max = 5,
      showCheckbox = true,
      withShowMore = true,
      withQuantity,
      control
    },
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
    const styles = checkboxGroupStyles(showCheckbox);

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

    const checkbox = (option: LabelOptionsI) => {
      const renderWithQuantity = withQuantity && option.quantity;
      const renderWithoutQuantity = !withQuantity;

      const label = (
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
      );

      return (
        <Fragment key={option.value}>
          {renderWithQuantity && (
            <Flex justifyContent="space-between" alignItems="center" key={option.value}>
              {label}
              <Chip label={option.quantity} />
            </Flex>
          )}
          {renderWithoutQuantity && (
            <Flex justifyContent="space-between" alignItems="center" key={option.value}>
              {label}
            </Flex>
          )}
        </Fragment>
      );
    };

    return (
      <>
        <FormControl>
          {label && <FormLabel>{label}</FormLabel>}
          <FormGroup row={row} sx={styles.formGroup}>
            <AnimatePresence>{renderOptions.map(checkbox)}</AnimatePresence>
          </FormGroup>
          {withShowMore && options.length > 5 && (
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
