import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map } from 'rxjs';
import { MENU_AUX } from '../../shared/configs/menu.config';
import { IMenu } from '../../shared/interfaces/menu.interface';
import { TimezoneSelectComponent } from '../timezone-select/containers/timezone-select.component';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TimezoneSelectComponent,
    MatButtonModule,
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent implements AfterViewInit {
  public navLinks: IMenu[] = MENU_AUX;
  public parentPath: string = '';

  constructor(public readonly activatedRoute: ActivatedRoute) {
  }

  public ngAfterViewInit(): void {
    this.activatedRoute.parent?.url
      .pipe(map((parentPath) => parentPath[parentPath.length - 1].path))
      .subscribe((path) => {
        this.navLinks = this.navLinks.map(res => ({ ...res, route: path + res.route}))
        this.parentPath = path;
        console.log(path, this.parentPath);

      });

      console.log('tes', this.activatedRoute);

  }

  public routerAssets() {
    return `../../../assets/img/sportsbet-io-logo.png`;
  }
}
