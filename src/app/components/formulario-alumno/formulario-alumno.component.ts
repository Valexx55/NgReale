import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Alumno } from '../../models/alumno';
import { AlumnoService } from '../../services/alumno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-formulario-alumno',
  imports: [FormsModule],
  templateUrl: './formulario-alumno.component.html',
  styleUrl: './formulario-alumno.component.css',
})
//se podría omitir el implements
// export class FormularioAlumnoComponent implements AfterViewInit /*, OnInit*/ {
export class FormularioAlumnoComponent implements AfterViewInit, OnInit {
  alumno!: Alumno;
  @ViewChild('formulario_alumno') formulario!: NgForm;

  enEdicion!: boolean;

  observerAlumno:Observer<Alumno> = {
      next: (alumnoRx) => {
        console.log('Alumno insertado ' + alumnoRx.nombre);
        alert('Alumno actualizado correctamente :)');
        //navegamos al listado
        this.router.navigateByUrl('/alumno');
      },
      //si 400 0 500
      error: (error) => console.error('Ha habido un error ' + error),
      //al acabar
      complete: () => console.log('comunicación completada'), //lo quitas aquí
    }

  //router2 = inject(Router); //forma moderna de inyectar con inject

  //Router: servicio que me permite gestionar la navegación de forma programática
  //ActivatedRoute: servicio que me permite obtener la ruta actual y cierta info contextual (paramétros y más cosas)

  ruta: ActivatedRoute = inject(ActivatedRoute);
  constructor(
    private alumnoService: AlumnoService,
    private router: Router,
  ) {
    this.alumno = new Alumno();
    //console.log(`Formulario válido ${this.formulario.valid}`);
  }

  ngOnInit(): void {
    //¿estoy editando o ha venido a crear?
    //accedo a la ruta actual y obtengo el parámetro :id - ver el app routes- :id
    let idEdicion = this.ruta.snapshot.paramMap.get('id');
    if (idEdicion)
    {
      this.enEdicion = true;
      //Leo de la memoria el alumno en edición
      this.alumno = this.alumnoService.alumnoEnEdicion;
    } else
    {
      this.enEdicion = false;
    }
    //this.enEdicion = !!idEdicion;
    console.log(`Estoy editando ? ${this.enEdicion}`);
    
  }

  //vendría a ser el onLoad() - cuando ya se ha cargado el HTML
  ngAfterViewInit(): void {
    console.log(`Formulario válido ${this.formulario.valid}`);
  }

  estiloBoton ():string{
    let estilo = '';

      if (this.enEdicion)
      {
        estilo = 'btn btn-success'; //botón verde si edito
      } else {
        estilo = 'btn btn-primary';//botón azúl si creo
      }

    return estilo;
  }

  crearAlumno(formulario: NgForm) {
    console.log(`tocó crear Alumno crearAlumno`);
    console.log(`Formulario válido ${formulario.valid}`);
    this.alumnoService.guardarAlumno(this.alumno).subscribe(this.observerAlumno);
  }

  editarAlumno()
  {
    console.log(`tocó crear Alumno editarAlumno`);
    this.alumnoService.actualizarAlumno(this.alumno).subscribe(this.observerAlumno);
  }
}
