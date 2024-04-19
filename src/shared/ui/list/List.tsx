import {List as MuiList, ListItem, ListProps} from '@mui/material';
import {ReactNode} from 'react';

type Props<T> = ListProps & {
  items: T[];
  renderItem: (item: T) => ReactNode;
  row?: boolean;
};

export const List = <T extends {_id: string}>({
  items,
  renderItem,
  row,
  ...otherProps
}: Props<T>) => {
  return (
    <MuiList sx={{display: 'flex', flexDirection: row ? 'row' : 'column'}} {...otherProps}>
      {items.map((item) => (
        <ListItem sx={{justifyContent: 'flex-end'}} key={item._id}>
          {renderItem(item)}
        </ListItem>
      ))}
    </MuiList>
  );
};
