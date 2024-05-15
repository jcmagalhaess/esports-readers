import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize } from 'rxjs';
import { TimezoneOutput } from './entities/timezone.entity';
import { TimezoneSelectRepository } from './repository/timezone-select.repository';

@Injectable({
  providedIn: 'root',
})
export class TimezoneSelectService {
  public loadingList$ = new BehaviorSubject<boolean>(false);
  public loadingByName$ = new BehaviorSubject<boolean>(false);

  constructor(private readonly _repository: TimezoneSelectRepository) {}

  public getTimezoneList() {
    return new Promise<string[]>((resolve, reject) => {
      this.loadingList$.next(true);

      this._repository
        .getTimezoneList()
        .pipe(finalize(() => this.loadingList$.next(false)))
        .subscribe({
          next: (res) => resolve(res),
          error: (err) => reject(err),
        });
    });
  }

  public getTimezoneByName(zone: string) {
    return new Promise<TimezoneOutput>((resolve, reject) => {
      this.loadingByName$.next(true);
      this._repository
        .getTimezoneByName(zone)
        .pipe(finalize(() => this.loadingByName$.next(false)))
        .subscribe({
          next: (res) => resolve(res),
          error: (err) => reject(err),
        });
    });
  }
}
