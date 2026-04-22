import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { Observer } from 'rxjs';
import { Alumno } from '../../models/alumno';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-alumno',
  imports: [DatePipe],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent implements OnInit{

  title:string= 'LISTADO DE ALUMNOS';
  listaAlumnos:Array<Alumno>=[]  


  observerAlumnos:Observer<Array<Alumno>> = {
    //si 200
    next: (listaAlumnosRx: Alumno[]) => {
      console.log(`lista de alumos recibida con ${listaAlumnosRx.length}`);
      console.table(listaAlumnosRx);
      this.listaAlumnos = listaAlumnosRx;
    },
    //si 400 0 500
    error: (error) => console.error('Ha habido un error ' + error),
    //al acabar
    complete: () => console.log('comunicación completada')//lo quitas aquí
  }

  //inyección de dependencias
  constructor(private alumnoservice:AlumnoService)
  {

  }

  getFotoAlumno (id:number): string{

    let urlFoto = 'https://randomuser.me/api/portraits'
    if (id%2==0) {
      urlFoto = urlFoto+ '/women/'+id+'.jpg';

    } else {
      urlFoto = urlFoto+ '/men/'+id+'.jpg';
    }
    console.log(`urlFoto = ${urlFoto}`);
    return urlFoto;
    
  }

  ngOnInit(): void {
    //pediremos los datos de alumnos al servicio
    console.log('Antes de pedir');
    //cargas el spinner
    this.alumnoservice.leerTodosLosAlumnos().subscribe(this.observerAlumnos);
    console.log('Después de pedir');
  }



}
