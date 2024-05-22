const defaultCategory = 0;

export class SearchFilterModel {
  public category: number;
  public search: string;

  constructor({
    model,
    categories
  }: {
    model?: {category?: number; search?: string};
    categories?: number[];
  }) {
    const resetCategory = (categories?.length || 0) > 1;
    this.category = resetCategory
      ? defaultCategory
      : categories?.[0] || model?.category || defaultCategory;
    this.search = model?.search || '';
  }
}
