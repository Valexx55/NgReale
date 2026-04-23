import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Alumno } from '../../models/alumno';
import { AlumnoService } from '../../services/alumno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-alumno',
  imports: [FormsModule],
  templateUrl: './formulario-alumno.component.html',
  styleUrl: './formulario-alumno.component.css'
})
export class FormularioAlumnoComponent implements AfterViewInit {

  alumno!:Alumno;
  @ViewChild('formulario_alumno') formulario!:NgForm;


  //router2 = inject(Router); //forma moderna de inyectar con inject

  //Router: servicio que me permite gestionar la navegación de forma programática
  constructor (private alumnoService:AlumnoService, private router:Router)
  {
    this.alumno = new Alumno();
    //console.log(`Formulario válido ${this.formulario.valid}`);
  }

  //vendría a ser el onLoad() - cuando ya se ha cargado el HTML
  ngAfterViewInit(): void {
    console.log(`Formulario válido ${this.formulario.valid}`);
  }
  
  crearAlumno(formulario: NgForm)
  {
    console.log(`tocó crear Alumno`);
    console.log(`Formulario válido ${formulario.valid}`);
    this.alumnoService.guardarAlumno(this.alumno).subscribe(
      {
        next: (alumnoRx) => {
          console.log('Alumno insertado '+ alumnoRx.nombre);
          alert('Alumno insertado correctamente :)');
          //navegamos al listado
          this.router.navigateByUrl("/alumno");

        },
      //si 400 0 500
      error: (error) => console.error('Ha habido un error ' + error),
      //al acabar
      complete: () => console.log('comunicación completada'), //lo quitas aquí
        }
    )
  
  }

}
