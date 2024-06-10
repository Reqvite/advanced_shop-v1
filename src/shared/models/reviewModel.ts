export class ReviewModel {
  public rating?: number;
  public message: string;

  constructor(model?: ReviewModel) {
    this.rating = model?.rating;
    this.message = model?.message || '';
  }
}
