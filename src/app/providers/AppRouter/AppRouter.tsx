import {Suspense, useCallback} from 'react';
import {Route, Routes} from 'react-router-dom';
import {AppRoutesProps, routeConfig} from './routeConfig';

export const AppRouter = () => {
  const renderRoute = useCallback((route: AppRoutesProps) => {
    const element = <Suspense fallback={null}>{route.element}</Suspense>;

    return (
      <Route key={route.path} path={route.path} element={element}>
        {route.children && (
          <Route>
            {route.children.map((childRoute) => (
              <Route
                key={childRoute.path}
                index={childRoute.index}
                path={childRoute.path}
                element={childRoute.element}
              />
            ))}
          </Route>
        )}
      </Route>
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map((route) => renderRoute(route))}</Routes>;
};
