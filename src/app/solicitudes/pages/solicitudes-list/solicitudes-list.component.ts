import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Solicitud } from 'src/app/api/solicitud.model';
import {
  loadSolicitudes,
  searchSolicitudes,
  setSelectedSolicitud,
} from 'src/app/state/solicitud/redux/actions/solicitud.actions';
import { selectAllSolicitudes } from 'src/app/state/solicitud/redux/solicitud.selectors';

@Component({
  selector: 'app-solicitudes-list',
  templateUrl: './solicitudes-list.component.html',
  styleUrls: ['./solicitudes-list.component.scss'],
})
export class SolicitudesListComponent {
  solicitudes$: Observable<Solicitud[]>;
  searchForm!: FormGroup;

  constructor(
    private store: Store,
    private readonly _formBuilder: FormBuilder,
    private readonly _router: Router
  ) {
    this.solicitudes$ = this.store.select(selectAllSolicitudes);

    this.searchForm = this._formBuilder.group({
      solicitante: [''],
    });
  }

  ngOnInit() {
    this.store.dispatch(loadSolicitudes());
  }

  onSearch(): void {
    if (this.searchForm.value.solicitante === '') {
      this.store.dispatch(loadSolicitudes());
      return;
    }
    if (this.searchForm.valid) {
      const searchValue = this.searchForm.value.solicitante.trim();
      this.store.dispatch(searchSolicitudes({ search: searchValue }));
    } else {
      this.searchForm.markAllAsTouched();
    }
  }

  goToUpdate(solicitud: Solicitud): void {
    this.store.dispatch(setSelectedSolicitud({ solicitud }));
    this._router.navigate(['/solicitudes/update', solicitud.id]);
  }
}
