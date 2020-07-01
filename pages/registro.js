import React, {useEffect} from 'react'
import Layout from '../components/layout/Layout'
import Styled from '@emotion/styled'
import Router, {useRouter} from 'next/router'   
 
//ACTIONS DE REDUX
import {useDispatch, useSelector} from 'react-redux'

const Registro = () => {

    const FormDiv = Styled.div`
        background-color: black;
        color: white;
        opacity: .8;
        border-radius: 5px;
    `;
    let autenticadoRedux = useSelector(state => state.auth.autenticado);
    const router = useRouter();

    useEffect(() => {
        if(autenticadoRedux)
        {
            router.push('/');
        }
    
    }, [])
    return ( 
        <Layout>
        <div className="container d-flex justify-content-center">
            <FormDiv className=" col-12 col-lg-5 col-md-10  py-3 px-4 ">
                <form>
                    <div className="form-group">
                        <label htmlFor="">Nombre: </label>
                        <input type="text" className="form-control" placeholder="Ej: Pedro"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Apellidos: </label>
                        <input type="text" className="form-control" placeholder="Ej: Mendez"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Correo: </label>
                        <input type="text" className="form-control" placeholder="Ej: correo@gmail.com"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Contaseña: </label>
                        <input type="password" className="form-control" placeholder="Ej: ********"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Repetir contraseña: </label>
                        <input type="password" className="form-control" placeholder="Ej: ********"/>
                    </div>
                    <button className="btn btn-sm btn-success form-control">Registrarse</button>
                </form>
            </FormDiv>
        </div>
        </Layout>
     );
}
 
export default Registro;