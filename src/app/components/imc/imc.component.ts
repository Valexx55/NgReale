import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Imc } from '../../models/imc';

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
  imports: [FormsModule],
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.css',
})
export class ImcComponent {
  titulo: string = 'CALCULO DEL IMC';
  peso: number = 0;
  altura: number = 0;
  //valores derivados
  numerico: number = 0;
  lectura: string = '';
  foto: string = '';

  mediaAltura: number = 0;
  mediaPeso: number = 0;

  //listaImcs!: Array<Imc>;// = new Array<Imc>();
  listaImcs: Array<Imc> = new Array<Imc>();
  //listaImcs:Imc[]= [];

  static readonly FOTO_DESNUTRIDO: string = '/desnutrido.jpg';
  static readonly FOTO_DELGADO: string = '/delgado.jpg';
  static readonly FOTO_IDEAL: string = '/ideal.jpg';
  static readonly FOTO_SOBREPESO: string = '/sobrepeso.jpg';
  static readonly FOTO_OBESO: string = '/obeso.jpg';

  calcularIMC() {
    console.log('calcular imc boton tocado');
    this.numerico = this.peso / (this.altura * this.altura);
    //casting de String a numero +
    this.numerico = +this.numerico.toFixed(2);
    //this.numerico = parseFloat(this.numerico.toFixed(2));
    if (this.numerico < 16) {
      //desnutrido
      this.lectura = 'DESNUTRIDO';
      this.foto = ImcComponent.FOTO_DESNUTRIDO;
    } else if (this.numerico >= 16 && this.numerico < 18) {
      //delgado
      this.lectura = 'DELGADO';
      this.foto = ImcComponent.FOTO_DELGADO;
    } else if (this.numerico >= 18 && this.numerico < 25) {
      //ideal
      this.lectura = 'IDEAL';
      this.foto = ImcComponent.FOTO_IDEAL;
    } else if (this.numerico >= 25 && this.numerico < 31) {
      //soberpeso
      this.lectura = 'SOBREPESO';
      this.foto = ImcComponent.FOTO_SOBREPESO;
    } else if (this.numerico >= 31) {
      //obeso
      this.lectura = 'OBESO'; //accedo al Enumerado como String
      this.foto = ImcComponent.FOTO_OBESO;
    }

    let imcNuevo: Imc = new Imc();
    imcNuevo.altura = this.altura;
    imcNuevo.peso = this.peso;
    imcNuevo.numerico = this.numerico;
    imcNuevo.lectura = this.lectura;
    imcNuevo.foto = this.foto;

    this.listaImcs.push(imcNuevo);

    this.mediaPeso = this.obtenerMediaPeso(this.listaImcs);
    this.mediaAltura = this.obtenerMediaAltura(this.listaImcs);


    //Sol Juan Diego OK!
    // let sumaAltura: number = 0;
    // let sumaPeso: number = 0;

    // //arrow funtions / funciones de flecha / funciones anónimas / expresión lambda
    // this.listaImcs.forEach((element: Imc) => {
    //   sumaAltura += element.altura;
    //   sumaPeso += element.peso;
    // });

    // this.mediaAltura = sumaAltura / this.listaImcs.length;
    // this.mediaPeso = sumaPeso / this.listaImcs.length;


    //Sol EDU Sánchez con reduce
  this.mediaPeso = this.listaImcs.reduce((sum, imc) => sum + imc.peso, 0) / this.listaImcs.length;
  this.mediaAltura = this.listaImcs.reduce((sum, imc) => sum + imc.altura, 0) / this.listaImcs.length;

    
  }

   obtenerMediaPeso(array_imcs: Array<Imc>): number {
    let media: number = 0;
    let total: number = 0;

      //sumo los valores - sumatorio /
      array_imcs.forEach((item_imc) => {
        total += item_imc.peso;
      });
      //divido entre el nº de elementos
      media = total / array_imcs.length;

    return media;
  }

    obtenerMediaAltura(array_imcs: Array<Imc>): number {
    let media: number = 0;
    let total: number = 0;

    //sumo los valores - sumatorio /
    array_imcs.forEach((item_imc) => {
      total += item_imc.altura;
    });
    //divido entre el nº de elementos
    media = total / array_imcs.length;

    return media;
  }

  getColorCategoria(lectura:string): string {
    let estilo = '';

      switch (lectura)
      {
        case 'DESNUTRIDO':
        case 'OBESO':
           estilo = "badge bg-danger";
          break;
        case 'SOBREPESO':
        case 'DELGADO':
           estilo = "badge bg-warning";
          break;
        default://IDEAL
          estilo = "badge bg-success";
      }
      


    return estilo;

  }

}
