import { Component, inject, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { Observer } from 'rxjs';
import { Alumno } from '../../models/alumno';
import { DatePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import {NgIcon, provideIcons } from '@ng-icons/core'
import { heroTrashSolid } from '@ng-icons/heroicons/solid';
import { bootstrapPenFill } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-alumno',
  imports: [DatePipe, RouterLink, NgIcon],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css',
  providers: [
    provideIcons({
      heroTrashSolid,
      bootstrapPenFill
    })
  ]
})
export class AlumnoComponent implements OnInit {
  title: string = 'LISTADO DE ALUMNOS';
  listaAlumnos: Array<Alumno> = [];
  router:Router = inject(Router); //inyección "moderna" no va en el constructor

  observerAlumnos: Observer<Array<Alumno>> = {
    //si 200
    next: (listaAlumnosRx: Alumno[]) => {
      console.log(`lista de alumos recibida con ${listaAlumnosRx.length}`);
      console.table(listaAlumnosRx);
      this.listaAlumnos = listaAlumnosRx;
    },
    //si 400 0 500
    error: (error) => console.error('Ha habido un error ' + error),
    //al acabar
    complete: () => console.log('comunicación completada'), //lo quitas aquí
  };

  //inyección de dependencias
  constructor(private alumnoservice: AlumnoService) {}

  getFotoAlumno(id: number): string {
    let urlFoto = 'https://randomuser.me/api/portraits';
    if (id % 2 == 0) {
      urlFoto = urlFoto + '/women/' + id + '.jpg';
    } else {
      urlFoto = urlFoto + '/men/' + id + '.jpg';
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

  borrarAlumno(id: number): void {
    console.log(`a Borrar alumno ${id}`);

    if (confirm(`¿Deseas borrar el alumno ${id}?`)) {
      this.alumnoservice.borrarAlumno(id).subscribe({
        next: () => {
          console.log(`Alumno con ID ${id} borrado correctamente`);
          // Actualizar la lista de alumnos en el componente
          this.listaAlumnos = this.listaAlumnos.filter(
            (alumno) => alumno.id !== id,
          );
        },
        //si 400 0 500
        error: (error) => {
          console.error('Ha habido un error ' + error);
          window.alert('Ha habido un error al borrar');
        },
        //al acabar
        complete: () => console.log('comunicación completada'), //lo quitas aquí
      });
    }
  }

  editarAlumno(alumno: Alumno): void {
    console.log(`a Editar alumno ${alumno.id}`);
    //usamos el servicio como memoria temporal para almacenar el alumno a editar
    //"escribimos"
    this.alumnoservice.alumnoEnEdicion = alumno;
    //navegar al componente del fomrualrio
    this.router.navigate(['/alumno/form/edit', alumno.id]);
  }
}
