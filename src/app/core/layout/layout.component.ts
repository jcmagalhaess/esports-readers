import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterModule } from '@angular/router';
import { MENU } from '../../shared/configs/menu.config';
import { IMenu } from '../../shared/interfaces/menu.interface';
import { TopBarComponent } from '../top-bar/top-bar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatTooltipModule,
    TopBarComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  public navLinks: IMenu[] = MENU;

  constructor(private readonly _route: Router) {}

  public routerAssets(item: string) {
    return `../../../assets/img/${item}.png`;
  }
}
