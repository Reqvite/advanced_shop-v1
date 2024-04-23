import {Rating as MuiRating, RatingProps} from '@mui/material';
import {ReactElement} from 'react';

type Props = RatingProps;

export const Rating = ({value = 5, ...otherProps}: Props): ReactElement => {
  return <MuiRating name="simple-controlled" value={value} {...otherProps} />;
};
