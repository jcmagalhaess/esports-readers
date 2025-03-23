import { Component } from '@angular/core';
import { PlayNowComponent } from '../play-now/play-now.component';

@Component({
  selector: 'app-sidebar',
  imports: [PlayNowComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
