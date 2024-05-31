import {CardMedia} from '@mui/material';
import {ReactElement} from 'react';
import {ProductI} from '@/shared/types/product';

type OrderImgVariant = 'small' | 'large';

type Props = ProductI & {
  variant?: OrderImgVariant;
};

export const OrderImg = ({variant, images}: Props): ReactElement => {
  if (variant === 'small') {
    return <CardMedia height="50" width="50" src={images[0].src} component="img" />;
  }

  return <div></div>;
};
