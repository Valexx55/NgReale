import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { contratacionReducer } from './components/contratacion/contratacion.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(), //imprescindible importar el módulo HTTP para trabajar con conexiones remotas
    //iniciar Redux
    provideStore({
        contratacion: contratacionReducer //iniciando estado de Redux, y diciéndole quién el gestor de Eventos
      }),
    //para Redux en Desarrollo, ver la traza en el navegador
    provideStoreDevtools({
      maxAge: 25,//log de las últimas acciones, por defecto 50
      logOnly: !isDevMode()
    })

  ]
};


