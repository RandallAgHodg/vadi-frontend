import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Solicitud } from './solicitud.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SolicitudService {
  private readonly baseUrl: string = 'https://localhost:7187/api/solicitud';

  constructor(private readonly _http: HttpClient) {}

  public getAllSolicitudes(): Observable<Solicitud[]> {
    return this._http.get<Solicitud[]>(this.baseUrl);
  }
}
