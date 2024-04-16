import {createAsyncThunk} from '@reduxjs/toolkit';
import {AsyncThunkConfig} from '@/app/providers/StoreProvider/config/types';
import {UsersApiPath} from '@/shared/types/apiPath';
import {
  User,
  UserLoginRequestDto,
  UserLoginResponseDto,
  UserRegisterRequestDto,
  UserRegisterResponseDto
} from '@/shared/types/user/user';

const login = createAsyncThunk<UserLoginResponseDto, UserLoginRequestDto, AsyncThunkConfig>(
  UsersApiPath.LOG_IN,
  async (body, {extra: {$api}, rejectWithValue}) => {
    try {
      const response = await $api.post(UsersApiPath.LOG_IN, body);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const register = createAsyncThunk<
  UserRegisterResponseDto,
  UserRegisterRequestDto,
  AsyncThunkConfig
>(UsersApiPath.REGISTER, async (body, {dispatch, extra: {$api}, rejectWithValue}) => {
  try {
    const response = await $api.post(UsersApiPath.REGISTER, body);
    await dispatch(login(body));
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const currentUser = createAsyncThunk<User, undefined, AsyncThunkConfig>(
  UsersApiPath.CURRENT,
  async (_request, {extra: {$api}, rejectWithValue}) => {
    try {
      const response = await $api.get(UsersApiPath.CURRENT);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const refreshToken = createAsyncThunk<UserLoginResponseDto, undefined, AsyncThunkConfig>(
  UsersApiPath.REFRESH,
  async (_request, {extra: {$apiRefresh}, rejectWithValue}) => {
    try {
      const response = await $apiRefresh.post(UsersApiPath.REFRESH);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export {currentUser, login, refreshToken, register};
