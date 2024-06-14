import {UserRole} from '@/shared/enums/roles.enum';
import {CartItem} from '../cart';

export type User = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
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
  data: {
    user: User;
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
  };
  decodedToken?: JwtPayload;
};

export type UserRefreshResponseDto = {
  data: {
    accessToken: string;
    refreshToken: string;
  };
  decodedToken?: JwtPayload;
};

export type UserLoginRequestDto = {
  email: string;
  password: string;
};

export type UserSignUpDto = User & {password: string};

export type JwtPayload = {
  roles: UserRole[];
};
