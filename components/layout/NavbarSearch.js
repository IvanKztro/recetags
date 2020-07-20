import React, {useState, useEffect, useContext} from 'react';
import Link from 'next/link';
import styled from '@emotion/styled'
import tokenAuth from '../../config/token'
import clienteAxios from '../../config/axios';
import Error from '../../components/Error'

import Router,{useRouter} from 'next/router';

//hook de validacion
import useValidacion from '../../hooks/useValidacion';
import validarBusquedaRecetas from '../../validacion/validarBusquedaRecetas'

//REDUX IMPORTS
import {useDispatch, useSelector} from 'react-redux'
import {cambioTipoBusquedaAction, borrarIngredienteAction, agregandoIngredienteAction} 
from '../../actions/recetasActions'

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

    const ListaIngredientes = styled.div`
        display: flex;
        color: white;
        div{
            color: white;
            margin-right: 5px;
        }
    `;

    const STATE_INITIAL ={
        buscado: ''
    }

const NavbarSearch = () => {
    
    const [isLogin, setLogin] = useState(false);
    //const [tipoBusqueda, setTipoBusqueda] = useState("receta");
    const [busqueda, setBusqueda] = useState("");
    const [dato, setDato] = useState("");

    const [error, setError] = useState(false);
    // const {valores, errores, handleSubmit, handleChange} = useValidacion
    // (STATE_INITIAL, validarBusquedaRecetas, busquedaReceta);
    // const {buscado} = valores;

    //VALORES Y FUNCIONES DE REDUX

    const dispatch = useDispatch();
    // const buscarPorReceta = () => dispatch(buscarPorRecetaAction(busqueda));
    
    const ingredientesBuscados = useSelector(state => state.recetas.ingredientesBuscados);
    const tipoBusqueda = useSelector (state => state.recetas.tipoBusqueda);
    const recetasRedux = useSelector(state => state.recetas.recetas);

    //console.log(tipoBusqueda);
    
    // console.log("ingredientesBuscados")
    // console.log(ingredientesBuscados)
    // if(ingredientesBuscados)
    //  console.log("existeee")
    //  else
    //  console.log("nelll")

    // console.log("mostrarIngredientes")
    // console.log(mostrarIngredientes)
     


    function busquedaReceta (e) {
        e.preventDefault();
        if(busqueda.trim() === "")
            return setError(true);

        Router.push({
            pathname:'/buscarReceta',
            query:{q: busqueda, tipoBusqueda}
        })
    
        
        
        // if(tipoBusqueda == "receta")
        // {
        //     console.log("Buscando receta: ",busqueda);
        //     buscarPorReceta();
        // }
        // else{
        //     console.log("Buscando ingrediente: ",busqueda);
        // }
    }

    const agregarIngredienteA = () => dispatch(agregandoIngredienteAction(dato));
    const agregarIngrediente = () =>{
        //console.log(dato);
        agregarIngredienteA();
        setDato("");
        Router.push({
            pathname:'/buscarReceta',
            query:{q: dato, tipoBusqueda}
        })

    }

    const borrarIngredientesA = () => dispatch(borrarIngredienteAction(recetasRedux));
    const borrarIngredientes = () =>{
        borrarIngredientesA();
    }

    const cambioTipoBusquedaA = (tipoBusqueda) =>dispatch(cambioTipoBusquedaAction(tipoBusqueda));

    const cambioTipoBusqueda = (tipoBusqueda) =>{
        console.log(tipoBusqueda)
        cambioTipoBusquedaA(tipoBusqueda);
        //console.log(tipoBusqueda)
    }
    return ( 
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg"  > 
            <div className="  col-lg-12  bg-">
                <form >
                    
                    <div className="row bg-">
                    {
                        error
                        ?<Error error="Campo vacio, escriba lo que busca"/> : null
                    }
                    <div className="bg- col-lg-2 col-12 mt-1">
                        <select className="form-control" onChange={ e => {cambioTipoBusqueda(e.target.value)}}>
                            <option defaultValue value="receta">Por receta</option>
                            <option value="ingrediente">Por ingrediente</option>
                        </select>
                    </div>
                    
                    {
                        tipoBusqueda === "receta"
                        ?
                        <BuscarReceta className="bg- col-lg-8 col-12 mt-1">
                            <input type="text" className="form-control col-lg-12" placeholder="Buscar receta"
                                onChange={e => setBusqueda(e.target.value)}
                                name= "busqueda"
                                value={busqueda}
                            />
                            
                            <button type="button" onClick={busquedaReceta} className=" mt-1"></button>
                        </BuscarReceta>
                        :
                        <>
                        <BuscarIngrediente className="bg- col-lg-8 col-12 mt-1">
                            <input type="text" className="form-control" placeholder="Buscar Ingredente"
                                onChange={ e => setDato(e.target.value)}
                                name= "dato"
                                value={dato}
                            />
                            
                            <button type="button" onClick={agregarIngrediente} className="mt-1 add"></button>
                        </BuscarIngrediente>
                        

                        <div className="col-lg-2  ">
                            <div>
                                <button type="button" onClick={borrarIngredientes} 
                                className="btn btn-sm btn-warning form-control mt-1">Borrar ingredientes y busqueda</button>
                            </div>
                            <ListaIngredientes>
                            {
                                (ingredientesBuscados.length !== 0) ?
                                ingredientesBuscados.map((ingrediente, index) => (
                                    <div key={index}>{ingrediente}</div>
                                )): null
                            }
                            </ListaIngredientes>

                        </div>
                        
                        </>


                    }
                    
                    
                    </div>
                </form>
            </div>
        </nav>
     );
}
 
export default NavbarSearch;