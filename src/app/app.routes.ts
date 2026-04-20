import { Routes } from '@angular/router';
import { DniComponent } from './components/dni/dni.component';

/*
En este array de rutas, asociamos ruta->Componente
y Angular, tirará de este array cuando tenga que 
navegar entre componentes/páginas
*/
export const routes: Routes = [
    {path:'dni', component:DniComponent}
];
