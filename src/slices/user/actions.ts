import {createAsyncThunk} from '@reduxjs/toolkit';
import {AsyncThunkConfig} from '@/app/providers/StoreProvider/config/types';
import {UsersApiPath} from '@/shared/enums/apiPath.enum';
import {getDecodedToken} from '@/shared/lib/helpers/jwtHelpers';
import {
  User,
  UserLoginRequestDto,
  UserLoginResponseDto,
  UserRefreshResponseDto,
  UserRegisterRequestDto,
  UserRegisterResponseDto
} from '@/shared/types/user/user';
import {actions as modalActions} from '../modal';

const login = createAsyncThunk<UserLoginResponseDto, UserLoginRequestDto, AsyncThunkConfig>(
  UsersApiPath.LOG_IN,
  async (body, {dispatch, extra: {$publicApi, notificationService}}) => {
    const response = await $publicApi.post(UsersApiPath.LOG_IN, body);
    const decodedToken = getDecodedToken(response.data.tokens.accessToken);
    notificationService.success('Login successfully.');
    dispatch(modalActions.closeModal());

    return {data: response.data, decodedToken};
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
    const decodedToken = getDecodedToken(response.data.tokens.accessToken);

    return {data: response.data, decodedToken};
  }
);

const logout = createAsyncThunk<UserRefreshResponseDto, undefined, AsyncThunkConfig>(
  UsersApiPath.LOG_OUT,
  async (_request, {extra: {$protectedApi, notificationService}}) => {
    const response = await $protectedApi.post(UsersApiPath.LOG_OUT);
    notificationService.success('Logout successfully.');

    return response.data;
  }
);

export {currentUser, login, logout, refreshToken, register};
