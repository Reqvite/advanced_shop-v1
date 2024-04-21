import {ListItem, ListItemProps} from '@mui/material';
import {ReactElement, ReactNode} from 'react';

type RenderListItemsProps<T> = ListItemProps & {
  items?: T[];
  renderItem?: (item: T) => ReactNode;
} & ({skeleton: ReactElement; length: number} | {skeleton?: never; length?: never});

class TemplateService {
  constructor() {}

  public renderListItem<T extends {_id: string}>({
    items,
    renderItem,
    length = 5,
    skeleton,
    ...otherProps
  }: RenderListItemsProps<T>): ReactNode {
    const array = items ? items : Array.from({length}, (_, index) => ({_id: String(index)}));

    return array.map((item, index) => {
      const renderComponent = item && renderItem ? renderItem(item as any) : skeleton;
      const id = item._id || `${index}-${new Date().getTime()}`;

      return (
        <ListItem sx={{justifyContent: 'center'}} key={id} {...otherProps}>
          {renderComponent}
        </ListItem>
      );
    });
  }
}

export const templateService = new TemplateService();
