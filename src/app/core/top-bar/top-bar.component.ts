import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MENU_AUX } from '../../shared/configs/menu.config';
import { IMenu } from '../../shared/interfaces/menu.interface';
import { TimezoneSelectComponent } from '../timezone-select/containers/timezone-select.component';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule, RouterModule, TimezoneSelectComponent, MatButtonModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  public navLinks: IMenu[] = MENU_AUX;

  public routerAssets() {
    return `../../../assets/img/sportsbet-io-logo.png`;
  }
}
