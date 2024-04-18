import {useSelector} from 'react-redux';
import {User} from '@/shared/types/user/user';
import {selectAuthAccessToken, selectAuthUser} from '@/slices/user';

export const useAuth = (): {
  user: User | null;
  accessToken: string | null;
} => {
  const user = useSelector(selectAuthUser);
  const accessToken = useSelector(selectAuthAccessToken);

  return {
    user,
    accessToken
  };
};
