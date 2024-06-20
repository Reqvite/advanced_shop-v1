import {Box} from '@mui/material';
import {motion} from 'framer-motion';
import {PropsWithChildren, ReactElement, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {scrollToTop} from '@/shared/lib/helpers';
import {Breadcrumbs} from '../breadCrumbs/BreadCrumbs';
import {Loader} from '../loader/Loader';

const MotionBox = motion(Box);
const variants = {
  hidden: {opacity: 0, y: 10},
  visible: {opacity: 1, y: 0, transition: {duration: 0.5}}
};
const maxRouteLength = 3;

type Props = PropsWithChildren & {
  isLoading?: boolean;
  title?: string;
  withScroll?: boolean;
};

export const PageWrapper = ({
  children,
  isLoading,
  title,
  withScroll = true
}: Props): ReactElement => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.split('/').length <= maxRouteLength && withScroll) {
      scrollToTop();
    }
  }, [location, withScroll]);

  if (isLoading) {
    return <Loader fullHeight />;
  }

  return (
    <>
      <Breadcrumbs sx={{mb: 2}} title={title} />
      <MotionBox initial="hidden" animate="visible" exit="exit" variants={variants}>
        {children}
      </MotionBox>
    </>
  );
};
