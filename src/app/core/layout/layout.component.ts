import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { MENU } from '../../shared/configs/menu.config';
import { IMenu } from '../../shared/interfaces/menu.interface';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatTooltipModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  public navLinks: IMenu[] = MENU;

  public routerAssets(item: string) {
    return `../../../assets/img/${item}.png`;
  }
}
