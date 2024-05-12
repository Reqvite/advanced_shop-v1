import {Stack, StackProps, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {Autoplay} from 'swiper/modules';
import {SwiperProps} from 'swiper/react';
import {getRouteMain} from '@/app/providers/AppRouter/routeConfig';
import {useMediaQuery} from '@/shared/lib/hooks';
import {ProductI} from '@/shared/types/product';
import {useUpdateWishlistMutation} from '@/slices/products';
import {Flex} from '../base/Flex';
import {NavigateButton} from '../button/NavigateButton';
import {Carousel} from '../carousel/Carousel';
import {ProductCard} from './ProductCard';

type Props = StackProps & {
  products: ProductI[];
  isLoading?: boolean;
  onUpdateWishlist: typeof useUpdateWishlistMutation;
};

const getCarouselConfig = (isMobile: boolean): SwiperProps => {
  const desktopProps = {
    speed: 20000
  };

  return {
    autoplay: {
      delay: 5000,
      disableOnInteraction: true
    },
    modules: [Autoplay],
    slidesPerView: 1,
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1260: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    },
    freeMode: true,
    allowTouchMove: true,
    ...(isMobile ? {} : desktopProps)
  };
};

export const RecommendedProductList = ({
  products,
  isLoading,
  onUpdateWishlist,
  ...otherProps
}: Props): ReactElement => {
  const isMobile = useMediaQuery('md');
  const renderProductCard = (product: ProductI): ReactElement => {
    return (
      <ProductCard
        onUpdateWishlist={onUpdateWishlist}
        variant="small"
        sx={{height: 350}}
        {...product}
      />
    );
  };

  return (
    <Stack gap={1} pt={5} {...otherProps}>
      <Flex justifyContent="space-between">
        <Typography variant="h5">You will maybe love</Typography>
        <NavigateButton label="More products" to={getRouteMain()} />
      </Flex>
      {!isLoading && (
        <Carousel {...getCarouselConfig(isMobile)} items={products} component={renderProductCard} />
      )}
    </Stack>
  );
};
