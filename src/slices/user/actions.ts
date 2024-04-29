import {createAsyncThunk} from '@reduxjs/toolkit';
import {AsyncThunkConfig} from '@/app/providers/StoreProvider/config/types';
import {UsersApiPath} from '@/shared/enums/apiPath.enum';
import {
  User,
  UserLoginRequestDto,
  UserLoginResponseDto,
  UserRefreshResponseDto,
  UserRegisterRequestDto,
  UserRegisterResponseDto
} from '@/shared/types/user/user';
import {actions} from '.';

const login = createAsyncThunk<UserLoginResponseDto, UserLoginRequestDto, AsyncThunkConfig>(
  UsersApiPath.LOG_IN,
  async (body, {dispatch, extra: {$publicApi}}) => {
    const response = await $publicApi.post(UsersApiPath.LOG_IN, body);
    dispatch(actions.closeModal());

    return response.data;
  }
);

const register = createAsyncThunk<
  UserRegisterResponseDto,
  UserRegisterRequestDto,
  AsyncThunkConfig
>(UsersApiPath.REGISTER, async (body, {dispatch, extra: {$publicApi}}) => {
  const response = await $publicApi.post(UsersApiPath.REGISTER, body);
  await dispatch(login(body));

  return response.data;
});

const currentUser = createAsyncThunk<User, undefined, AsyncThunkConfig>(
  UsersApiPath.CURRENT,
  async (_request, {extra: {$protectedApi}}) => {
    const response = await $protectedApi.get(UsersApiPath.CURRENT);

    return response.data;
  }
);

const refreshToken = createAsyncThunk<UserRefreshResponseDto, undefined, AsyncThunkConfig>(
  UsersApiPath.REFRESH,
  async (_request, {extra: {$refreshApi}}) => {
    const response = await $refreshApi.post(UsersApiPath.REFRESH);

    return response.data;
  }
);

const logout = createAsyncThunk<UserRefreshResponseDto, undefined, AsyncThunkConfig>(
  UsersApiPath.LOG_OUT,
  async (_request, {extra: {$protectedApi}}) => {
    const response = await $protectedApi.post(UsersApiPath.LOG_OUT);

    return response.data;
  }
);

export {currentUser, login, logout, refreshToken, register};
