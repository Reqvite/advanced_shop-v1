import {getRouteDashboard, getRouteOrders} from '@/app/providers/AppRouter/routeConfig';
import {PopoverItemI} from '@/shared/types/popover';

export const getMenuOptions = ({
  isAdminRole,
  onLogout
}: {
  isAdminRole?: boolean;
  onLogout: () => void;
}): PopoverItemI['children'] => [
  {
    _id: '1',
    label: 'Profile'
  },
  ...(isAdminRole
    ? [
        {
          _id: '2',
          label: 'Dashboard',
          href: getRouteDashboard()
        }
      ]
    : []),
  {
    _id: '3',
    label: 'Orders history',
    href: getRouteOrders()
  },
  {
    _id: '4',
    label: 'Logout',
    onClick: onLogout
  }
];
