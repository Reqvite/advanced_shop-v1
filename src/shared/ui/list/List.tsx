import {List as MuiList, ListProps} from '@mui/material';
import {ReactElement, ReactNode} from 'react';
import {templateService} from '@/shared/services';

type Props<T> = ListProps & {
  items: T[];
  renderItem: (item: T) => ReactNode;
  row?: boolean;
  isLoading?: boolean;
} & ({skeleton: ReactElement; skeletonLength: number} | {skeleton?: never; skeletonLength?: never});

export const List = <T extends {_id: string}>({
  items,
  renderItem,
  row,
  isLoading,
  skeleton,
  skeletonLength = 5,
  ...otherProps
}: Props<T>): ReactElement => {
  return (
    <MuiList sx={{display: 'flex', flexDirection: row ? 'row' : 'column'}} {...otherProps}>
      {!isLoading && templateService.renderListItem<T>({items, renderItem})}
      {isLoading &&
        skeleton &&
        templateService.renderListItem<T>({skeleton, length: skeletonLength})}
    </MuiList>
  );
};
