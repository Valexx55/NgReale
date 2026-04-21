export class Imc {

    peso:number;
    altura:number;
    numerico:number;
    lectura:string; //podríamos hacer un enumerado con este dato https://www.typescriptlang.org/docs/handbook/enums.html
    foto:string;

    constructor ()
    {
        this.peso = 0;
        this.altura = 0;
        this.numerico = 0;
        this.lectura = '';
        this.foto = '';
    }
    
}
