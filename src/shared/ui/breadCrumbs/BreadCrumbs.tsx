import {Breadcrumbs as MuiBreadCrumbs, BreadcrumbsProps, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {matchRoutes, useLocation} from 'react-router-dom';
import {MatchedRoute, routeConfig} from '@/app/providers/AppRouter/routeConfig';
import {AppLink} from '../link/AppLink';
import {onMatchedRoutes} from './model/onMatchedRoutes';

type Props = BreadcrumbsProps;

type Route = {
  path: string;
};

export const Breadcrumbs = (props: Props): ReactElement => {
  const {pathname} = useLocation();
  const matchedRoutes = matchRoutes(Object.values(routeConfig) as Route[], pathname);
  const routes = onMatchedRoutes(matchedRoutes as MatchedRoute[]);

  const renderBreadcrumb = (matchedRoute: MatchedRoute): ReactElement => {
    const {
      pathname: matchedRoutePathname,
      pathnameBase: matchedRouteBasename,
      route: {breadcrumbName}
    } = matchedRoute;
    const isActive = matchedRoutePathname === pathname;
    const isNestedRoute = pathname !== matchedRouteBasename;
    const link = isNestedRoute ? matchedRouteBasename : matchedRoutePathname;

    return isActive && !isNestedRoute ? (
      <Typography key={matchedRoute.pathname}>{breadcrumbName}</Typography>
    ) : (
      <AppLink key={matchedRoute.pathname} to={link}>
        {breadcrumbName}
      </AppLink>
    );
  };

  return (
    <MuiBreadCrumbs aria-label="breadcrumb" {...props}>
      {routes.map((matchedRoute) => renderBreadcrumb(matchedRoute))}
    </MuiBreadCrumbs>
  );
};
