import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SolicitudesListComponent } from './pages/solicitudes-list/solicitudes-list.component';
import { AddComponent } from './pages/add/add.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: SolicitudesListComponent },
      { path: 'add', component: AddComponent },
      { path: 'update/:id', component: AddComponent },
      { path: '**', redirectTo: 'list' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudesRoutingModule {}
