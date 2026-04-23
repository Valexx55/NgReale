import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormularioAlumnoComponent } from './components/formulario-alumno/formulario-alumno.component';

@Component({
  selector: 'app-root',//nombre de la etiqueta
  imports: [RouterOutlet, RouterLink, RouterLinkActive /*, FormularioAlumnoComponent*/],//STANDALONE
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true //por defecto: esta clase es independiente, no pertenece a ningún módulo
})
export class AppComponent {
  /**
   *aquí es donde está el JS
   la parte dinámica
   *
   */

   //atributos
  title = 'appRealeAngular';
  saludo = 'hola';

  //métodos / funciones
  constructor()
  {
    console.log('En el constructor de AppComponent');
  }
}
