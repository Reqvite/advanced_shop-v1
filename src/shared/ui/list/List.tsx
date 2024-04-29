import {List as MuiList, ListProps, SxProps} from '@mui/material';
import {ComponentType, ReactElement} from 'react';
import {renderListItem} from '@/shared/services';

type Props<T> = ListProps & {
  items: T[];
  renderItem: ComponentType<T>;
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
    <MuiList
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

// interface ListProps<T> {
//   items: T[];
//   isLoading: boolean;
//   renderItem: React.ComponentType<T>;
//   skeleton: () => React.ReactNode;
// }

// // Create a reusable list component
// export function TestList<T>({items, isLoading, renderItem: ItemComponent, skeleton}: ListProps<T>) {
//   // Render skeleton if loading
//   if (isLoading) {
//     return (
//       <div>
//         {[...Array(5)].map((_, index) => (
//           <div key={index} className="skeleton-item">
//             skeleton
//           </div>
//         ))}
//       </div>
//     );
//   }

//   // Render actual data if not loading
//   return (
//     <div>
//       {items.map((item) => (
//         <div key={item._id} className="list-item">
//           <ItemComponent {...item} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export const TestList = <T extends {_id: string}>({
//   items,
//   renderItem,
//   row,
//   isLoading,
//   skeleton,
//   skeletonLength = 5,
//   itemStyle,
//   ...otherProps
// }: Props<T>): ReactElement => {
//   console.log(isLoading);
//   if (isLoading) {
//     return (
//       <MuiList
//         sx={{display: 'flex', flexWrap: 'wrap', flexDirection: row ? 'row' : 'column'}}
//         {...otherProps}
//       >
//         <ListItem sx={{justifyContent: 'flex-end'}} key={'21'} {...otherProps}>
//           {skeleton}
//         </ListItem>
//       </MuiList>
//     );
//   }

//   return (
//     <MuiList
//       sx={{display: 'flex', flexWrap: 'wrap', flexDirection: row ? 'row' : 'column'}}
//       {...otherProps}
//     >
//       {items.map((item) => (
//         <ListItem sx={{justifyContent: 'flex-end'}} key={item._id}>
//           <ProductCard {...item} />
//         </ListItem>
//       ))}
//     </MuiList>
//   );
// };
