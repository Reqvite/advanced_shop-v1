import {Stack, StackProps, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {Autoplay} from 'swiper/modules';
import {getRouteMain} from '@/app/providers/AppRouter/routeConfig';
import {ProductI} from '@/shared/types/product';
import {Flex} from '../base/Flex';
import {NavigateButton} from '../button/NavigateButton';
import {Carousel} from '../carousel/Carousel';
import {ProductCard} from './ProductCard';

type Props = StackProps & {
  products: ProductI[];
  isLoading?: boolean;
};

export const RecommendedProductList = ({
  products,
  isLoading,
  ...otherProps
}: Props): ReactElement => {
  const renderProductCard = (product: ProductI) => {
    return <ProductCard variant="small" sx={{height: 350}} {...product} />;
  };

  return (
    <Stack gap={1} pt={5} {...otherProps}>
      <Flex justifyContent="space-between">
        <Typography variant="h5">You will maybe love</Typography>
        <NavigateButton label="More products" to={getRouteMain()} />
      </Flex>
      {!isLoading && (
        <Carousel
          items={products}
          // autoplay
          slidesPerView={1}
          loop
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            1260: {
              slidesPerView: 4,
              spaceBetween: 30
            }
          }}
          component={renderProductCard}
        />
      )}
    </Stack>
  );
};
