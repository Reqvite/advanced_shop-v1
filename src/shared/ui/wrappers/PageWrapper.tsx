import {Box} from '@mui/material';
import {motion} from 'framer-motion';
import {PropsWithChildren, ReactElement, useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {Loader} from '../loader/Loader';

const MotionBox = motion(Box);
const variants = {
  hidden: {opacity: 0, y: 10},
  visible: {opacity: 1, y: 0, transition: {duration: 0.5}}
};

type Props = PropsWithChildren & {
  isLoading?: boolean;
  scrollOnce?: boolean;
};

export const PageWrapper = ({children, isLoading, scrollOnce}: Props): ReactElement => {
  const {pathname} = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isScrolled) {
      window.scrollTo(0, 0);
    }
    if (scrollOnce) {
      setIsScrolled(true);
    }
  }, [pathname, scrollOnce, isScrolled]);

  if (isLoading) {
    return <Loader fullHeight />;
  }

  return (
    <MotionBox initial="hidden" animate="visible" exit="exit" variants={variants}>
      {children}
    </MotionBox>
  );
};
