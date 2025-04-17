import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Solicitud } from './solicitud.model';
import { HttpClient } from '@angular/common/http';
import { CreateSolicitud } from './create-solicitud.model';
import { Estado } from './estado.model';
import { UpdateSolicitud } from './update-solicitud.model';

@Injectable({
  providedIn: 'root',
})
export class SolicitudService {
  private readonly baseUrl: string = 'https://localhost:7187/api';

  constructor(private readonly _http: HttpClient) {}

  public getAllSolicitudes(): Observable<Solicitud[]> {
    return this._http.get<Solicitud[]>(`${this.baseUrl}/solicitud`);
  }

  createSolicitude(solicitud: CreateSolicitud): Observable<boolean> {
    return this._http
      .post<boolean>(`${this.baseUrl}/solicitud/crear-solicitud`, solicitud)
      .pipe(catchError((err) => of(err.error)));
  }

  updateSolicitude(
    id: string,
    solicitud: UpdateSolicitud
  ): Observable<boolean> {
    const url = new URL(`${this.baseUrl}/solicitud/actualizar-solicitud`);
    url.searchParams.append('id', id);
    var updateSolicitud: UpdateSolicitud = {
      idEstado: solicitud.idEstado,
      solicitante: solicitud.solicitante,
    };
    return this._http
      .put<boolean>(url.toString(), updateSolicitud)
      .pipe(catchError((err) => of(err.error)));
  }

  searchSolicitudes(search: string): Observable<Solicitud[]> {
    const url = new URL(`${this.baseUrl}/solicitud/busqueda`);
    url.searchParams.append('querySearch', search);
    return this._http.get<Solicitud[]>(url.toString());
  }

  getAllEstados(): Observable<Estado[]> {
    return this._http.get<Estado[]>(`${this.baseUrl}/estado`);
  }
}
