export class SearchFilterModel {
  public categories0?: number;
  public search?: string;

  constructor({model}: {model?: {categories: number[]; search: string}}) {
    this.categories0 = model?.categories?.[0] || 0;
    this.search = model?.search || '';
  }
}
