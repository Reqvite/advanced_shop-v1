import {ReactElement, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Loader} from '@/shared/ui';
import {AppRoutesProps, routeConfig} from './routeConfig';

export const AppRouter = (): ReactElement => {
  const renderRouteElement = (route: AppRoutesProps) => (
    <Route
      key={route.path}
      path={route.path}
      element={<Suspense fallback={<Loader fullHeight />}>{route.element}</Suspense>}
    >
      {route.children && <Route>{renderRoutesRecursive(route.children as AppRoutesProps)}</Route>}
    </Route>
  );

  const renderRoutesRecursive = (routes: AppRoutesProps) => {
    if (Array.isArray(routes)) {
      return routes.map((route) => renderRouteElement(route));
    } else {
      return renderRouteElement(routes);
    }
  };

  return <Routes>{Object.values(routeConfig).map((route) => renderRoutesRecursive(route))}</Routes>;
};
