//definimos las acciones/eventos que puede modificar el estado
import { DatosCoche, DatosPersona } from './contratacion.state';
import { createAction, props } from '@ngrx/store';

export const guardarPersona = createAction(
    '[Paso 1] Guardar Persona', 
    props<{persona:DatosPersona}>()
)

export const guardarCoche = createAction(
    '[Paso 2] Guardar Coche', 
    props<{coche:DatosCoche}>()
)

export const marcarContratado = createAction(
    '[Paso 3] Marcar contratado', 
    props<{contratado:boolean}>()
)