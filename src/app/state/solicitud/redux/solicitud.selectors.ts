import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SolicitudState } from './solicitud.reducer';

export const selectSolicitudState =
  createFeatureSelector<SolicitudState>('solicitud');

export const selectAllSolicitudes = createSelector(
  selectSolicitudState,
  (state) => state.solicitudes
);

export const selectAllEstados = createSelector(
  selectSolicitudState,
  (state) => state.estados
);

export const selectSelectedSolicitud = createSelector(
  selectSolicitudState,
  (state) => state.selectedSolicitud
);
