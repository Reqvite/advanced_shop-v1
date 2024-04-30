import {Rating as MuiRating, RatingProps} from '@mui/material';
import {ReactElement} from 'react';

type Props = RatingProps;

export const Rating = ({value = 5, readOnly = true, ...otherProps}: Props): ReactElement => {
  return <MuiRating name="simple-controlled" value={value} readOnly={readOnly} {...otherProps} />;
};
