import {List, ListItem, ListProps, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {LabelOptionsI} from '@/shared/types/options';

type Props = ListProps & {
  characteristics: LabelOptionsI[];
  maxListItems?: number;
  noWrap?: boolean;
  descriptionMaxWidth?: number;
};

export const CharacteristicList = ({
  characteristics,
  maxListItems = 10,
  noWrap,
  descriptionMaxWidth,
  ...otherProps
}: Props): ReactElement => {
  return (
    <List sx={{display: 'flex', flexDirection: 'column', gap: 1}} {...otherProps}>
      {characteristics?.slice(0, maxListItems)?.map(({label, value}) => (
        <ListItem key={`${label}-${value}`} sx={{display: 'flex', gap: 2, p: 0}}>
          <Typography fontWeight={600} variant="body2" color="grey.200" noWrap={noWrap}>
            {label}:
          </Typography>
          <Typography
            variant="body2"
            sx={{textAlign: 'left'}}
            noWrap={noWrap}
            maxWidth={descriptionMaxWidth}
          >
            {value}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
};
