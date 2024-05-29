import {Box} from '@mui/material';
import {ReactElement, useCallback} from 'react';
import {checkoutStyles} from '@/app/theme/styles';
import {CartProductI} from '@/shared/types/product';
import {List, Title} from '@/shared/ui';
import {CartProductCard} from '@/shared/ui/product/CartProductCard/CartProductCard';
import {useDeleteItemByIdMutation, useUpdatedCartMutation} from '@/slices/cart';
import {useUpdateWishlistMutation} from '@/slices/products';
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
        onUpdateWishlist={useUpdateWishlistMutation}
        onDeleteItem={useDeleteItemByIdMutation}
        onUpdateCart={useUpdatedCartMutation}
        {...product}
      />
    ),
    []
  );

  return (
    <Box sx={checkoutStyles.orderSummaryBox}>
      <Title
        title="Order Summary"
        description="Price can change depending on shipping method and taxes of your state."
      />
      <List<CartProductI>
        items={items}
        renderItem={renderItem}
        sx={checkoutStyles.orderSummaryList}
        itemStyle={checkoutStyles.orderSummaryListItem}
        emptyListTitle="Cart is empty."
      />
      <OrderSummaryTotal items={items} tax={tax} />
    </Box>
  );
};
