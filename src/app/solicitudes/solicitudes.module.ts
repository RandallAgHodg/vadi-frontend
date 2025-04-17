import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudesListComponent } from './pages/solicitudes-list/solicitudes-list.component';
import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { AddComponent } from './pages/add/add.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { DateToTextPipe } from '../shared/pipes/date-to-text.pipe';

@NgModule({
  declarations: [
    SolicitudesListComponent,
    HomeComponent,
    AddComponent,
    DateToTextPipe,
  ],
  imports: [
    CommonModule,
    SolicitudesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
})
export class SolicitudesModule {}
