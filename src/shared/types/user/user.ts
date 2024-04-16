export type User = {
  id: string;
  email: string;
  fullName: string;
  createdAt: string;
};

export type UserRegisterRequestDto = {
  email: string;
  username: string;
  password: string;
};

export type UserRegisterResponseDto = UserLoginResponseDto;

export type UserLoginResponseDto = {
  accessToken: string;
  refreshToken: string;
};

export type UserLoginRequestDto = {
  email: string;
  password: string;
};

export type UserWithPassword = User & {password: string};
