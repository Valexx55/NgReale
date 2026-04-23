//las funciones dispardas por la cada acción
//el  evento son las acciones y el listener, la consecuencia de esas acciones
//son los reducer, que son las funciones, que realmente modifican el estado de la app

import { createReducer, on } from "@ngrx/store";
import { initialContratacionState } from "./contratacion.state";
import { guardarCoche, guardarPersona, marcarContratado } from "./contratacion.actions";

export const contratacionReducer = createReducer (
    initialContratacionState,
    on(guardarPersona, (state, {persona}) => ({...state, persona})),
    on(guardarCoche, (state, {coche}) => ({...state, coche})),
    on(marcarContratado, (state, {contratado}) => ({...state, contratado}))

);