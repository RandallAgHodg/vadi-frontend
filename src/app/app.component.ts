import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Solicitud } from './api/solicitud.model';
import { selectAllSolicitudes } from './state/solicitud/redux/solicitud.selectors';
import { loadSolicitudes } from './state/solicitud/redux/actions/solicitud.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  solicitudes$: Observable<Solicitud[]>;

  constructor(private store: Store) {
    this.solicitudes$ = this.store.select(selectAllSolicitudes);
  }

  ngOnInit() {
    this.store.dispatch(loadSolicitudes());
  }
}
