import {FormControl, Stack} from '@mui/material';
import {ReactElement, useCallback, useEffect} from 'react';
import {DefaultValues, FieldValues, useForm} from 'react-hook-form';
import {useDebouncedCallback, useFilter, useMediaQuery} from '@/shared/lib/hooks';
import {renderFormBlock} from '@/shared/services/templateService/renderFormBlock.service';
import {FilterKeys} from '@/shared/types/filter';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {Drawer, FilterButton} from '@/shared/ui';

interface Props<T> {
  options: FormOption<FormVariantsEnum>[];
  defaultValues: T;
  onChange?: () => void;
  withDrawer?: boolean;
  resetPage?: boolean;
}

export const Filter = <T extends FieldValues>({
  withDrawer = true,
  defaultValues,
  options,
  resetPage
}: Props<T>): ReactElement => {
  const isMobile = useMediaQuery('md');
  const {control, handleSubmit, watch} = useForm<T>({
    defaultValues: defaultValues as DefaultValues<T>
  });
  const {onUpdateFilter} = useFilter();

  const onSubmit = useDebouncedCallback(
    useCallback(
      (data: FilterKeys) => {
        onUpdateFilter({data, resetPage});
      },
      [onUpdateFilter, resetPage]
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
