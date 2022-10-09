import { Menu } from './types';

export const classes = {
  sidebarWrapper: 'w-[358px]',
  layoutWrapper: 'lg:pl-[358px]',
  header: 'left-0 lg:left-[calc(358px+32px)]',
};

export const APP_NAME = 'EarthCore Group';

export const menus: Menu[] = [
  {
    text: 'ABOUT US',
    url: '/about',
    pageKey: 'about-us',
  },
  {
    text: 'WHAT WE DO',
    url: '/about/#what-we-do',
    pageKey: 'about-us',
  },
  {
    text: 'OUR PROCESS',
    url: '/about/#our-process',
    pageKey: 'about-us',
  },
  {
    text: 'RESIDENTIAL',
    url: '/residential',
    pageKey: 'services',
  },
  {
    text: 'ENVIRONMENTAL',
    url: '/environment',
    pageKey: 'services',
  },
  {
    text: 'INTOWN FIX',
    url: '/intown-fix',
    pageKey: 'services',
  },
  {
    text: 'COMMERCIAL',
    url: '/commercial',
    pageKey: 'services',
  },
];
