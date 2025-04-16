import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudesListComponent } from './pages/solicitudes-list/solicitudes-list.component';
import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [SolicitudesListComponent, HomeComponent],
  imports: [
    CommonModule,
    SolicitudesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class SolicitudesModule {}
