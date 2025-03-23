import { Component } from '@angular/core';
import { LeaguesComponent } from '../leagues/leagues.component';
import { PlayNowComponent } from '../play-now/play-now.component';
import { WeeklyRankingComponent } from '../weekly-ranking/weekly-ranking.component';

@Component({
  selector: 'app-sidebar',
  imports: [PlayNowComponent, WeeklyRankingComponent, LeaguesComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
