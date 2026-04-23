import { Component } from '@angular/core';
import { DatosPersona } from '../contratacion.state';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { guardarPersona } from '../contratacion.actions';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paso1',
  imports: [FormsModule],
  templateUrl: './paso1.component.html',
  styleUrl: './paso1.component.css'
})
export class Paso1Component {

  persona:DatosPersona = {nombre: '', edad: null, sexo: ''};
  
  //Router: para navegar programáticamente
  //Store para acceder a Redux
  constructor(private router:Router, private store:Store)
  {

  }

  siguiente()
  {
    this.store.dispatch(guardarPersona({persona:this.persona}));
    this.router.navigateByUrl("/paso-2");
  }


}
