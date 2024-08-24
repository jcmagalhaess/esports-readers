import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TimezoneOutput } from '../entities/timezone.entity';

@Injectable({
  providedIn: 'root',
})
export class TimezoneSelectRepository {
  private readonly _http = inject(HttpClient);

  public getTimezoneList(): Observable<string[]> {
    return this._http.get<string[]>(
      'https://timeapi.io/api/TimeZone/AvailableTimeZones'
    );
  }

  public getTimezoneByName(query: string): Observable<TimezoneOutput> {
    let params = {
      timeZone: query,
    }
    return this._http.get<TimezoneOutput>(
      `https://timeapi.io/api/TimeZone/zone?${ new URLSearchParams(params) }`
    );
  }
}
