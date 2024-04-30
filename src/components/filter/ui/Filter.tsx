import {FormControl, Stack} from '@mui/material';
import {ReactElement, useState} from 'react';
import {DefaultValues, FieldValues, useForm, useWatch} from 'react-hook-form';
import {useSearchParams} from 'react-router-dom';
import {encodeSearchParams} from '@/shared/lib/helpers/searchParams';
import {useAppDispatch, useDebounceEffect, useMediaQuery} from '@/shared/lib/hooks';
import {renderFormBlock} from '@/shared/services/templateService/renderFormBlock.service';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {Drawer, FilterButton} from '@/shared/ui';
import {actions as filterActions} from '@/slices/filter';

interface Props<T> {
  options: FormOption<FormVariantsEnum>[];
  defaultValues: T;
  onChange?: () => void;
}

export const Filter = <T extends FieldValues>({defaultValues, options}: Props<T>): ReactElement => {
  const dispatch = useAppDispatch();
  const isMobile = useMediaQuery('md');
  const [isFirstRender, setIsFirstRender] = useState(false);
  const {control} = useForm<T>({defaultValues: defaultValues as DefaultValues<T>});
  const [, setSearchParams] = useSearchParams();
  const data = useWatch({control});

  useDebounceEffect(
    () => {
      if (isFirstRender) {
        setSearchParams(encodeSearchParams(data));
        dispatch(filterActions.setFilter(data));
      }
      setIsFirstRender(true);
    },
    [data],
    500
  );

  const filter = (
    <FormControl component="form">
      <Stack gap={3}>{options.map((option) => renderFormBlock<T>({option, control}))}</Stack>
    </FormControl>
  );

  return isMobile ? (
    <Drawer title="Filters" buttonComponent={FilterButton}>
      {filter}
    </Drawer>
  ) : (
    filter
  );
};
