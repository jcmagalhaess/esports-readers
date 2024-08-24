import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterModule } from '@angular/router';
import { MENU, routeMFESignal } from '../../shared/configs/menu.config';
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
export class LayoutComponent implements AfterViewInit {
  private readonly _route = inject(Router);

  public navLinks: IMenu[] = MENU;

  public ngAfterViewInit(): void {
    const parentPath = this._route.getCurrentNavigation()?.initialUrl?.root?.children['primary']?.segments[0].path;

    console.log(parentPath);

    routeMFESignal.set(parentPath ?? '');
  }

  public routerAssets(item: string) {
    return `../../../assets/img${item}.png`;
  }

  public getRouteRoot(route: string) {
    this._route.navigateByUrl(route)
    console.log(route);

    routeMFESignal.set(route);
  }
}
