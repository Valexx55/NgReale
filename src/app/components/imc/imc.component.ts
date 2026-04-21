import { Component } from '@angular/core';



/*

   * Haced una APP que calcule el Índice de Masa Corporal de una persona
   * la fórmula es la siguiente:
   * 
   *  IMC = peso (kg) / altura * altura(m)
   * 
   * si el imc < 16 - DESNUTRIDO
   * si el imc >=16 y < 18 - DELGADO
   * si el imc >=18 Y < 25 - IDEAL
   * si el imc >=25 y < 31 - SOBREPESO
   * si el imc >=31 - OBESO
   * 
   * hay que informar al usuario de su valor numérico
   * y de su valor nominal (categoría)
   * 
   * //opcional: buscad una foto/imagen/dibujo reprsentativo de cada
   * estado/resultado (delgado, etc) y ubicarla en la carpeta public
   * 
  */
@Component({
  selector: 'app-imc',
  imports: [],
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.css'
})
export class ImcComponent {

}
