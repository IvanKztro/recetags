import React, {useReducer} from 'react';

import AuthContext from './authContext'
import AuthReduce from './authReducer'


import {AUTH_USUARIO_ERROR, AUTH_USUARIO_EXITOSO} from '../../types/index';


const AuthState = (props) => {

    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: false,
        usuario: null,
        mensaje: null
    }

    const [state, dispatch] = useReducer(AuthReduce, initialState);


    //FUNCIONES
    const autenticarUsuario = async () => {
        const token = localStorage.getItem("tokenRecetas");
        // console.log("token auth: ",token);
        if(token)
        {
            //Funcion para asignar el token en el Header
            tokenAuth(token);
        }

        try {
            const response = await clienteAxios.get("http://localhost:4000/api/auth/");
            console.log(response.data);
            dispatch({
                type: AUTH_USUARIO_EXITOSO,
                payload: response.data.usuario

            })
            
        } catch (error) {
            console.log("token auth ERROR");
            console.log(error);
            dispatch({
                type: AUTH_USUARIO_ERROR
            })
        }
    }



    return (  
        <AuthContext.Provider
        value={{
            usuario: state.usuario,
            token: state.token,
            autenticado: state.autenticado,
            mensaje: state.mensaje,

            autenticarUsuario
        }}>
            {props.children}
        </AuthContext.Provider>
    );
}
 
export default AuthState;