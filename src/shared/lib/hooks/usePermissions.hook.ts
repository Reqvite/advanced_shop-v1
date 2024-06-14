import {UserRole} from '@/shared/enums/roles.enum';
import {selectRoles} from '@/slices/user';
import {useAppSelector} from './useAppSelector.hook';

export const usePermissions = (roles: UserRole[]): boolean => {
  const userRoles = useAppSelector(selectRoles);
  if (!userRoles) return false;

  return roles.every((role) => userRoles.includes(role));
};
