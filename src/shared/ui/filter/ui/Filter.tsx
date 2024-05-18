import {FormControl, Stack} from '@mui/material';
import {ReactElement, useCallback, useEffect} from 'react';
import {DefaultValues, FieldValues, useForm} from 'react-hook-form';
import {useDebouncedCallback, useFilter, useMediaQuery} from '@/shared/lib/hooks';
import {renderFormBlock} from '@/shared/services/templateService/renderFormBlock.service';
import {FilterKeys} from '@/shared/types/filter';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {Button, Drawer, FilterButton} from '@/shared/ui';

interface Props<T> {
  options: FormOption<FormVariantsEnum>[];
  defaultValues: T;
  resetValues?: T;
  onChange?: () => void;
  withDrawer?: boolean;
  resetPage?: boolean;
  resetOtherFilterKeys?: boolean;
  withResetButton?: boolean;
}

export const Filter = <T extends FieldValues>({
  withDrawer = true,
  defaultValues,
  options,
  resetPage,
  withResetButton,
  resetValues,
  resetOtherFilterKeys
}: Props<T>): ReactElement => {
  const isMobile = useMediaQuery('md');
  const {control, handleSubmit, watch, reset, getValues} = useForm<T>({
    defaultValues: {...defaultValues} as DefaultValues<T>
  });
  const {onUpdateFilter, onResetFilter, resetAll} = useFilter();

  const onSubmit = useDebouncedCallback(
    useCallback(
      (data: FilterKeys) => {
        onUpdateFilter({data, resetPage, resetOtherFilterKeys});
      },
      [onUpdateFilter, resetOtherFilterKeys, resetPage]
    ),
    500
  );

  const resetFilter = useCallback((): void => {
    onResetFilter(getValues());
    reset(resetValues);
  }, [getValues, onResetFilter, reset, resetValues]);

  useEffect(() => {
    if (resetAll && !resetOtherFilterKeys) {
      resetFilter();
    }
  }, [reset, resetAll, resetFilter, resetOtherFilterKeys, resetValues]);

  useEffect(() => {
    const subscription = watch((_, action) => {
      if (!action.type) return;
      return handleSubmit(onSubmit)();
    });
    return () => subscription.unsubscribe();
  }, [handleSubmit, onSubmit, watch]);

  const filter = (
    <FormControl component="form">
      <Stack gap={3}>{options?.map((option) => renderFormBlock<T>({option, control}))}</Stack>
      {withResetButton && (
        <Button sx={{mt: 2}} onClick={resetFilter}>
          Reset
        </Button>
      )}
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
