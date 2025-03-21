import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TimezoneSelectService } from '../services/timezone-select.service';


@Component({
    selector: 'app-timezone-select',
    imports: [
      CommonModule,
      MatFormFieldModule,
      MatSelectModule,
      ReactiveFormsModule,
      MatTooltipModule,
      MatProgressSpinnerModule
    ],
    standalone: true,
    templateUrl: './timezone-select.component.html',
    styleUrl: './timezone-select.component.scss'
})
export class TimezoneSelectComponent implements OnInit {
  public timezone = new FormControl<string>('America/Fortaleza');
  public timezoneFilter = new FormControl<string>('');
  public timezoneList: string[] = [];

  public currentLocalTime = new Date();

  get loadingList$() {
    return this._service.loadingList$;
  }

  get loadingByName$() {
    return this._service.loadingByName$;
  }

  constructor(private readonly _service: TimezoneSelectService) {}

  public ngOnInit(): void {
    this._service.getTimezoneList().then((res) => (this.timezoneList = res));

    this.timezone.valueChanges.subscribe((res) => {
      if (res)
        this._service.getTimezoneByName(res).then((res) => {
          this.currentLocalTime = new Date(res.currentLocalTime);
        });
    });
  }

  public formatedLabel(label: string | null) {
    if (!label) return '';

    return label.replace('_', ' ');
  }
}
