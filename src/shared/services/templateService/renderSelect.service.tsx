import {FormLabel, Select as MuiSelect} from '@mui/material';
import {ReactElement, ReactNode, RefObject} from 'react';
import {SelectVariantsEnum} from '@/shared/types/select';
import {SelectStyleVariants} from '@/shared/ui';
import {CustomBox, CustomSelectFormLabel, CustomSelectStyle} from '@/shared/ui/select/CustomSelect';

type Params = {
  styleVariant?: SelectStyleVariants;
  options?: ReactNode;
  label: ReactNode;
  required?: boolean;
  disabled?: boolean;
  ref: ((instance: unknown) => void) | RefObject<unknown> | null;
};

export const renderSelect = ({
  styleVariant,
  options,
  label,
  ref,
  required,
  disabled,
  ...otherParams
}: Params): ReactElement => {
  switch (styleVariant) {
    case SelectVariantsEnum.Select_With_Label_Inside:
      return (
        <CustomBox>
          <CustomSelectFormLabel>{label}</CustomSelectFormLabel>
          <MuiSelect label={label} inputRef={ref} input={<CustomSelectStyle />} {...otherParams}>
            {options}
          </MuiSelect>
        </CustomBox>
      );
    default:
      return (
        <>
          {label && (
            <FormLabel required={required} sx={{fontSize: 14}}>
              {label}
            </FormLabel>
          )}
          <MuiSelect label={label} inputRef={ref} disabled={disabled} {...otherParams}>
            {options}
          </MuiSelect>
        </>
      );
  }
};
