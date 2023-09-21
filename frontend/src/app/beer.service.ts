import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beer } from './model/beer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${this.apiServerUrl}/beer/all`);
  }

  public addBeer(beer: Beer): Observable<Beer> {
    return this.http.post<Beer>(`${this.apiServerUrl}/beer/add`, beer);
  }

  public updateBeer(beer: Beer): Observable<Beer> {
    return this.http.put<Beer>(`${this.apiServerUrl}/beer/update`, beer);
  }

  public deleteBeer(beerId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/beer/delete/${beerId}`);
  }
}
