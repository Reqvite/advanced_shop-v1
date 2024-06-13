import {jwtDecode} from 'jwt-decode';
import {ErrorMessages} from '@/shared/const/errorMessages.const';
import {notificationService} from '@/shared/services';
import {JwtPayload} from '@/shared/types/user/user';

export const getDecodedToken = (token: string): JwtPayload | undefined => {
  try {
    if (token) {
      return jwtDecode<JwtPayload>(token);
    }
  } catch {
    notificationService.error(ErrorMessages.ERROR);
    throw new Error();
  }
};
