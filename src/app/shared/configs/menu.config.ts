import { signal } from '@angular/core';
import { IMenu } from '../interfaces/menu.interface';

export const MENU: IMenu[] = [
  {
    label: 'Valorant',
    route: '/valorant',
  }
];

export const MENU_AUX: IMenu[] = [
  {
    label: 'Schedule',
    route: 'schedule',
  },
  {
    label: 'Sports',
    route: 'sports',
  },
  {
    label: 'Live Play',
    route: 'live-play',
  },
  {
    label: 'Statistics',
    route: 'statistics',
  },
  {
    label: 'Ranking',
    route: 'ranking',
  },
]

export const mainRouteMFE = signal<string>('valorant');
