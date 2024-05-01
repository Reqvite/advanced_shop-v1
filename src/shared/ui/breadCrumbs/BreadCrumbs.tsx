import {Breadcrumbs as MuiBreadCrumbs, BreadcrumbsProps, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {matchRoutes, useLocation} from 'react-router-dom';
import {getRouteMain, routeConfig} from '@/app/providers/AppRouter/routeConfig';
import {AppLink} from '../link/AppLink';

type Props = BreadcrumbsProps;

export const Breadcrumbs = (props: Props): ReactElement => {
  const {pathname} = useLocation();
  const matchedRoutes = matchRoutes(Object.values(routeConfig), pathname);
  const onMatchedRoutes = (matchedRoutes) => {
    if (!matchedRoutes) return [];
    const routes = matchedRoutes.map((matchRoute) => {
      return {
        pathname: matchRoute.pathname,
        route: matchRoute.route
      };
    });

    const homeBreadcrumbExists = routes.some((route) => route.pathname === getRouteMain());
    if (!homeBreadcrumbExists) {
      routes.unshift({
        pathname: getRouteMain(),
        route: routeConfig.main
      });
    }

    return routes;
  };
  const routes = onMatchedRoutes(matchedRoutes);

  return (
    <MuiBreadCrumbs aria-label="breadcrumb" {...props}>
      {routes.map((matchRoute, i) => {
        const matchRoutePathname = matchRoute.pathname;
        const {breadcrumbName} = matchRoute.route;
        const isActive = matchRoutePathname === pathname;
        return isActive ? (
          <Typography key={i}>{breadcrumbName}</Typography>
        ) : (
          <AppLink key={i} to={matchRoutePathname}>
            {breadcrumbName}
          </AppLink>
        );
      })}
    </MuiBreadCrumbs>
  );
};
