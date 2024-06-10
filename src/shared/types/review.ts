export interface ReviewI {
  _id: string;
  userId: string;
  username: string;
  rating: number;
  message: string;
  createdAt: string;
}

export interface CreateReviewI {
  rating: number;
  message: string;
  productId: string;
  parentId?: string;
}

export interface UpdateReviewI {
  rating: number;
  message: string;
  _id: string;
}
