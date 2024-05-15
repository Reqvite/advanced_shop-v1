import {List as MuiList, ListProps, SxProps} from '@mui/material';
import {ComponentType, ReactElement} from 'react';
import {renderListItem} from '@/shared/services';
import {NoContentBox} from '../base/NoContentBox';

type Props<T> = ListProps & {
  items: T[];
  renderItem: ComponentType<T>;
  row?: boolean;
  isLoading?: boolean;
  itemStyle?: SxProps;
  scrollOnTop?: boolean;
  emptyListTitle?: string;
} & ({skeleton: ReactElement; skeletonLength: number} | {skeleton?: never; skeletonLength?: never});

export const List = <T extends {_id: string}>({
  items,
  renderItem,
  row,
  isLoading,
  skeleton,
  skeletonLength = 5,
  itemStyle,
  emptyListTitle = 'No products found matching your search.',
  sx,
  ...otherProps
}: Props<T>): ReactElement => {
  if (items.length === 0) {
    return <NoContentBox title={emptyListTitle} />;
  }

  return (
    <MuiList
      sx={{
        display: 'flex',
        justifyContent: row ? 'center' : 'none',
        flexWrap: 'wrap',
        flexDirection: row ? 'row' : 'column',
        ...sx
      }}
      {...otherProps}
    >
      {!isLoading && renderListItem<T>({items, renderItem, sx: itemStyle})}
      {isLoading && skeleton && (
        <>{renderListItem<T>({skeleton, length: skeletonLength, sx: itemStyle})}</>
      )}
    </MuiList>
  );
};
