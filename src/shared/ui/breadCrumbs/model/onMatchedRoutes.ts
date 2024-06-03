import {getRouteMain, MatchedRoute, routeConfig} from '@/app/providers/AppRouter/routeConfig';

export const onMatchedRoutes = (matchedRoutes: MatchedRoute[], title?: string): MatchedRoute[] => {
  if (!matchedRoutes) return [];
  const routes = matchedRoutes.map((matchRoute) => {
    return {
      pathname: matchRoute.pathname,
      pathnameBase: matchRoute.pathnameBase,
      route: matchRoute.route
    };
  });

  const homeBreadcrumbExists = routes.some((route) => route.pathname === getRouteMain());
  if (!homeBreadcrumbExists) {
    routes.unshift({
      pathname: getRouteMain(),
      pathnameBase: getRouteMain(),
      route: routeConfig.main
    });
  }

  if (title) {
    routes.push({
      pathname: 'title',
      route: {
        breadcrumbName: `${title.slice(0, 55)}...`
      }
    } as MatchedRoute);
  }

  return routes;
};
