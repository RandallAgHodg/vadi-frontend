import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setSelectedSolicitud } from 'src/app/state/solicitud/redux/actions/solicitud.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private store: Store) {}

  onCreate() {
    this.store.dispatch(setSelectedSolicitud({ solicitud: null }));
  }
}
