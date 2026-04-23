import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DatosCoche } from '../contratacion.state';
import { guardarCoche } from '../contratacion.actions';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paso2',
  imports: [FormsModule],
  templateUrl: './paso2.component.html',
  styleUrl: './paso2.component.css'
})
export class Paso2Component {


  coche: DatosCoche = { matricula: '', modelo: '' };
   //Router: para navegar programáticamente
  //Store para acceder a Redux
  constructor(private router:Router, private store:Store)
  {

  }

   anterior() {
    this.router.navigateByUrl('/paso-1');
  }

  siguiente() {
    this.store.dispatch(guardarCoche({ coche: this.coche }));
    this.router.navigateByUrl('/paso-3');
  }
}
