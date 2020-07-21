//import Head from 'next/head'


import Layout from '../components/layout/Layout'
import Receta from '../components/layout/InfoReceta'
//import NavbarSearch from '../components/layout/NavbarSearch'

//REACT
import React from 'react'

//REDUX
// import {useDispatch, useSelector} from 'react-redux'
// import {obtenerRecetasAction} from '../actions/recetasActions';
import clienteAxios from '../config/axios'

function Populares ({recetas}) {

  //let listaRecetasRedux = useSelector
  //const recetas = useSelector(state => state.recetas.recetas);
  //const usuario = useSelector(state => state.auth.usuario);
  // const orden = "votos";
  

  // const dispatch = useDispatch();



  // useEffect(() => {
  //   const getRecetas = () => dispatch(obtenerRecetasAction({orden}));
  //   getRecetas();
  // }, [])
  
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
             : <h3 class="text-center">No cuenta con recetas favoritas</h3>
          }
        </div>
      </Layout>
  )
}

export async function getStaticProps() {

  const recetas = await clienteAxios.post('api/recetas/', {orden: 'votos'});
  

  return{
    props:{
      recetas: recetas.data
    }
  }
}

export default Populares;