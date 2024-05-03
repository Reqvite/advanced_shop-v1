import {Box, BoxProps} from '@mui/material';
import {ReactElement} from 'react';
import {FieldValues} from 'react-hook-form';
import {useMediaQuery} from '@/shared/lib/hooks';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {Filter} from './Filter';

type Props<T> = BoxProps & {
  options: FormOption<FormVariantsEnum>[];
  defaultValues: T;
  title?: string;
};

export const Sort = <T extends FieldValues>({
  options,
  defaultValues,
  ...otherProps
}: Props<T>): ReactElement | null => {
  const isMobile = useMediaQuery('md');

  if (isMobile) return null;

  return (
    <Box pb="40px" {...otherProps}>
      <Filter withDrawer={false} options={options} defaultValues={defaultValues} />
    </Box>
  );
};
