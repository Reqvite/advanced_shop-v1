import {defaultPrice, defaultRating, defaultSort} from '../const/product.const';

export class ProductFilterModel {
  public sort: number;
  public rating: number;
  public prices: number[];
  public brands: number[];

  constructor(model?: ProductFilterModel) {
    this.sort = model?.sort || defaultSort;
    this.rating = model?.rating || defaultRating[1];
    this.prices = model?.prices || defaultPrice;
    this.brands = model?.brands || [];
  }
}
