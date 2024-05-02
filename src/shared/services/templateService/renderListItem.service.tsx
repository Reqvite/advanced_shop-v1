import {ListItem, ListItemProps} from '@mui/material';
import {ReactElement, ReactNode} from 'react';

type RenderListItemsProps<T> = ListItemProps & {
  items?: T[];
  renderItem?: any;
} & ({skeleton: ReactElement; length: number} | {skeleton?: never; length?: never});

export function renderListItem<T extends {_id: string}>({
  items,
  renderItem: Component,
  length = 5,
  skeleton,
  ...otherProps
}: RenderListItemsProps<T>): ReactNode {
  const array = items ? items : Array.from({length}, (_, index) => ({_id: String(index)}));

  return array.map((item, index) => {
    const id = item._id || `${index}-${new Date().getTime()}`;

    return (
      <ListItem sx={{justifyContent: 'flex-end'}} key={id} {...otherProps}>
        {Component ? <Component {...item} /> : skeleton}
      </ListItem>
    );
  });
}
