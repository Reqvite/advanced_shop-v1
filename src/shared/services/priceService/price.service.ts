import {PriceI} from '@/shared/types/price';
import {CartProductI} from '@/shared/types/product';

class PriceService {
  getFixedPrice(price: number): number {
    return parseFloat(price.toFixed(2));
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

  getTax({price, tax}: {price: number; tax: number}): number {
    return this.getFixedPrice((price / 100) * tax);
  }
}

export const priceService = new PriceService();
