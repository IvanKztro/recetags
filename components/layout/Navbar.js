import React, {useState, useEffect, useContext} from 'react';
import Link from 'next/link';
import styled from '@emotion/styled'
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token'

//Componente navbar search
import NavbarSearch from './NavbarSearch'

// import useAutenticacion from '../../hooks/useAutenticacion';
import AuthContext from '../../context/auth/authContext'
//import clienteAxios from 'axios';
import {authUsuarioAction} from '../../actions/authActions';
import {useDispatch, useSelector} from 'react-redux';



const NavBar = styled.nav`
    background-color: rgb(53, 47, 47);

    a{
        color: white;
    }
    .navbar-dark .navbar-toggler-icon{
        color: black;
    }
`;


const Navbar = ({auth}) => {
   
   const dispatch = useDispatch();
    //OBTENER STATE DE REDUX
    let usuarioRedux = useSelector(state => state.auth.usuario);
    let autenticadoRedux = useSelector(state => state.auth.autenticado);
    const token = useSelector(state => state.auth.token);
    // console.log("tokenNavbar");
    // console.log(token);
    if(token)
        tokenAuth(token)
    
    
   
   useEffect(() => {
        const authUsuario = () => dispatch(authUsuarioAction());
        authUsuario();
   }, [autenticadoRedux]);

   
    
    return ( 
        <>
        <nav className="navbar  navbar-dark bg-dark navbar-expand-lg" >
            <a className="navbar-brand" href="#">Recetags</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link  href="/">
                        <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link  href="/populares"><a className="nav-link" >Populares</a></Link>
                </li>
                {
                    autenticadoRedux 
                    ?
                    <>
                        <li className="nav-item">
                            <Link  href="/favoritos"><a className="nav-link" >Favoritos</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link  href="/crearReceta"><a className="nav-link" >Crear Receta</a></Link>
                        </li>
                    </>
                    :
                    null
                }   
                </ul>
                
                <ul className="navbar-nav">
                    {
                        autenticadoRedux 
                        ?
                        <li className="nav-item">
                            <Link  href="/">
                                <a className="nav-link">Cerrar sesión </a>
                            </Link>  
                        </li>
                        :
                        <>
                        <li className="nav-item">
                            <Link  href="/login">
                                <a className="nav-link">Login </a>
                            </Link>  
                        </li>
                        <li className="nav-item">
                            <Link  href="/registro">
                                <a className="nav-link">Registrarse </a>
                            </Link>
                        </li>
                        </>
                    }
                </ul>
            </div>
        </nav>
        <NavbarSearch/>
        
        </>
     );
}


 
export default Navbar;