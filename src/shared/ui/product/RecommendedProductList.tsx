import {Stack, StackProps, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {getRouteMain} from '@/app/providers/AppRouter/routeConfig';
import {ProductI} from '@/shared/types/product';
import {Flex} from '../base/Flex';
import {NavigateButton} from '../button/NavigateButton';
import {List} from '../list/List';
import {ProductCard} from './ProductCard';
import {ProductCardSkeleton} from './ProductCard.skeleton';

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
    return <ProductCard variant="small" {...product} />;
  };

  return (
    <Stack gap={1} pt={5} {...otherProps}>
      <Flex justifyContent="space-between">
        <Typography variant="h5">You will maybe love</Typography>
        <NavigateButton label="More products" to={getRouteMain()} />
      </Flex>
      <List
        items={products?.slice(0, 4)}
        row
        renderItem={renderProductCard}
        isLoading={isLoading}
        skeleton={<ProductCardSkeleton variant="small" />}
        skeletonLength={4}
        itemStyle={{width: 'auto'}}
      />
    </Stack>
  );
};
