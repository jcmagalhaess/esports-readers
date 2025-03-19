import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MENU_AUX, routeMFESignal } from '../../shared/configs/menu.config';
import { IMenu } from '../../shared/interfaces/menu.interface';

@Component({
    selector: 'app-top-bar',
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
    ],
    templateUrl: './top-bar.component.html',
    styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  public navLinks: IMenu[] = MENU_AUX;
  public parentPath: string = '';

  get routeMFESignal() {
    return routeMFESignal();
  };

  public routerAssets() {
    return `../../../assets/img/sportsbet-io-logo.png`;
  }
}
