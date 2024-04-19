import {List, ListItem, ListProps, Typography} from '@mui/material';
import {LabelOptionsI} from '@/shared/types/options';

type Props = ListProps & {
  characteristics: LabelOptionsI[];
  maxListItems?: number;
};

export const CharacteristicList = ({characteristics, maxListItems = 10, ...otherProps}: Props) => {
  return (
    <List sx={{display: 'flex', flexDirection: 'column', gap: 1}} {...otherProps}>
      {characteristics.slice(0, maxListItems).map(({label, value}) => (
        <ListItem key={`${label}-${value}`} sx={{display: 'flex', gap: 2, p: 0}}>
          <Typography
            fontWeight={600}
            variant="body2"
            color="grey.200"
            sx={{minWidth: '50%'}}
            noWrap
          >
            {label}:
          </Typography>
          <Typography variant="body2" sx={{width: '50%', textAlign: 'left'}} noWrap>
            {value}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
};
