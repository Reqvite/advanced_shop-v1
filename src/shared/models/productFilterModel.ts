import {defaultPage, defaultPrice, defaultRating, defaultSort} from '../const/product.const';

const setDefaultCategories = (category?: number, categories?: number[]): number[] | undefined => {
  if (category) {
    return [category];
  } else {
    return categories;
  }
};
export class ProductFilterModel {
  public page?: number;
  public sort?: number;
  public rating: number[];
  public categories: number[];
  public prices: number[];
  public brands: number[];

  constructor({
    model,
    minMaxPrices = defaultPrice,
    category
  }: {
    model?: ProductFilterModel;
    minMaxPrices?: number[];
    category?: number;
  }) {
    this.page = model?.page || defaultPage;
    this.sort = model?.sort || defaultSort;
    this.rating = model?.rating || defaultRating;
    this.categories = setDefaultCategories(category, model?.categories) || [];
    this.prices = model?.prices || minMaxPrices;
    this.brands = model?.brands || [];
  }
}
