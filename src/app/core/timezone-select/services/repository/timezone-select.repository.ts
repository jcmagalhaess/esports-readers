import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TimezoneOutput } from '../entities/timezone.entity';

@Injectable({
  providedIn: 'root',
})
export class TimezoneSelectRepository {
  constructor(private readonly _http: HttpClient) {}

  getTimezoneList(): Observable<string[]> {
    return this._http.get<string[]>(
      'https://timeapi.io/api/TimeZone/AvailableTimeZones'
    );
  }

  getTimezoneByName(query: string): Observable<TimezoneOutput> {
    return this._http.get<TimezoneOutput>(
      `https://timeapi.io/api/TimeZone/zone?timeZone=${query.replace(
        /[+]/gi,
        '%2B'
      )}`
    );
  }
}
