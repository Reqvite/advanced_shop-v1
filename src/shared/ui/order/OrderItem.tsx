import {CardMedia, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {getRouteProductDetails} from '@/app/providers/AppRouter/routeConfig';
import {CartProductI} from '@/shared/types/product';
import {Flex} from '../base/Flex';
import {AppLink} from '../link/AppLink';
import {TruncatedTypography} from '../typography/TruncatedTypography';

type OrderImgVariant = 'small';

type Props = CartProductI & {
  variant?: OrderImgVariant;
};

export const OrderItem = ({variant, images, title, orderedQuantity, _id}: Props): ReactElement => {
  if (variant === 'small') {
    return <CardMedia height="50" width="50" src={images[0].src} component="img" />;
  }

  return (
    <AppLink to={getRouteProductDetails(_id)} withUnderline={false}>
      <Flex gap={1} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <CardMedia sx={{height: '100px', width: '100px'}} src={images[0]?.src} component="img" />
          <TruncatedTypography lineclamp={3} maxWidth="300px">
            {title}
          </TruncatedTypography>
        </Flex>
        <Typography fontSize={18} fontWeight={600} color="primary.dark">
          {orderedQuantity}
        </Typography>
      </Flex>
    </AppLink>
  );
};
