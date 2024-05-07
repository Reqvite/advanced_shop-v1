import {defaultPrice, defaultRating, defaultSort} from '../const/product.const';

export class ProductFilterModel {
  public sort: number;
  public rating: number;
  public price: number[];
  public brand: number[];
  public category: number[];

  constructor(model?: ProductFilterModel) {
    this.sort = model?.sort || defaultSort;
    this.rating = model?.rating || defaultRating[1];
    this.price = model?.price || defaultPrice;
    this.brand = model?.brand || [];
    this.category = model?.category || [];
  }
}
