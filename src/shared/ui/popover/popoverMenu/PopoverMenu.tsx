import {Menu, MenuItem, MenuProps} from '@mui/material';
import {ReactElement, ReactNode} from 'react';

type Props<T> = MenuProps & {
  items: T[];
  renderItem: (item: T) => ReactNode;
};

export const PopoverMenu = <T extends {_id: string}>({
  items,
  renderItem,
  ...otherProps
}: Props<T>): ReactElement => {
  return (
    <Menu {...otherProps}>
      {items.map((item) => (
        <MenuItem key={item._id}>{renderItem(item)}</MenuItem>
      ))}
    </Menu>
  );
};
