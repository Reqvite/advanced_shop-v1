import {Box, BoxProps, Typography} from '@mui/material';
import {ReactElement} from 'react';

type Props = BoxProps & {
  deliveryDays?: number;
};

export const DeliveryText = ({deliveryDays = 1}: Props): ReactElement => {
  return (
    <Box>
      <Typography fontWeight={600}>Free Shipping</Typography>
      <Typography variant="body2" color="grey.200">
        Delivery in {deliveryDays} day
      </Typography>
    </Box>
  );
};
