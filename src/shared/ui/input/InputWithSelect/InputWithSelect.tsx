import SearchIcon from '@mui/icons-material/Search';
import {forwardRef, ReactElement} from 'react';
import {Control, Controller, useController, useWatch} from 'react-hook-form';
import {LabelOptionsI} from '@/shared/types/options';
import {CustomBox, CustomInputAdornment, CustomInputStyles, CustomSelectStyles} from './styles';

type Props = {
  control: Control;
  name: string;
  inputName: string;
  selectName: string;
  options: LabelOptionsI[];
};

export const InputWithSelect = forwardRef(
  ({control, name, inputName, selectName, options}: Props, ref): ReactElement => {
    useController({
      name: `${name}.${selectName}`,
      control,
      defaultValue: options[0].value
    });
    useController({
      name: `${name}.${inputName}`,
      control,
      defaultValue: ''
    });
    useWatch({control, name});

    return (
      <CustomBox ref={ref}>
        <Controller
          name={`${name}.${selectName}`}
          control={control}
          render={({field}) => (
            <CustomSelectStyles options={options} fullWidth variant="outlined" {...field} />
          )}
        />
        <Controller
          name={`${name}.${inputName}`}
          control={control}
          render={({field}) => (
            <CustomInputStyles
              placeholder="Search products..."
              {...field}
              endAdornment={
                <CustomInputAdornment sx={{transform: 'scaleX(-1)'}} position="end">
                  <SearchIcon />
                </CustomInputAdornment>
              }
            />
          )}
        />
      </CustomBox>
    );
  }
);
