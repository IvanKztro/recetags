import React from 'react';
import {AUTH_USUARIO_EXITOSO, AUTH_USUARIO_ERROR} from'../../types/index';

export default (state, action) =>{

    switch(action.type)
    {
        case AUTH_USUARIO_EXITOSO:
            return{
                ...state,
                autenticado: true,
                usuario: action.payload,
                mensaje: null
            }
        case AUTH_USUARIO_ERROR:
            return{
                state,
                autenticado: false,
                usuario: null,
                mensaje: "Usuario no autenticado, token no valido"
            }
        default: 
            return state
    }
}