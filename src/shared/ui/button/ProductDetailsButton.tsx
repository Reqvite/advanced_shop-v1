import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {Link} from 'react-router-dom';
import {getRouteProductDetails} from '@/app/providers/AppRouter/routeConfig';
import {Button} from './Button';

type Props = {
  id: string;
};

export const ProductDetailsButton = ({id}: Props) => {
  return (
    <Button
      variant="contained"
      component={Link}
      to={getRouteProductDetails(id)}
      RightAddon={NavigateNextIcon}
    >
      Product detail
    </Button>
  );
};
