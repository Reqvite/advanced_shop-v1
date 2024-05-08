import {List as MuiList, ListProps, SxProps} from '@mui/material';
import {ComponentType, ReactElement, RefObject} from 'react';
import {useScrollToTop} from '@/shared/lib/hooks';
import {renderListItem} from '@/shared/services';
import {MessageBox} from '../base/MessageBox';

type Props<T> = ListProps & {
  items: T[];
  renderItem: ComponentType<T>;
  row?: boolean;
  isLoading?: boolean;
  itemStyle?: SxProps;
  shouldScroll?: boolean;
} & ({skeleton: ReactElement; skeletonLength: number} | {skeleton?: never; skeletonLength?: never});

export const List = <T extends {_id: string}>({
  items,
  renderItem,
  row,
  isLoading,
  skeleton,
  skeletonLength = 5,
  itemStyle,
  shouldScroll,
  ...otherProps
}: Props<T>): ReactElement => {
  const ref = useScrollToTop<HTMLUListElement>({
    shouldScroll,
    dependencies: [items]
  }) as RefObject<HTMLUListElement>;

  if (items.length === 0) {
    return <MessageBox title="No products found matching your search." />;
  }

  return (
    <MuiList
      ref={ref}
      sx={{display: 'flex', flexWrap: 'wrap', flexDirection: row ? 'row' : 'column'}}
      {...otherProps}
    >
      {!isLoading && renderListItem<T>({items, renderItem, sx: itemStyle})}
      {isLoading && skeleton && (
        <>{renderListItem<T>({skeleton, length: skeletonLength, sx: itemStyle})}</>
      )}
    </MuiList>
  );
};
