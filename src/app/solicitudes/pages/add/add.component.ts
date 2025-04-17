import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { Estado } from 'src/app/api/estado.model';
import {
  createSolicitud,
  createSolicitudSuccess,
  loadEstados,
  updateSolicitud,
  updateSolicitudSuccess,
} from 'src/app/state/solicitud/redux/actions/solicitud.actions';
import {
  selectAllEstados,
  selectSelectedSolicitud,
} from 'src/app/state/solicitud/redux/solicitud.selectors';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  solicitudForm!: FormGroup;
  id: string | null = null;
  estados$: Observable<Estado[]>;

  get title(): string {
    return this.id ? 'Editar Solicitud de Credito' : 'Solicitud de Credito';
  }

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _router: Router,
    private readonly _activatedRoutes: ActivatedRoute,
    private readonly store: Store,
    private readonly _actions$: Actions
  ) {
    this.estados$ = this.store.select(selectAllEstados);
  }

  ngOnInit(): void {
    this.store.dispatch(loadEstados());
    this.solicitudForm = this._formBuilder.group({
      solicitante: ['', [Validators.required]],
      idEstado: ['', [Validators.required]], // always prepare the control
    });

    this._activatedRoutes.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });

    this.store
      .select(selectSelectedSolicitud)
      .pipe(take(1))
      .subscribe((solicitud) => {
        if (solicitud) {
          this.id = solicitud.id.toString();
          this.solicitudForm.patchValue({
            solicitante: solicitud.solicitante,
          });

          this.estados$.pipe(take(1)).subscribe((estados) => {
            const match = estados.find((e) => e.estado === solicitud.estado);
            if (match) {
              this.solicitudForm.patchValue({
                idEstado: match.idEstado,
              });
            }
          });
        } else {
          // If no solicitud, clear idEstado when creating new
          if (!this.id) {
            this.solicitudForm.get('idEstado')?.clearValidators();
            this.solicitudForm.get('idEstado')?.updateValueAndValidity();
          }
        }
      });
  }

  onSubmit(): void {
    if (this.solicitudForm.valid) {
      if (this.id) {
        this.store.dispatch(
          updateSolicitud({
            id: this.id,
            solicitud: this.solicitudForm.value,
          })
        );

        this._actions$
          .pipe(ofType(updateSolicitudSuccess), take(1))
          .subscribe(() => {
            this._router.navigate(['/solicitudes/list']);
          });
      } else {
        this.store.dispatch(
          createSolicitud({
            solicitud: this.solicitudForm.value,
          })
        );

        this._actions$
          .pipe(ofType(createSolicitudSuccess), take(1))
          .subscribe(() => {
            this._router.navigate(['/solicitudes/list']);
          });
      }
    } else {
      this.solicitudForm.markAllAsTouched();
    }
  }

  isUnvalidField(name: string): boolean | null {
    return (
      this.solicitudForm.controls[name].errors &&
      this.solicitudForm.controls[name].touched
    );
  }
}
