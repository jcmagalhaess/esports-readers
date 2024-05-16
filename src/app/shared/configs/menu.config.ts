import { IMenu } from '../interfaces/menu.interface';

export const MENU: IMenu[] = [
  {
    label: 'Valorant',
    route: './valorant',
  },
  {
    label: 'League of Legends',
    route: './league-of-legends',
  },
  {
    label: 'Rainbow Six',
    route: './rainbow-six',
  },
];

export const MENU_AUX: IMenu[] = [
  {
    label: 'Schedule',
    route: '/valorant/schedule',
  },
  {
    label: 'Sports',
    route: '/valorant/sports',
  },
  {
    label: 'Live Play',
    route: '/valorant/live-play',
  },
  {
    label: 'Statistics',
    route: '/valorant/statistics',
  },
  {
    label: 'Ranking',
    route: '/valorant/ranking',
  },
]
