import {Box, Stack} from '@mui/material';
import {ReactElement, useCallback} from 'react';
import {checkoutStyles} from '@/app/theme/styles';
import {useCartActions} from '@/shared/lib/hooks/useCartActions.hook';
import {useWishlistActions} from '@/shared/lib/hooks/useWishlistActions.hook';
import {CartProductI} from '@/shared/types/product';
import {List, Title} from '@/shared/ui';
import {CartProductCard} from '@/shared/ui/product/CartProductCard/CartProductCard';
import {OrderSummaryTotal} from './OrderSummaryTotal';

type Props = {
  items: CartProductI[];
  isLoading?: boolean;
  tax?: number;
};

export const OrderSummary = ({items, tax = 15}: Props): ReactElement => {
  const renderItem = useCallback(
    (product: CartProductI) => (
      <CartProductCard
        useWishlistActions={useWishlistActions}
        useCartActions={useCartActions}
        {...product}
      />
    ),
    []
  );

  return (
    <Box sx={checkoutStyles.orderSummaryBox}>
      <Box>
        <Title
          title="Order Summary"
          description="Price can change depending on shipping method and taxes of your state."
        />
      </Box>
      <Stack height="100%">
        <List<CartProductI>
          items={items}
          renderItem={renderItem}
          sx={checkoutStyles.orderSummaryList}
          itemStyle={checkoutStyles.orderSummaryListItem}
          emptyListTitle="Cart is empty."
        />
        <OrderSummaryTotal items={items} tax={tax} />
      </Stack>
    </Box>
  );
};
