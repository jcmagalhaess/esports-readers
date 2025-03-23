import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { mainRouteMFE, MENU } from '../../shared/configs/menu.config';
import { IMenu } from '../../shared/interfaces/menu.interface';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopBarComponent } from '../top-bar/top-bar.component';

@Component({
    selector: 'app-layout',
    imports: [
      CommonModule,
      RouterModule,
      MatTabsModule,
      MatTooltipModule,
      TopBarComponent,
      SidebarComponent
    ],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  public navLinks: IMenu[] = MENU;

  public routerAssets(item: string) {
    return `../../../assets/img${item}.png`;
  }

  public setMainRoute(route: string) {
    mainRouteMFE.set(route);
  }
}
