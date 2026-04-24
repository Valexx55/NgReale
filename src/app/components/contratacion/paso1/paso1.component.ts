import { Component, OnInit } from '@angular/core';
import { DatosPersona } from '../contratacion.state';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { guardarPersona } from '../contratacion.actions';
import { FormsModule } from '@angular/forms';
import { AppState } from '../app.state';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-paso1',
  imports: [FormsModule],
  templateUrl: './paso1.component.html',
  styleUrl: './paso1.component.css'
})
export class Paso1Component implements OnInit {

  persona:DatosPersona = {nombre: '', edad: null, sexo: ''};
  
  //Router: para navegar programáticamente
  //Store para acceder a Redux
  constructor(private router:Router, private store: Store<AppState>)
  {
      
  }
  
  async ngOnInit(): Promise<void> {
      let datosPersonaGuardados = await firstValueFrom  (this.store.select(estado=>estado.contratacion.persona));
      this.persona = {...datosPersonaGuardados}
  }

  siguiente()
  {
    //LANZO LA ACCCIÓN
    this.store.dispatch(guardarPersona({persona:this.persona}));
    this.router.navigateByUrl("/paso-2");
  }


}
