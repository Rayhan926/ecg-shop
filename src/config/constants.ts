import { CardWithImageProps, Menu } from './types';

export const classes = {
  sidebarWrapper: 'w-[358px]',
  layoutWrapper: 'lg:pl-[358px]',
  header:
    'left-0 w-full lg:w-[calc(100%-calc(358px+32px))] lg:left-[calc(358px+32px)]',
};

export const APP_NAME = 'EarthCore Group';
export const contact = {
  phone: '404-858-7391',
  email: 'info@earthcoregroup.com',
  addressSidebar: '2103 Faulkner Rd NE, Atlanta',
  addressContactPage: '2103 Faulkner Rd NE Atlanta, GA',
};

export const menus: Menu[] = [
  {
    text: 'About Us',
    url: '/about-us',
    pageKey: 'about-us',
  },
  {
    text: 'What We Do',
    url: '/about-us/#what-we-do',
    pageKey: 'about-us',
    isHashUrl: true,
  },
  {
    text: 'Our Process',
    url: '/about-us/#our-process',
    pageKey: 'about-us',
    isHashUrl: true,
  },
  {
    text: 'Residential',
    url: '/residential',
    pageKey: 'services',
  },
  {
    text: 'Environmental',
    url: '/environmental',
    pageKey: 'services',
  },
  {
    text: 'Intown Fix',
    url: '/intown-fix',
    pageKey: 'services',
  },
  {
    text: 'Commercial',
    url: '/commercial',
    pageKey: 'services',
  },
  {
    text: 'Get a Quote',
    url: '/get-a-quote',
    pageKey: '',
  },
];

export const whatWeDoCards: CardWithImageProps[] = [
  {
    imgSrc: '/img/residential.png',
    label: 'Residential',
  },
  {
    imgSrc: '/img/residential.png',
    label: 'Residential',
  },
  {
    imgSrc: '/img/residential.png',
    label: 'Residential',
  },
  {
    imgSrc: '/img/residential.png',
    label: 'Residential',
  },
];
