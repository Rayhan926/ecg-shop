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
    url: '/about-us/#about-us',
    pageKey: 'about-us',
    isHashUrl: true,
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
    imgSrc: '/img/env.png',
    label: 'Environmental',
  },
  {
    imgSrc: '/img/commercial.png',
    label: 'Commercial',
  },
  {
    imgSrc: '/img/handy-man.png',
    label: 'Intown Fix',
  },
];

export const residentialCards: CardWithImageProps[] = [
  {
    imgSrc: '/img/water-features.png',
    label: 'Water Features',
  },
  {
    imgSrc: '/img/fire-features.png',
    label: 'Fire Features',
  },
  {
    imgSrc: '/img/retaining-walls.png',
    label: 'Retaining Walls',
  },
  {
    imgSrc: '/img/patios-walkway.png',
    label: 'Patios & Walkways',
  },
  {
    imgSrc: '/img/specialty-drainage.png',
    label: 'Speciality Drainage',
  },
  {
    imgSrc: '/img/landscape-construction.png',
    label: 'Landscape Construction',
  },
];

export const environmentalCards: CardWithImageProps[] = [
  {
    imgSrc: '/img/phase-1.png',
    label: 'Environmental Site Assessment Phase 1',
  },
  {
    imgSrc: '/img/phase-2.png',
    label: 'Environmental Site Assessment Phase 2',
  },
  {
    imgSrc: '/img/er.png',
    label: 'Environmental Remediation',
  },
  {
    imgSrc: '/img/re.png',
    label: 'Real Estate & Industrial Consultaion',
  },
];
export const intownFixCards: CardWithImageProps[] = [
  {
    imgSrc: '/img/remodeling.png',
    label: 'Remodeling Services',
  },
  {
    imgSrc: '/img/handy-man.png',
    label: 'Home Renovating & Handyman',
  },
  {
    imgSrc: '/img/roofing-1.png',
    label: 'Roofing Services',
  },
  {
    imgSrc: '/img/ha-1.png',
    label: 'Heating & Air Conditioning',
  },
  {
    imgSrc: '/img/air.png',
    label: 'Heating',
  },
  {
    imgSrc: '/img/indoor-air.png',
    label: 'Indoor Air Quality',
  },
];
