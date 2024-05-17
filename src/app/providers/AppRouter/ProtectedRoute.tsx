import {ReactNode} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {useAuth} from '@/shared/lib/hooks';
import {getRouteMain} from './routeConfig';

interface RequireAuthProps {
  children: ReactNode;
}

export function ProtectedRoute({children}: RequireAuthProps) {
  const location = useLocation();
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to={getRouteMain()} state={{from: location}} replace />;
  }

  return !auth.user ? null : children;
}
