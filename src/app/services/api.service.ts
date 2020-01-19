import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Freight } from '../Modelos/Freight';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
// API path
base_path = 'https://bestfreightsearch.com';

constructor(private http: HttpClient) {}
// Http Options
httpOptions = {
headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  Accept: 'application/json'
})
};

public createItem(item): Observable<Freight> {
  return this.http
    .post<Freight>(this.base_path + '/app.php', JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(0)
    );
}

public getList(): Observable<any> {
  return this.http
    .get<any>(this.base_path + '/all.php', this.httpOptions)
    .pipe(
      retry(0)
    );
}

public getListCountries(): Observable<any> {
  return this.http
    .get<any>(this.base_path + '/countries_bfs.php', this.httpOptions)
    .pipe(
      retry(0)
    );
}

public getListRegions(): Observable<any> {
  return this.http
    .get<any>(this.base_path + '/regions.php', this.httpOptions)
    .pipe(
      retry(0)
    );
}

public getListCountriesByRegion(): Observable<any> {
  return this.http
    .get<any>(this.base_path + '/countries.php', this.httpOptions)
    .pipe(
      retry(0)
    );
}
}
