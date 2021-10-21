import {
    AUTH_USUARIO, AUTH_USUARIO_EXITOSO, AUTH_USUARIO_ERROR,
    LOGIN_LOADING, LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION
} from '../types/index'

//import clienteAxios from '../config/axios';
//import clienteAxios from 'axios';
import authToken from '../config/token'
import clienteAxios from '../config/axios'



export function authUsuarioAction(){
    return async(dispatch)=>{
        dispatch(validandoUsuario());
       // console.log(clienteAxios.baseURL)

        try {
            const token = localStorage.getItem("tokenRecetas");
           console.log(token);
            // if(token)
            // {
            //     //Funcion para asignar el token en el Header
            //     console.log("Entroooo");
            //     //await authToken(token);
            // }
            clienteAxios.defaults.headers.common['x-auth-token'] = token;
            //console.log("token en actions")
            //console.log(clienteAxios.defaults.headers.common['x-auth-token']);
            const response = await clienteAxios.get("api/auth/");
           // console.log(response.data.usuario);
            dispatch(validacionExitosa(response.data.usuario));
        } catch (error) {
            //console.log(error.response.data.msg);
            dispatch(validacionError());
        }
    }
}

export function loginUsuarioAction (valores){
    return async(dispatch)=>{
        dispatch(logingUsuario());
        try {
           // console.log(valores);
            const response = await clienteAxios.post('api/auth/login',valores);
            //console.log(response.data);
            dispatch(loginExitoso(response.data));
            localStorage.setItem("tokenRecetas",response.data.password);
            //Router.push("/");
            
        } catch (error) {
            dispatch(loginError(error.response.data.msg));
            console.log(error.response.data.msg)
        }
    }
}

const validandoUsuario = ()=>({
    type: AUTH_USUARIO,
    payload: true
})
const validacionExitosa = (usuario) =>({
    type: AUTH_USUARIO_EXITOSO,
    payload: usuario
})
const validacionError = ()=> ({
    type: AUTH_USUARIO_ERROR
})

const logingUsuario = ()=>({
    type: LOGIN_LOADING,
    payload: true
})

const loginExitoso = (usuario) =>({
    type: LOGIN_EXITOSO,
    payload: usuario
})

const loginError = (msg) => ({
    type: LOGIN_ERROR,
    payload: msg
})

export function cerrarSesionAction() {

    return (dispatch) => {
        localStorage.setItem("tokenRecetas","");
        dispatch(cerrarSesionReducer());
    }
}

const cerrarSesionReducer = () => ({
    type: CERRAR_SESION,
    
})