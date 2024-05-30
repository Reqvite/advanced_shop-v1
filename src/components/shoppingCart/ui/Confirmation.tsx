import {Box} from '@mui/material';
import {ReactElement} from 'react';
import {checkoutStyles} from '@/app/theme/styles';
import {Button, Title} from '@/shared/ui';

export const Confirmation = (): ReactElement => {
  return (
    <Box mt="64px">
      <Title
        title="Confirmation"
        description="We are getting to the end. Just few clicks and your order is ready!"
      />
      <Button type="submit" sx={checkoutStyles.completeOrderButton} variant="contained">
        Complete order
      </Button>
    </Box>
  );
};
