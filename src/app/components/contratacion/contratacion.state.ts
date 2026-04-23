export interface DatosPersona {
    nombre:string;
    edad:number|null; //UNIÓN TYPE
    sexo: 'H' | 'M' | 'X' | '';

}

export interface DatosCoche {
    matricula:string;
    modelo:string; 
    
}

export interface ContratacionState {
    persona:DatosPersona;
    coche:DatosCoche;
    contratado:boolean;
}

//estado Inicial
export const initialContratacionState: ContratacionState = {
    persona: {nombre: '', edad: null, sexo: ''},
    coche: {matricula:'', modelo:''},
    contratado:false
}