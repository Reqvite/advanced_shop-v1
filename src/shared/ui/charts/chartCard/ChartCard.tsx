import {Stack, StackProps} from '@mui/material';
import {ReactElement} from 'react';
import {chartCardStyles} from '@/app/theme/styles';
import {TabOptionsI} from '@/shared/types/options';
import {Title} from '../../base/Title';
import {Loader} from '../../loader/Loader';
import {Tabs} from '../../tabs/Tabs';

type Props<T> = StackProps & {
  title?: string;
  tabOptions?: TabOptionsI[];
  onChangeTab?: (param: T) => void;
  ChartComponent?: ReactElement;
  tabDefaultValue?: string;
  isLoading?: boolean;
};

export const ChartCard = <T extends string>({
  title = 'Title',
  isLoading,
  ChartComponent,
  tabOptions,
  onChangeTab,
  tabDefaultValue,
  sx,
  ...otherProps
}: Props<T>): ReactElement => {
  return (
    <Stack sx={{...chartCardStyles.cardBox, ...sx}} {...otherProps}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Title title={title} />
          {tabOptions && onChangeTab && (
            <Tabs<T> defaultValue={tabDefaultValue} onChange={onChangeTab} options={tabOptions} />
          )}
          {ChartComponent}
        </>
      )}
    </Stack>
  );
};
