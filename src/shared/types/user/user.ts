export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
};

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

export type UserWithPassword = User & {password: string};
