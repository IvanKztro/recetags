import {
    AUTH_USUARIO, AUTH_USUARIO_EXITOSO, AUTH_USUARIO_ERROR,
    LOGIN_LOADING, LOGIN_EXITOSO, LOGIN_ERROR} from '../types/index'

//import clienteAxios from '../config/axios';
import clienteAxios from 'axios';
import authToken from '../config/token'


export function authUsuarioAction(){
    return async(dispatch)=>{
        dispatch(validandoUsuario());

        try {
            const token = localStorage.getItem("tokenRecetas");
           
            // if(token)
            // {
            //     //Funcion para asignar el token en el Header
            //     console.log("Entroooo");
            //     //await authToken(token);
            // }
            const response = await clienteAxios.post("http://localhost:4000/api/auth/", {token});
            console.log(response.data.usuario);
            dispatch(validacionExitosa(response.data.usuario));
        } catch (error) {
            console.log(error.response.data.msg);
            dispatch(validacionError());
        }
    }
}

export function loginUsuarioAction (valores){
    return async(dispatch)=>{
        dispatch(logingUsuario());
        try {
           // console.log(valores);
            const response = await clienteAxios.post('http://localhost:4000/api/auth/login',valores);
            console.log(response.data);
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
