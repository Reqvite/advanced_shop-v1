import {tagOptions} from '@/shared/lib/helpers/enumLabelResolver/options';

export const footerColumns = [
  {
    title: 'Get in touch',
    links: [
      {_id: '1', to: '/link1', label: 'About us'},
      {_id: '2', to: '/link2', label: 'Careers'},
      {_id: '3', to: '/link3', label: 'Press Releases'},
      {_id: '4', to: '/link3', label: 'Blog'}
    ]
  },
  {
    title: 'Connections',
    links: [
      {_id: '1', to: '/link1', label: 'Facebook'},
      {_id: '2', to: '/link2', label: 'Twitter'},
      {_id: '3', to: '/link3', label: 'Instagram'},
      {_id: '4', to: '/link3', label: 'Youtube'},
      {_id: '5', to: '/link3', label: 'Linkedin'}
    ]
  },
  {
    title: 'Earnings',
    links: [
      {_id: '1', to: '/link1', label: 'Become an Affiliate'},
      {_id: '2', to: '/link2', label: 'Advertise your product'},
      {_id: '3', to: '/link3', label: 'Sell on Market'}
    ]
  },
  {
    title: 'Account',
    links: [
      {_id: '1', to: '/link1', label: 'Your account'},
      {_id: '2', to: '/link2', label: 'Return centre'},
      {_id: '3', to: '/link3', label: '100% purchase protection'},
      {_id: '4', to: '/link3', label: 'Chat with us'},
      {_id: '5', to: '/link3', label: 'Help'}
    ]
  }
];

export const footerTags = tagOptions;
