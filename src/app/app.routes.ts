import { Routes } from '@angular/router';
import { DniComponent } from './components/dni/dni.component';
import { ImcComponent } from './components/imc/imc.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { ContratacionComponent } from './components/contratacion/contratacion.component';
import { JuegopptComponent } from './components/juegoppt/juegoppt.component';
import { FormularioAlumnoComponent } from './components/formulario-alumno/formulario-alumno.component';
import { Paso1Component } from './components/contratacion/paso1/paso1.component';
import { Paso2Component } from './components/contratacion/paso2/paso2.component';
import { Paso3Component } from './components/contratacion/paso3/paso3.component';

/*
En este array de rutas, asociamos ruta->Componente
y Angular, tirará de este array cuando tenga que 
navegar entre componentes/páginas
*/
export const routes: Routes = [
    {path:'dni', component:DniComponent},
    {path:'imc', component:ImcComponent},
    {path:'alumno', component:AlumnoComponent},
    {path:'juego', component:JuegopptComponent},
    {path:'alumno/form', component:FormularioAlumnoComponent},
    {path:'alumno/form/edit/:id', component:FormularioAlumnoComponent},
    {path:'contratacion', component:Paso1Component},
    {path:'paso-1', component:Paso1Component},
    {path:'paso-2', component:Paso2Component},
    {path:'paso-3', component:Paso3Component},
];
