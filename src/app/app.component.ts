import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',//nombre de la etiqueta
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
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
