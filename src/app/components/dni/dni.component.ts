import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

  @Component({
    selector: 'app-dni',
    imports: [FormsModule, /*NgIf, CommonModule*/],
    templateUrl: './dni.component.html',
    styleUrl: './dni.component.css'
  })
  export class DniComponent implements OnInit, OnDestroy, AfterViewInit {
    
    //! non-null operator
    titulo:string;// = 'CALCULE SU LETRA DEL DNI';
    //titulo= 'CALCULE SU LETRA DEL DNI';
    numero:number;
    letra:string;

    //es un atributo estático, porque está definido a nivel de clase: da igual el componente, que este atributo es el mismo siempre
    static readonly SECUENCIA_LETRAS_DNI:string = "TRWAGMYFPDXBNJZSQVHLCKE";


    constructor () {
      console.log('En Constructor DniComponent')
      this.titulo = 'CALCULE SU LETRA DEL DNI';
      this.numero= 0;
      this.letra= '';
    }
    
    ngAfterViewInit(): void {
    console.log('On AfterViewInit DniComponent');
    }

    ngOnInit(): void {
      console.log('On Init DniComponent');
    }


    ngOnDestroy(): void {
      console.log('On Destroy DniComponent')
    }

    calcularLetraDni() {
      console.log('Ha tocado el botón de cálculo');
      console.log(`Ha tocado el botón de cálculo el número es ${this.numero}`);
      //obtener el numero x 
      //el prefijo x
      //let para declarar varibles locales a una función
      let radioSeleccionado = <HTMLInputElement> document.querySelector('[name="prefijo"]:checked');
      console.log(`letra seleccionado = ${radioSeleccionado.value}`);
      //hacer el cálculo
      if (radioSeleccionado.value!='sin')
      {
        //caso extranejo
        let valorRadio:string = radioSeleccionado.value;
        let numeroAux:number = parseInt (valorRadio+this.numero);
        let resto:number = numeroAux%23;
        this.letra =  DniComponent.SECUENCIA_LETRAS_DNI.charAt(resto);
        console.log(`La letra es ${this.letra}`);


      } else {
        //caso nacional
        let resto:number = this.numero%23;
        console.log(`Resto =  ${resto}`);
        this.letra =  DniComponent.SECUENCIA_LETRAS_DNI.charAt(resto);
        console.log(`La letra es ${this.letra}`);
      }

    }
  }
