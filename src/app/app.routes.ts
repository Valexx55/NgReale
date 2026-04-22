import { Routes } from '@angular/router';
import { DniComponent } from './components/dni/dni.component';
import { ImcComponent } from './components/imc/imc.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { ContratacionComponent } from './components/contratacion/contratacion.component';
import { JuegopptComponent } from './components/juegoppt/juegoppt.component';
import { FormularioAlumnoComponent } from './components/formulario-alumno/formulario-alumno.component';

/*
En este array de rutas, asociamos ruta->Componente
y Angular, tirará de este array cuando tenga que 
navegar entre componentes/páginas
*/
export const routes: Routes = [
    {path:'dni', component:DniComponent},
    {path:'imc', component:ImcComponent},
    {path:'alumno', component:AlumnoComponent},
    {path:'contratacion', component:ContratacionComponent},
    {path:'juego', component:JuegopptComponent},
    {path:'alumno/form', component:FormularioAlumnoComponent},
];
