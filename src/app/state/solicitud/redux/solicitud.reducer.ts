import { createReducer, on } from '@ngrx/store';
import * as SolicitudActions from './actions/solicitud.actions';
import { Solicitud } from '../../../api/solicitud.model';
import { Estado } from 'src/app/api/estado.model';

export interface SolicitudState {
  solicitudes: Solicitud[];
  estados: Estado[];
  selectedSolicitud: Solicitud | null;
  ok: boolean;
}

export const initialState: SolicitudState = {
  solicitudes: [],
  estados: [],
  selectedSolicitud: null,
  ok: true,
};

export const solicitudReducer = createReducer(
  initialState,
  on(SolicitudActions.loadSolicitudesSuccess, (state, { solicitudes }) => ({
    ...state,
    solicitudes,
  })),

  on(SolicitudActions.createSolicitudSuccess, (state, { result }) => ({
    ...state,
    ok: result,
  })),

  on(SolicitudActions.searchSolicitudesSuccess, (state, { solicitudes }) => ({
    ...state,
    solicitudes,
  })),

  on(SolicitudActions.loadEstadosSuccess, (state, { estados }) => ({
    ...state,
    estados,
  })),

  on(SolicitudActions.setSelectedSolicitud, (state, { solicitud }) => ({
    ...state,
    selectedSolicitud: solicitud,
  }))
);
