import {FormControl, Stack} from '@mui/material';
import {ReactElement, useCallback, useEffect} from 'react';
import {DefaultValues, FieldValues, useForm} from 'react-hook-form';
import {useSearchParams} from 'react-router-dom';
import {encodeSearchParams} from '@/shared/lib/helpers';
import {
  useAppDispatch,
  useAppSelector,
  useDebouncedCallback,
  useMediaQuery
} from '@/shared/lib/hooks';
import {renderFormBlock} from '@/shared/services/templateService/renderFormBlock.service';
import {FilterKeys} from '@/shared/types/filter';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {Drawer, FilterButton} from '@/shared/ui';
import {actions as filterActions, selectFilter} from '@/slices/filter';

interface Props<T> {
  options: FormOption<FormVariantsEnum>[];
  defaultValues: T;
  onChange?: () => void;
  withDrawer?: boolean;
}

export const Filter = <T extends FieldValues>({
  withDrawer = true,
  defaultValues,
  options
}: Props<T>): ReactElement => {
  const dispatch = useAppDispatch();
  const isMobile = useMediaQuery('md');
  const {control, handleSubmit, watch} = useForm<T>({
    defaultValues: defaultValues as DefaultValues<T>
  });
  const filterKeys = useAppSelector(selectFilter);
  const [, setSearchParams] = useSearchParams();

  const onSubmit = useDebouncedCallback(
    useCallback(
      (data: FilterKeys) => {
        setSearchParams(encodeSearchParams({...filterKeys, ...data}));
        dispatch(filterActions.setFilter({...filterKeys, ...data}));
      },
      [dispatch, filterKeys, setSearchParams]
    ),
    500
  );

  useEffect(() => {
    const subscription = watch(() => handleSubmit(onSubmit)());
    return () => subscription.unsubscribe();
  }, [handleSubmit, onSubmit, watch]);

  const filter = (
    <FormControl component="form">
      <Stack gap={3}>{options?.map((option) => renderFormBlock<T>({option, control}))}</Stack>
    </FormControl>
  );

  return isMobile && withDrawer ? (
    <Drawer title="Filters" buttonComponent={FilterButton}>
      {filter}
    </Drawer>
  ) : (
    filter
  );
};
