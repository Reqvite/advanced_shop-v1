export class SearchFilterModel {
  public category: number;
  public search?: string;

  constructor({model}: {model?: {category?: number; search?: string}}) {
    this.category = model?.category || 0;
    this.search = model?.search || '';
  }
}
