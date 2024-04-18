import {Rating as MuiRating, RatingProps} from '@mui/material';

type Props = RatingProps;

export const Rating = ({value = 5, ...otherProps}: Props) => {
  return <MuiRating name="simple-controlled" value={value} {...otherProps} />;
};
