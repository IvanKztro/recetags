//Cada
import {
    AUTH_USUARIO, AUTH_USUARIO_EXITOSO, AUTH_USUARIO_ERROR, 
    LOGIN_LOADING, LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION
} from '../types/index'


const initialState= {
    token: null,
    autenticado: false,
    usuario: null,
    mensaje: null,
    cargando: false
}

export default function (state = initialState, action){

    switch(action.type)
    {
        case AUTH_USUARIO:
            return{
                ...state,
                cargando: action.payload,
            }
        case AUTH_USUARIO_EXITOSO:
            return{
                ...state,
                cargando: false,
                autenticado: true,
                usuario: action.payload
            }
        case AUTH_USUARIO_ERROR:
            return{
                ...state,
                cargando: false,
                autenticado: false,
                usuario: null,
                token: null
            }
        case LOGIN_LOADING:
            return{
                ...state,
                cargando: action.payload,
                mensaje: null
            }
        case LOGIN_EXITOSO:
            return{
                ...state,
                token: action.payload.password,
                autenticado: true,
                usuario: action.payload,
                cargando: false,
                mensaje: null
                
            }
        case LOGIN_ERROR:
            return{
                ...state,
                token: null,
                autenticado: false,
                usuario: null,
                cargando: false,
                mensaje: action.payload
                
            }

        case CERRAR_SESION:
            return{
                ...state,
                token: null,
                autenticado: false,
                usuario: null,
            }

        
        default:
            return state;
    }
}
