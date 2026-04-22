export interface Alumno {
  
   id: number,
   nombre: string,
   apellido: string,
   email: string,
   edad: number,
   creadoEn:string

     //imporatante que coincidan los nombres de los atributos del JSON
    /*
    {
    "id": 12,
    "nombre": "Vinicius Pele",
    "apellido": "Jr O Rei",
    "email": "vini@correo.es",
    "edad": 20,
    "creadoEn": "2022-02-15T20:46:45.928+00:00",
    "fotoHashCode": null
  }
    */
}
