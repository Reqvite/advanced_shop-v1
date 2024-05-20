import {Box, BoxProps} from '@mui/material';
import {ReactElement} from 'react';
import {FieldValues} from 'react-hook-form';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {Filter} from './Filter';

export type SortFieldValues = FieldValues & {
  sort: number;
};

type Props<T extends SortFieldValues> = BoxProps & {
  options: FormOption<FormVariantsEnum>[];
  defaultValues: T;
  title?: string;
};

export const Sort = <T extends SortFieldValues>({
  options,
  defaultValues,
  ...otherProps
}: Props<T>): ReactElement => {
  return (
    <Box pb="40px" {...otherProps}>
      <Filter
        withDrawer={false}
        options={options}
        defaultValues={defaultValues}
        resetValues={{sort: 0}}
      />
    </Box>
  );
};
