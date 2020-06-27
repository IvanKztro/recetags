import React, {useState} from 'react'
import Layout from '../components/layout/Layout'
import Error from '../components/Error'
import Styled from '@emotion/styled'

import useValidacion from '../hooks/useValidacion';
import validarLogin from '../validacion/validarLogin'

import Router from 'next/router'
import clienteAxios from '../config/axios';
//import clienteAxios from 'axios';
import tokenAuth from '../config/token'

import useAutenticacion from '../hooks/useAutenticacion';
import {useDispatch, useSelector} from 'react-redux'
 //ACTIONS DE REDUX
 import {loginUsuarioAction} from '../actions/authActions'

const STATE_INCIAL = {
    correo: '',
    password: ''
}
const FormDiv = Styled.div`
        background-color: black;
        color: white;
        opacity: .8;
        border-radius: 25px;
    `;

const fetchData = async () => {
    try {
        const token = localStorage.getItem("tokenRecetas");
        console.log(token)
        // if(token)
        // {
        //     //Funcion para asignar el token en el Header
        //     console.log("Entroooo");
        //     //await authToken(token);
        // }
        const response = await clienteAxios.post("http://localhost:4000/api/auth/", {token});
        console.log(response.data.usuario);
        return { auth: response }
    } catch (error) {
        // console.log(error.response.data.msg);
        // return { auth: error.response.data.msg }
    }
}

const Login = () => {

    // const usuario = useAutenticacion();
    // console.log(usuario);
   
    
    const [error, setError] = useState(false);

    const {valores, errores, submitForm, handleSubmit, handleChange} = useValidacion
    (STATE_INCIAL, validarLogin, setLogin);

    const {correo, password} = valores;

    const dispatch = useDispatch();
    const logearUsuario = () => dispatch(loginUsuarioAction(valores));

    const mensaje = useSelector(state => state.auth.mensaje);
    console.log(mensaje);


    function setLogin(){
        logearUsuario();
    }

    // async function setLogin (){
        
    //     try {
            
    //        //await firebase.login(email, password);
    //         const response = await clienteAxios.post('api/auth/login',valores);
    //         console.log(response.data);
    //         localStorage.setItem("tokenRecetas",response.data);
    //         Router.push("/");

            
    //     } catch (error) {
    //         console.log(error.message)
    //         setError(error.message);
    //     }

    // }

    return ( 
        <Layout>
        <div className="container d-flex justify-content-center">
            <FormDiv className=" col-12 col-lg-5 col-md-10  py-3 px-4 ">
                <form onSubmit={handleSubmit}>
                    {mensaje
                    ? <p className="alert alert-danger text-center">{mensaje}</p> : null}
                    <div className="form-group">
                        <label htmlFor="">Correo: </label>
                        <input type="text" className="form-control" placerholder="Ej: correo@gmail.com"
                            name="correo" 
                            value={correo}
                            onChange={handleChange} 
                             
                        />
                        {
                            errores.correo 
                            ?<Error error={errores.correo}/> : null
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Contaseña: </label>
                        <input type="password" className="form-control" placerholder="Ej: ********"
                            name="password"  
                            value={password}
                            onChange={handleChange}
                        />
                        {
                            errores.password 
                            ?<Error error={errores.password}/> : null
                        }
                    </div>
                    <button className="btn btn-sm btn-success form-control">Iniciar Sesión</button>
                </form>
            </FormDiv>
        </div>
        </Layout>
     );
}



// Login.getInitialProps = async (ctx) => {
   
//     // const res = await fetch('https://api.github.com/repos/vercel/next.js')
//     // const json = await res.json()
//     // return { auth: json.stargazers_count }
//   }
 
export default Login;