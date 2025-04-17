import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import {
  createSolicitud,
  createSolicitudSuccess,
  loadEstados,
  loadEstadosSuccess,
  loadSolicitudes,
  loadSolicitudesSuccess,
  searchSolicitudes,
  searchSolicitudesSuccess,
  updateSolicitud,
  updateSolicitudSuccess,
} from '../actions/solicitud.actions';
import { SolicitudService } from 'src/app/api/solicitud.service';
import { Solicitud } from 'src/app/api/solicitud.model';

@Injectable()
export class SolicitudEffects {
  loadSolicitudes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSolicitudes),
      switchMap(() =>
        this.solicitudService$
          .getAllSolicitudes()
          .pipe(map((solicitudes) => loadSolicitudesSuccess({ solicitudes })))
      )
    )
  );

  createSolicitud$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createSolicitud),
      switchMap((data) =>
        this.solicitudService$
          .createSolicitude(data.solicitud)
          .pipe(map((result) => createSolicitudSuccess({ result })))
      )
    )
  );

  updateSolicitud$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateSolicitud),
      switchMap((data) =>
        this.solicitudService$
          .updateSolicitude(data.id, data.solicitud)
          .pipe(map((result) => updateSolicitudSuccess({ result })))
      )
    )
  );

  loadEstados$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEstados),
      switchMap(() =>
        this.solicitudService$
          .getAllEstados()
          .pipe(map((estados) => loadEstadosSuccess({ estados })))
      )
    )
  );

  searchSolicitudes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchSolicitudes),
      switchMap((querySearch: any) =>
        this.solicitudService$
          .searchSolicitudes(querySearch.search)
          .pipe(
            map((solicitudes: Solicitud[]) =>
              searchSolicitudesSuccess({ solicitudes })
            )
          )
      )
    )
  );

  constructor(
    private solicitudService$: SolicitudService,
    private actions$: Actions
  ) {}
}
