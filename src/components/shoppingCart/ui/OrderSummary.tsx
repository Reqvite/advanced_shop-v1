import {Box, Stack} from '@mui/material';
import {ReactElement, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {getRouteMain} from '@/app/providers/AppRouter/routeConfig';
import {checkoutStyles} from '@/app/theme/styles';
import {useCartAndWishlistActions} from '@/shared/lib/hooks/useCartAndWishlistActions.hook';
import {CartProductI} from '@/shared/types/product';
import {Button, Flex, List, Title} from '@/shared/ui';
import {CartProductCard} from '@/shared/ui/product/CartProductCard/CartProductCard';
import {OrderSummaryTotal} from './OrderSummaryTotal';

type Props = {
  items: CartProductI[];
  isLoading?: boolean;
  tax?: number;
};

export const OrderSummary = ({items, tax = 15}: Props): ReactElement => {
  const navigate = useNavigate();
  const renderItem = useCallback(
    (product: CartProductI) => (
      <CartProductCard useActions={useCartAndWishlistActions} {...product} />
    ),
    []
  );

  const onButtonClick = (): void => {
    navigate(getRouteMain());
  };

  return (
    <Box sx={checkoutStyles.orderSummaryBox}>
      <Box mb={1}>
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
        {items.length !== 0 ? (
          <OrderSummaryTotal items={items} tax={tax} />
        ) : (
          <Flex justifyContent="center" width="100%" mt={4}>
            <Button onClick={onButtonClick}>Start Shopping! 🛍️</Button>
          </Flex>
        )}
      </Stack>
    </Box>
  );
};
