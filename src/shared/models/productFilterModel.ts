import {defaultPage, defaultPrice, defaultRating, defaultSort} from '../const/product.const';

export class ProductFilterModel {
  public page?: number;
  public sort?: number;
  public rating: number[];
  public categories: number[];
  public prices: number[];
  public brands: number[];

  constructor(model?: ProductFilterModel) {
    this.page = model?.sort || defaultPage;
    this.sort = model?.sort || defaultSort;
    this.rating = model?.rating || defaultRating;
    this.categories = model?.categories || [];
    this.prices = model?.prices || defaultPrice;
    this.brands = model?.brands || [];
  }
}
