import Head from 'next/head'


import Layout from '../components/layout/Layout'
import Receta from '../components/layout/InfoReceta'
import NavbarSearch from '../components/layout/NavbarSearch'

import clienteAxios from 'axios'

//REACT
import React, {useEffect} from 'react'

//REDUX
import {useDispatch, useSelector} from 'react-redux'
import {obtenerRecetasAction} from '../actions/recetasActions';


function Home({recetas}) {

 
//export default function Home() {

  //let listaRecetasRedux = useSelector
  // const recetas = useSelector(state => state.recetas.recetas);
  const usuario = useSelector(state => state.auth.usuario);

  const orden = "creado";
  

  const dispatch = useDispatch();

  const getRecetas = () => dispatch(obtenerRecetasAction(orden));
  getRecetas();

  

  // useEffect(() => {
  //   const getRecetas = () => dispatch(obtenerRecetasAction(usuario, orden));
  //   getRecetas();
  // }, [])

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

 /* 
    {
      idReceta: 2, 
      nombre: "Pozole", 
      descripcion: "Pozole de rancho, no es el pozole tipico de cuidad",
      creador: 2,
      creado: "hace 5 dias",
      foto: "https://www.mylatinatable.com/wp-content/uploads/2016/03/pozole-5-1024x681-1.jpg",
      likes: 45,
      hanLiked: [12,21,13,42],
      comentarios:[
        { byUserID: 3, nombre: "Ruben", correo: "ruben@gmail.com", comentario: "No sabia sobre este platillo pero esta rico"}
      ]
    }*/

  
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


//export async function getStaticProps() {
export async function getStaticProps(){
  
  const recetas = await clienteAxios.post('https://api-recetags.herokuapp.com/api/recetas/', {orden: 'creado'});
  
  return{
    props:{
      recetas: recetas.data
    }
  }
}

export default Home
