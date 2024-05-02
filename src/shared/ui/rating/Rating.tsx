import {Rating as MuiRating, RatingProps} from '@mui/material';
import {ReactElement} from 'react';

type Props = RatingProps;

const defaultValue = 0;

export const Rating = ({
  value = defaultValue,
  readOnly = true,
  ...otherProps
}: Props): ReactElement => {
  return <MuiRating name="simple-controlled" value={value} readOnly={readOnly} {...otherProps} />;
};
