import {List as MuiList, ListItem, ListProps} from '@mui/material';
import {ReactElement, ReactNode} from 'react';

type Props<T> = ListProps & {
  items: T[];
  renderItem: (item: T) => ReactNode;
  row?: boolean;
  skeleton?: ReactElement;
  isLoading?: boolean;
  skeletonLength?: number;
};

export const List = <T extends {_id: string}>({
  items,
  renderItem,
  row,
  isLoading,
  skeleton,
  skeletonLength = 5,
  ...otherProps
}: Props<T>) => {
  const skeletons = Array.from({length: skeletonLength}).map((_, index) => (
    <ListItem sx={{justifyContent: 'flex-end'}} key={index}>
      {skeleton}
    </ListItem>
  ));

  return (
    <MuiList sx={{display: 'flex', flexDirection: row ? 'row' : 'column'}} {...otherProps}>
      {!isLoading &&
        items.map((item) => (
          <ListItem sx={{justifyContent: 'flex-end'}} key={item._id}>
            {renderItem(item)}
          </ListItem>
        ))}
      {isLoading && skeleton && <>{skeletons}</>}
    </MuiList>
  );
};
