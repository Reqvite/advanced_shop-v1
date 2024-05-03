import {defaultPrice, defaultRating, defaultSort} from '../const/product.const';

export class ProductFilterModel {
  public sort: number;
  public rating: number;
  public price: number[];
  public brand: number[];

  constructor(model?: ProductFilterModel) {
    this.sort = model?.sort || defaultSort;
    this.rating = defaultRating[1];
    this.price = model?.price || defaultPrice;
    this.brand = model?.brand || [];
  }
}
