import React, {useState, useEffect, useContext} from 'react';
import Link from 'next/link';
import styled from '@emotion/styled'
import tokenAuth from '../../config/token'
import clienteAxios from '../../config/axios';

// import useAutenticacion from '../../hooks/useAutenticacion';
import AuthContext from '../../context/auth/authContext'
//import clienteAxios from 'axios';
import {authUsuarioAction} from '../../actions/authActions';
import {useDispatch, useSelector} from 'react-redux'


const Navbar = ({auth}) => {
    //style={{"background-color": "#e3f2fd", "color": "black"}}
    const [isLogin, setLogin] = useState(false);
    const [tipoBusqueda, setTipoBusqueda] = useState("receta");
    const [busqueda, setBusqueda] = useState("");
   // console.log(isLogin);

 


   //const {usuario, autenticado, autenticarUsuario} = useContext(AuthContext);
   const dispatch = useDispatch();
    //OBTENER STATE DE REDUX
    let usuarioRedux = useSelector(state => state.auth.usuario);
    let autenticadoRedux = useSelector(state => state.auth.autenticado);
    
    
   
   useEffect(() => {
        //authToken(localStorage.getItem('tokenRecetas'));
       // console.log("effect")
        const authUsuario = () => dispatch(authUsuarioAction());
        authUsuario();

        
        // console.log(usuarioRedux);
        // console.log(autenticadoRedux);
   }, [autenticadoRedux]);

   

    const buscarReceta = (e) => {
        e.preventDefault();
        console.log(tipoBusqueda);
        console.log(busqueda);
    }


    const NavBar = styled.nav`
        background-color: rgb(53, 47, 47);
        
        a{
            color: white;
        }
        .navbar-dark .navbar-toggler-icon{
            color: black;
        }
    `;

    const BuscarReceta = styled.div`
        
        display: flex;
        position: relative;

        button{
            display: block;
            position: absolute;
            width: 2rem;
            height: 2rem;
            color: black;
            right: 1rem;
            background-color: white;
            border: none;
            background-image: url("../img/buscar.png");
            background-size: 2rem;
            outline:none;
        }

        @media (max-width: 768px) { 
            flex-direction: column;
         }
    `;
    const BuscarIngrediente = styled.div`
        
        display: flex;
        position: relative;

        button.add{
            position: absolute;
            background-image: url("../img/add.png");
            background-size: 2rem;
            background-repeat: no-repeat;
            right:1rem;
            width: 2rem;
            height: 2rem;
            border-radius: 15px;
            border: none;
            outline: none;
        }

        @media (max-width: 768px) { 
            div{
                flex-direction: column;
            }
        }
    `;

    
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
        
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg"  > 
            <div className="  col-lg-12  bg-">
                <form onSubmit={buscarReceta}>
                    <div className="row bg-">
                    <div className="bg- col-lg-2 col-12 mt-1">
                        <select className="form-control" onChange={ e => {setTipoBusqueda(e.target.value)}}>
                            <option defaultValue value="receta">Por receta</option>
                            <option value="ingrediente">Por ingrediente</option>
                        </select>
                    </div>
                    {
                        tipoBusqueda === "receta"
                        ?
                        <BuscarReceta className="bg- col-lg-8 col-12 mt-1">
                            <input type="text" className="form-control col-lg-12" placeholder="Buscar receta"
                                onChange={(e) => {setBusqueda(e.target.value)}}
                                name= "busqueda"
                                value={busqueda}
                            />
                            <button type="submit" className=" mt-1"></button>
                        </BuscarReceta>
                        :
                        <>
                        <BuscarIngrediente className="bg- col-lg-8 col-12 mt-1">
                            <input type="text" className="form-control" placeholder="Buscar Ingredente"
                                onChange={(e) => {setBusqueda(e.target.value)}}
                            />
                            <button type="submit" className="mt-1 add"></button>
                        </BuscarIngrediente>

                        <div className="col-lg-2  ">
                            <div>
                                <button className="btn btn-sm btn-info form-control mt-1">Ver ingredientes</button>
                            </div>
                        </div>
                        </>


                    }
                    
                    
                    </div>
                </form>
            </div>
        </nav>
        </>
     );
}


 
export default Navbar;