import {User} from '@/shared/types/user/user';
import {selectAuthAccessToken, selectAuthUser} from '@/slices/user';
import {useAppSelector} from './useAppSelector.hook';

export const useAuth = (): {
  user: User | null;
  accessToken: string | null;
} => {
  const user = useAppSelector(selectAuthUser);
  const accessToken = useAppSelector(selectAuthAccessToken);

  return {
    user,
    accessToken
  };
};
