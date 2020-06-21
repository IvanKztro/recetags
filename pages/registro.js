import React from 'react'
import Layout from '../components/layout/Layout'
import Styled from '@emotion/styled'

const Registro = () => {

    const FormDiv = Styled.div`
        background-color: black;
        color: white;
        opacity: .8;
        border-radius: 25px;
    `;
    return ( 
        <Layout>
        <div className="container d-flex justify-content-center">
            <FormDiv className=" col-12 col-lg-5 col-md-10  py-3 px-4 ">
                <form>
                    <div className="form-group">
                        <label htmlFor="">Nombre: </label>
                        <input type="text" className="form-control" placerholder="Ej: Pedro"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Apellidos: </label>
                        <input type="text" className="form-control" placerholder="Ej: Mendez"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Correo: </label>
                        <input type="text" className="form-control" placerholder="Ej: correo@gmail.com"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Contaseña: </label>
                        <input type="password" className="form-control" placerholder="Ej: ********"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Repetir contraseña: </label>
                        <input type="password" className="form-control" placerholder="Ej: ********"/>
                    </div>
                    <button className="btn btn-sm btn-success form-control">Registrarse</button>
                </form>
            </FormDiv>
        </div>
        </Layout>
     );
}
 
export default Registro;