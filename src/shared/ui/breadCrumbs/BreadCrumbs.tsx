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

  return (
    <MuiBreadCrumbs aria-label="breadcrumb" {...props}>
      {routes.map((matchedRoute, i) => {
        const matchedRoutePathname = matchedRoute.pathname;
        const matchedRouteBasename = matchedRoute.pathnameBase;
        const breadcrumbName = matchedRoute.route.breadcrumbName;
        const isActive = matchedRoutePathname === pathname;
        const isNestedRoute = pathname !== matchedRouteBasename;
        const link = isNestedRoute ? matchedRouteBasename : matchedRoutePathname;

        return isActive && !isNestedRoute ? (
          <Typography key={i}>{breadcrumbName}</Typography>
        ) : (
          <AppLink key={i} to={link}>
            {breadcrumbName}
          </AppLink>
        );
      })}
    </MuiBreadCrumbs>
  );
};
