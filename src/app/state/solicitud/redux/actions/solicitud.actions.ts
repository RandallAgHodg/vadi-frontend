import { createAction, props } from '@ngrx/store';
import { Solicitud } from '../../../../api/solicitud.model';
import { CreateSolicitud } from 'src/app/api/create-solicitud.model';
import { Estado } from 'src/app/api/estado.model';
import { UpdateSolicitud } from 'src/app/api/update-solicitud.model';

export const loadSolicitudes = createAction('[Solicitud] Load Solicitudes');
export const loadEstados = createAction('[Solicitud] Load Estados');

export const searchSolicitudes = createAction(
  '[Solicitud] Search Solicitudes',
  props<{ search: string }>()
);

export const setSelectedSolicitud = createAction(
  '[Solicitud] Set Selected Solicitud',
  props<{ solicitud: Solicitud | null }>()
);

export const searchSolicitudesSuccess = createAction(
  '[Solicitud] Search Solicitudes Success',
  props<{ solicitudes: Solicitud[] }>()
);

export const loadSolicitudesSuccess = createAction(
  '[Solicitud] Load Solicitudes Success',
  props<{ solicitudes: Solicitud[] }>()
);
export const loadEstadosSuccess = createAction(
  '[Solicitud] Load Estados Success',
  props<{ estados: Estado[] }>()
);

export const createSolicitud = createAction(
  '[Solicitud] Create Solicitud',
  props<{ solicitud: CreateSolicitud }>()
);

export const createSolicitudSuccess = createAction(
  '[Solicitud] Create Estado Success',
  props<{ result: boolean }>()
);

export const updateSolicitud = createAction(
  '[Solicitud] Update Solicitud',
  props<{ id: string; solicitud: UpdateSolicitud }>()
);

export const updateSolicitudSuccess = createAction(
  '[Solicitud] Update Solicitud Success',
  props<{ result: boolean }>()
);
