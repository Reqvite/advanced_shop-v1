import {FormControl, Stack} from '@mui/material';
import {ActionCreatorWithPayload} from '@reduxjs/toolkit';
import {ReactElement, useCallback, useEffect} from 'react';
import {DefaultValues, FieldValues, useForm} from 'react-hook-form';
import {useDebouncedCallback, useFilter, useMediaQuery} from '@/shared/lib/hooks';
import {renderFormBlock} from '@/shared/services/templateService/renderFormBlock.service';
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
  values?: T;
  filterAction?: ActionCreatorWithPayload<unknown>;
}

export const Filter = <T extends FieldValues>({
  withDrawer = true,
  defaultValues,
  options,
  resetPage,
  withResetButton,
  resetValues,
  values,
  filterAction
}: Props<T>): ReactElement => {
  const isMobile = useMediaQuery('md');
  const {onUpdateFilter, onResetFilter} = useFilter({filterAction});
  const {control, handleSubmit, watch, reset} = useForm<T>({
    defaultValues: {...defaultValues} as DefaultValues<T>,
    values
  });

  const onSubmit = useDebouncedCallback(
    useCallback(
      (data: T) => {
        onUpdateFilter(data, {resetPage});
      },
      [onUpdateFilter, resetPage]
    ),
    500
  );

  const resetFilter = useCallback((): void => {
    reset(resetValues);
    onResetFilter();
  }, [onResetFilter, reset, resetValues]);

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
