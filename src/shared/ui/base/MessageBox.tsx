import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import {Box, Typography} from '@mui/material';
import {ReactElement, ReactNode, useEffect} from 'react';
import {messageBoxStyles} from '@/app/theme/styles';
import {runConfetti} from '@/shared/lib/helpers';
import {Flex, StartShoppingButton} from '@/shared/ui';

type variants = 'success' | 'failure';

type Props = {
  title?: string;
  message?: string;
  buttonComponent?: ReactNode;
  variant?: variants;
  confettiFunction?: () => void;
};

export const MessageBox = ({
  title = 'Success',
  message = "We received your purchase request, we'll be in touch shortly!",
  buttonComponent = <StartShoppingButton />,
  variant = 'success',
  confettiFunction = runConfetti
}: Props): ReactElement => {
  const isSuccess = variant === 'success';

  useEffect(() => {
    if (confettiFunction) {
      confettiFunction();
    }
  }, [confettiFunction]);

  return (
    <Box sx={messageBoxStyles.box()}>
      <Box sx={messageBoxStyles.iconBox(isSuccess)}>
        {isSuccess ? (
          <CheckIcon sx={messageBoxStyles.icon} />
        ) : (
          <CloseIcon sx={messageBoxStyles.icon} />
        )}
      </Box>
      {title && (
        <Typography variant="h2" textAlign="center" color="primary.dark">
          {title}
        </Typography>
      )}
      {message && (
        <Typography mt={2} textAlign="center" fontWeight="bold">
          {message}
        </Typography>
      )}
      {buttonComponent && (
        <Flex justifyContent="center" mt={2}>
          {buttonComponent}
        </Flex>
      )}
    </Box>
  );
};
