import { Component, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContratacionState } from '../contratacion.state';
import { marcarContratado } from '../contratacion.actions';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-paso3',
  imports: [AsyncPipe, NgIf],
  templateUrl: './paso3.component.html',
  styleUrl: './paso3.component.css',
})
export class Paso3Component {
  //los observables, por convención, llevan un $ al final,
  //e indican, que se actulizan automáticamente
  //que están transmitiendo los cambios en el Store
  contratacion$: Observable<ContratacionState>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.contratacion$ = this.store.select((estado) => estado.contratacion);
  }

  anterior() {
    this.router.navigateByUrl('/paso-2');
  }

  contratar() {
    this.store.dispatch(marcarContratado({ contratado: true }));
    //TODO: comunicar con el servidor y así insertar en bd la nueva contratación
  }

  cancelar() {
    this.store.dispatch(marcarContratado({ contratado: false }));
  }

  /**
   * f5 - refrsco
   * Antes de que se recargue la página, se muestra un aviso
   * para recordar al usuario, que en caso de proceder
   * se pierden los datos
   * @param event RECARGA
   */
  @HostListener('window:beforeunload', ['$event'])
  avisoRecarga(event: BeforeUnloadEvent) {
    event.preventDefault();
    //event.returnValue = '';
  }
}
