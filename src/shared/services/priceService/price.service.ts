import {PriceI} from '@/shared/types/price';

class PriceService {
  getFixedPrice(price: number): number {
    return parseFloat(price.toFixed(2));
  }

  getDiscountPrice({discount, price}: PriceI): number {
    return this.getFixedPrice((price * discount) / 100);
  }
}

export const priceService = new PriceService();
