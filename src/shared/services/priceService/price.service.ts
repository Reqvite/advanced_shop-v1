import {defaultTax} from '@/shared/const/product.const';
import {PriceI} from '@/shared/types/price';
import {CartProductI} from '@/shared/types/product';

const defaultFixedValue = 2;

class PriceService {
  getFixedPrice(price: number, fixedValue = defaultFixedValue): number {
    return parseFloat(price.toFixed(fixedValue));
  }

  getDiscountPrice({discount, price}: PriceI): number {
    return this.getFixedPrice(price - (price * discount) / 100);
  }

  getSubtotal(items: CartProductI[]): number {
    return this.getFixedPrice(
      items?.reduce((acc, {price, discount, orderedQuantity}) => {
        const finalDiscount = discount ?? 0;
        const finalPrice = finalDiscount
          ? this.getDiscountPrice({discount: finalDiscount, price})
          : price;
        return acc + finalPrice * orderedQuantity;
      }, 0)
    );
  }

  getTax({price, tax = defaultTax}: {price: number; tax?: number}): number {
    return this.getFixedPrice((price / 100) * tax);
  }

  getTotal(items: CartProductI[], tax = defaultTax): number {
    const subTotal = this.getSubtotal(items);
    const taxTotal = this.getTax({price: subTotal, tax});
    return this.getFixedPrice(subTotal + taxTotal);
  }
}

export const priceService = new PriceService();
