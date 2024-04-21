import {List as MuiList, ListProps, SxProps} from '@mui/material';
import {ReactElement, ReactNode} from 'react';
import {templateService} from '@/shared/services';

type Props<T> = ListProps & {
  items: T[];
  renderItem: (item: T) => ReactNode;
  row?: boolean;
  isLoading?: boolean;
  itemStyle?: SxProps;
} & ({skeleton: ReactElement; skeletonLength: number} | {skeleton?: never; skeletonLength?: never});

export const List = <T extends {_id: string}>({
  items,
  renderItem,
  row,
  isLoading,
  skeleton,
  skeletonLength = 5,
  itemStyle,
  ...otherProps
}: Props<T>): ReactElement => {
  return (
    <MuiList sx={{display: 'flex', flexDirection: row ? 'row' : 'column'}} {...otherProps}>
      {!isLoading && templateService.renderListItem<T>({items, renderItem, sx: itemStyle})}
      {isLoading &&
        skeleton &&
        templateService.renderListItem<T>({skeleton, length: skeletonLength})}
    </MuiList>
  );
};
