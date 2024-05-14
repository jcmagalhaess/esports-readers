import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MENU_AUX } from '../../shared/configs/menu.config';
import { IMenu } from '../../shared/interfaces/menu.interface';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  public navLinks: IMenu[] = MENU_AUX;

  public routerAssets() {
    return `../../../assets/img/sportsbet-io-logo.png`;
  }
}
