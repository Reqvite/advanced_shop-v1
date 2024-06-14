import {UserRole} from '@/shared/enums/roles.enum';

export const hasRole = ({
  roles,
  role
}: {
  roles?: UserRole[];
  role: UserRole;
}): boolean | undefined => {
  if (!roles) return false;

  return roles.includes(role);
};
