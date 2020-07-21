import React,{useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import {useDispatch, useSelector} from 'react-redux'

import {buscarPorRecetaAction, obtenerRecetasAction} from '../actions/recetasActions'

import Layout from '../components/layout/Layout'
import Receta from '../components/layout/InfoReceta'

//HOOKS
//import {} from '../hooks/useBuscarReceta'
const BuscarReceta = () => {

    const router = useRouter();
    let { query: { q, tipoBusqueda }} = router;

    
    

    
    


    //DATA DE REDUX
    const recetasBuscadas = useSelector(state => state.recetas.recetasBuscadas);
    // const ingredienteBuscados = useSelector(state => state.recetas.ingredienteBuscados);
    // const mostrarIngredientes = useSelector(state => state.recetas.mostrarIngredientes);

    const recetasRedux = useSelector(state => state.recetas.recetas);
    //mostrarIngredientes
    //useState
    

    // console.log(recetasBuscadas);
    // console.log("ingredientes buscado");
    // console.log(ingredienteBuscados);
    // console.log("mostrarIngredientes")
    // console.log(mostrarIngredientes)

    const dispatch = useDispatch();
    // let buscarRecetas;

    const orden = "creado";

    useEffect(() => {
        // console.log("useEffect");
        // console.log(q);
        // console.log(tipoBusqueda);
        // console.log("recetasBuscadas")
        // console.log(recetasBuscadas)
        // console.log("recetasRedux")
        // console.log(recetasRedux)
      // if(!recetasBuscadas && recetasRedux.length == 0)
      // {
      //   q= ""
      //   tipoBusqueda = ""
      //   console.log("recuperando todas as recetas")
      //   const getRecetas = () => dispatch(obtenerRecetasAction(usuario, orden));
      //   getRecetas();
      // }
      // else{
        // console.log("filtrnado recetas boooooooooooooooooooooo")
            // console.log("tipoBusqueda")
            // console.log(tipoBusqueda)
            // console.log("q")
            // console.log(q)
            // console.log("recetasRedux")
            // console.log(recetasRedux)
        
        const buscarRecetas = tipoBusqueda === "receta" 
        ?  ()=> dispatch(buscarPorRecetaAction(tipoBusqueda, q, recetasRedux))
        :  
          
        ()=> dispatch(buscarPorRecetaAction(tipoBusqueda, q, (!recetasBuscadas) ? recetasRedux : recetasBuscadas ))  
        
        buscarRecetas();
      //}

      
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
                />
              ))
            : null
          }
        </div>
      </Layout>

     );
}
 
export default BuscarReceta;