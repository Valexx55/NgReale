import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DatosCoche } from '../contratacion.state';
import { guardarCoche } from '../contratacion.actions';
import { FormsModule } from '@angular/forms';
import { AppState } from '../app.state';
import { firstValueFrom, Observable } from 'rxjs';

@Component({
  selector: 'app-paso2',
  imports: [FormsModule],
  templateUrl: './paso2.component.html',
  styleUrl: './paso2.component.css'
})
export class Paso2Component implements OnInit {


  coche: DatosCoche = { matricula: '', modelo: '' };
   //Router: para navegar programáticamente
  //Store para acceder a Redux
   constructor(private router:Router, private store: Store<AppState>)
  {
    
  }
  
  
  async ngOnInit() {

    let datoCocheGuardado = await firstValueFrom( this.store.select(estado=> estado.contratacion.coche))
    this.coche = {...datoCocheGuardado} //Importante una nueva referencia, si no, no deja leer y actualizar con ngModel después. No puedo modificar un valor del Store directamente
    //this.coche = datoCocheGuardado //Importante una nueva referencia, si no, no deja leer y actualizar con ngModel después
  }

  

   anterior() {
    this.router.navigateByUrl('/paso-1');
  }


  siguiente() {
    this.store.dispatch(guardarCoche({ coche: this.coche }));
    this.router.navigateByUrl('/paso-3');
  }
}
