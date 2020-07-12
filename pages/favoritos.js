import Head from 'next/head'


import Layout from '../components/layout/Layout'
import Receta from '../components/layout/InfoReceta'
import NavbarSearch from '../components/layout/NavbarSearch'

//REACT
import React, {useEffect} from 'react'

//REDUX
import {useDispatch, useSelector} from 'react-redux'
import {obtenerRecetasFavAction} from '../actions/recetasActions';

const Favoritos = () => {

  //let listaRecetasRedux = useSelector
  const recetas = useSelector(state => state.recetas.recetasFav);
  const usuario = useSelector(state => state.auth.usuario);
  

  const dispatch = useDispatch();



  useEffect(() => {
    const getRecetas = () => dispatch(obtenerRecetasFavAction(usuario));
    getRecetas();
  }, [usuario])
  
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
                 />
               ))
             : <h3 className="text-center">No cuenta con recetas favoritas</h3>
          }
        </div>
      </Layout>
  )
}
export default Favoritos;