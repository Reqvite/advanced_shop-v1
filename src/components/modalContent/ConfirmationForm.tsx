import {Stack, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {Flex} from '../../shared/ui/base/Flex';
import {Button} from '../../shared/ui/button/Button';
type Props = {
  onConfirm: () => void;
  onCancel: () => void;
  message?: string;
};

export const ConfirmationForm = ({onCancel, onConfirm, message}: Props): ReactElement => {
  return (
    <Stack gap={3}>
      <Typography component="h5" variant="h5" textAlign="left">
        {message}
      </Typography>
      <Flex justifyContent="space-between" gap={1}>
        <Button size="large" onClick={onCancel}>
          Cancel
        </Button>
        <Button size="large" onClick={onConfirm} variant="contained">
          Confirm
        </Button>
      </Flex>
    </Stack>
  );
};
