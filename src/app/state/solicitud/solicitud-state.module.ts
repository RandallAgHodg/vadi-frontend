import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { solicitudReducer } from './redux/solicitud.reducer';
import { SolicitudEffects } from './redux/effects/solicitud.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('solicitud', solicitudReducer),
    EffectsModule.forFeature([SolicitudEffects]),
  ],
})
export class SolicitudModule {}
