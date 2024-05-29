import {Box} from '@mui/material';
import {motion} from 'framer-motion';
import {PropsWithChildren, ReactElement, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {scrollToTop} from '@/shared/lib/helpers';
import {Loader} from '../loader/Loader';

const MotionBox = motion(Box);
const variants = {
  hidden: {opacity: 0, y: 10},
  visible: {opacity: 1, y: 0, transition: {duration: 0.5}}
};

type Props = PropsWithChildren & {
  isLoading?: boolean;
};

export const PageWrapper = ({children, isLoading}: Props): ReactElement => {
  const location = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [location]);

  if (isLoading) {
    return <Loader fullHeight />;
  }

  return (
    <MotionBox initial="hidden" animate="visible" exit="exit" variants={variants}>
      {children}
    </MotionBox>
  );
};
