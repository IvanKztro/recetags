import React,{useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import {useDispatch, useSelector} from 'react-redux'

import {buscarPorRecetaAction} from '../actions/recetasActions'

import Layout from '../components/layout/Layout'
import Receta from '../components/layout/InfoReceta'

//HOOKS
//import {} from '../hooks/useBuscarReceta'
const BuscarReceta = ({receta, usuario}) => {

    const router = useRouter();
    const { query: { q, tipoBusqueda }} = router;

    //DATA DE REDUX
    const recetasBuscadas = useSelector(state => state.recetas.recetasBuscadas);
    const ingredienteBuscados = useSelector(state => state.recetas.ingredienteBuscados);
    const mostrarIngredientes = useSelector(state => state.recetas.mostrarIngredientes);
    mostrarIngredientes
    //useState
    

    console.log(recetasBuscadas);
    console.log("ingredientes buscado");
    console.log(ingredienteBuscados);
    console.log("mostrarIngredientes")
    console.log(mostrarIngredientes)

    const dispatch = useDispatch();

    useEffect(() => {
        console.log("useEffect");
        const buscarRecetas = ()=> dispatch(buscarPorRecetaAction(tipoBusqueda, q));

        buscarRecetas();
    }, [q])


    return ( 
        <Layout>
        {
          // mostrarIngrediente ?
          // <div>
          //   ingredientes buscados: jejejejejje
          // </div>
          // : null
        }
        <div className="mx-3 my-2 row">
          {
            recetasBuscadas
            ? 
            recetasBuscadas.map(receta => (
                <Receta
                  key ={receta._id}
                  receta = {receta}
                  usuario = {usuario}
                />
              ))
            : null
          }
        </div>
      </Layout>

     );
}
 
export default BuscarReceta;