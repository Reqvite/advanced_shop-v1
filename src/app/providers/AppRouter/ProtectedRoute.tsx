import {ReactNode} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {UserRole} from '@/shared/enums/roles.enum';
import {usePermissions} from '@/shared/lib/hooks';
import {getRouteMain} from './routeConfig';

interface RequireAuthProps {
  children: ReactNode;
  roles: UserRole[];
}

export function ProtectedRoute({children, roles}: RequireAuthProps): ReactNode | null {
  const location = useLocation();
  const hasAccess = usePermissions(roles);

  if (!hasAccess) {
    return <Navigate to={getRouteMain()} state={{from: location}} replace />;
  }

  return !hasAccess ? null : children;
}
