import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {ButtonProps, LinkProps} from '@mui/material';
import {ReactElement} from 'react';
import {Link} from 'react-router-dom';
import {getRouteProductDetails} from '@/app/providers/AppRouter/routeConfig';
import {Button} from '../../button/Button';

type Props = LinkProps &
  ButtonProps & {
    id: string;
  };

export const ProductDetailsButton = ({id, ...otherProps}: Props): ReactElement => {
  return (
    <Button
      variant="contained"
      component={Link}
      to={getRouteProductDetails(id)}
      RightAddon={NavigateNextIcon}
      sx={{minWidth: 150}}
      {...otherProps}
    >
      Product detail
    </Button>
  );
};
