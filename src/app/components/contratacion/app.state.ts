//estado global de la app, donde puedo tener
//info sobre diferentes procesos o áreas de negocio

import { ContratacionState } from "./contratacion.state";

//contratación (nuestro caso), bajas, etc.
export interface AppState {
    //App State Toda la memoria
    contratacion: ContratacionState //cada app, puede tener varios "slices" / procesos diferentes, cada uno con su área de memoria
    
}