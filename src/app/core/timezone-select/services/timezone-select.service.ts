import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize } from 'rxjs';
import { TimezoneOutput } from './entities/timezone.entity';
import { TimezoneSelectRepository } from './repository/timezone-select.repository';

@Injectable({
  providedIn: 'root',
})
export class TimezoneSelectService {
  public loading$ = new BehaviorSubject<boolean>(false);

  constructor(private readonly _repository: TimezoneSelectRepository) {}

  public getTimezoneList() {
    return new Promise<string[]>((resolve, reject) => {
      this.loading$.next(true);

      this._repository
        .getTimezoneList()
        .pipe(finalize(() => this.loading$.next(false)))
        .subscribe({
          next: (res) => resolve(res),
          error: (err) => reject(err),
        });
    });
  }

  public getTimezoneByName(zone: string) {
    return new Promise<TimezoneOutput>((resolve, reject) => {
      this.loading$.next(true);
      this._repository
        .getTimezoneByName(zone)
        .pipe(finalize(() => this.loading$.next(false)))
        .subscribe({
          next: (res) => resolve(res),
          error: (err) => reject(err),
        });
    });
  }
}
