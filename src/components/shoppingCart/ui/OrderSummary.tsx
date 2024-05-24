import {Box, Stack, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {checkoutStyles} from '@/app/theme/styles';
import {priceService} from '@/shared/services';
import {CartProductI} from '@/shared/types/product';
import {Flex, List, Title} from '@/shared/ui';
import {CartProductCard} from '@/shared/ui/product/CartProductCard';
import {CartProductCardSkeleton} from '@/shared/ui/product/CartProductCard.skeleton';
import {useDeleteItemByIdMutation} from '@/slices/cart';
import {useUpdateWishlistMutation} from '@/slices/products';

type Props = {
  items: CartProductI[];
  isLoading?: boolean;
  tax?: number;
};

export const OrderSummary = ({items, tax = 15, isLoading}: Props): ReactElement => {
  const subTotal = priceService.getFixedPrice(
    items?.reduce((acc, {price, discount, orderedQuantity}) => {
      const finalDiscount = discount ?? 0;
      const finalPrice = finalDiscount
        ? priceService.getDiscountPrice({discount: finalDiscount, price})
        : price;
      return acc + finalPrice * orderedQuantity;
    }, 0)
  );
  const taxTotal = priceService.getFixedPrice((subTotal / 100) * tax);
  const total = priceService.getFixedPrice(subTotal + taxTotal);

  return (
    <Box sx={checkoutStyles.orderSummaryBox}>
      <Title
        title="Order Summary"
        description="Price can change depending on shipping method and taxes of your state."
      />
      <List<CartProductI>
        items={items}
        renderItem={(product) => (
          <CartProductCard
            onUpdateWishlist={useUpdateWishlistMutation}
            onDeleteItem={useDeleteItemByIdMutation}
            {...product}
          />
        )}
        skeleton={<CartProductCardSkeleton />}
        skeletonLength={items?.length}
        sx={checkoutStyles.orderSummaryList}
        itemStyle={checkoutStyles.orderSummaryListItem}
        isLoading={isLoading}
        emptyListTitle="Cart is empty."
      />
      <Stack gap={1} mt={6}>
        <Flex justifyContent="space-between">
          <Typography fontWeight={600}>Subtotal</Typography>
          <Typography fontWeight={600}>{subTotal} USD</Typography>
        </Flex>
        <Flex justifyContent="space-between">
          <Typography fontWeight={600}>Tax {tax} %</Typography>
          <Typography fontWeight={600}>{taxTotal} USD</Typography>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Typography fontWeight={600}>Total Order</Typography>
            <Typography fontWeight={600} color="primary.main">
              Guaranteed delivery day: June 12, 2024
            </Typography>
          </Box>
          <Typography component="p" fontWeight={600} variant="h3" color="primary.main">
            {total} USD
          </Typography>
        </Flex>
      </Stack>
    </Box>
  );
};
