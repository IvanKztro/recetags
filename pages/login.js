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

const Login = () => {

    // const usuario = useAutenticacion();
    // console.log(usuario);

    
    const [error, setError] = useState(false);

    const {valores, errores, submitForm, handleSubmit, handleChange} = useValidacion
    (STATE_INCIAL, validarLogin, setLogin);

    const {correo, password} = valores;

    async function setLogin (){
        
        try {
            
           //await firebase.login(email, password);
            const response = await clienteAxios.post('api/auth/login',valores);
            console.log(response.data);
            localStorage.setItem("tokenRecetas",response.data);
            Router.push("/");

            
        } catch (error) {
            console.log(error.message)
            setError(error.message);
        }

    }



    return ( 
        <Layout>
        <div className="container d-flex justify-content-center">
            <FormDiv className=" col-12 col-lg-5 col-md-10  py-3 px-4 ">
                <form onSubmit={handleSubmit}>
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
 
export default Login;