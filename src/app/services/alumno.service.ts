import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';

//este decorador identifica a esta clase como un servicio
//al arrancar angular, instancia un objeto de esta clase
//usa el patrón Singleton
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  /**
   * Esta clase encapsula la comunicación con el servidor
   * 
   * GET - OBTENER TODOS LOS ALUMNOS
   * GET/id- OBTENER UN ALUMNO EN CONCRETO
   * POST - PARA ENVIAR UN ALUMNO AL SERVIDOR Y DARLE DE ALTA
   * PUT - PARA MODIFICAR UN ALUMNO
   * DELETE/id - PARA ELIMINAR UN ALUMNO CONCRETO
   * 
   * 
   */
  constructor(private httpClient:HttpClient) {
    
   }

   //NOTA: Angular en sus comunicaciones HTTP presupone formato JSON
   //serializa(des) automáticamente en este formato

  leerTodosLosAlumnos (): Observable<Array<Alumno>> {
    //https://angular.dev/guide/http/making-requests#fetching-other-types-of-data
    return this.httpClient.get<Array<Alumno>>("https://my-json-server.typicode.com/valexx55/angularesjson/alumno");
   }


   borrarAlumno(id: number): Observable<void> {
    return this.httpClient.delete<void>(`https://my-json-server.typicode.com/valexx55/angularesjson/alumno/${id}`);
  }
}
