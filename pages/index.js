import Head from 'next/head'


import Layout from '../components/layout/Layout'
import Receta from '../components/layout/InfoReceta'
import NavbarSearch from '../components/layout/NavbarSearch'

//REACT
import React, {useEffect} from 'react'

//REDUX
import {useDispatch, useSelector} from 'react-redux'
import {obtenerRecetasAction} from '../actions/recetasActions';

export default function Home() {

  //let listaRecetasRedux = useSelector
  const recetas = useSelector(state => state.recetas.recetas);
  const usuario = useSelector(state => state.auth.usuario);

  const orden = "creado";
  

  const dispatch = useDispatch();



  useEffect(() => {
    const getRecetas = () => dispatch(obtenerRecetasAction(usuario, orden));
    getRecetas();
  }, [])
  //PARA PAI Y PAGINADO DE ELEMENTOS
  // const lista =  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  // const perPage = 5;
  // const pagActual = 3;
  
  // let eFinal = (perPage * pagActual) - 1;
  // let eInicial = eFinal -  perPage ;

  // console.log(lista);
  // const newLista = lista.filter( (pro, index) => {
  //  console.log(` ${index} >= ${eInicial} || ${ index} <= ${eFinal}`)
  //   //console.log();
  //   return(
  //     index >= eInicial && index <= eFinal
  //   )
  // })

  // console.log(newLista);

  
  return (
    
      <Layout>
        <div className="mx-3 my-2 row">
          {
            recetas.length != 0
            ? 
              recetas.map(receta => (
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
  )
}
