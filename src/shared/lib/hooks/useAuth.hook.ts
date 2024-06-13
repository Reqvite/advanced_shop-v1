import {UserRole} from '@/shared/enums/roles.enum';
import {User} from '@/shared/types/user/user';
import {selectAuthAccessToken, selectAuthUser, selectRoles} from '@/slices/user';
import {useAppSelector} from './useAppSelector.hook';

export const useAuth = (): {
  user: User | null;
  accessToken: string | null;
  roles?: UserRole[];
  isAdminRole?: boolean;
} => {
  const user = useAppSelector(selectAuthUser);
  const accessToken = useAppSelector(selectAuthAccessToken);
  const roles = useAppSelector(selectRoles);
  const isAdminRole = roles?.includes(UserRole.ADMIN);

  return {
    user,
    accessToken,
    roles,
    isAdminRole
  };
};
