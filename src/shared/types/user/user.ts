import {CartItem} from '../cart';

export type User = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  wishlist: string[];
  cart: CartItem[];
};

export type UserWishlistType = string[];

export type UserRegisterRequestDto = {
  email: string;
  username: string;
  password: string;
};

export type UserRegisterResponseDto = UserLoginResponseDto;

export type UserLoginResponseDto = {
  user: User;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
};

export type UserRefreshResponseDto = {
  accessToken: string;
  refreshToken: string;
};

export type UserLoginRequestDto = {
  email: string;
  password: string;
};

export type UserSignUpDto = User & {password: string};
