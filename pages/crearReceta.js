import React, {useState, useEffect} from 'react';

import Layout from '../components/layout/Layout';
import styled from '@emotion/styled';

import useValidacion from '../hooks/useValidacion';
import validarCrearReceta from '../validacion/validarCrearReceta'
import Error from '../components/Error'

//ACTIONS DE REDUX
import {useDispatch, useSelector} from 'react-redux'

 import Router, {useRouter} from 'next/router'

const STATE_INICIAL = {
    titulo: '',
    descripcion: '',
    ingrediente: '',
  }

    const FormDiv = styled.div`
        background-color: black;
        color: white;
        opacity: .8;
        border-radius: 5px;
    `;

const CrearReceta = () => {
    let autenticadoRedux = useSelector(state => state.auth.autenticado);
    const router = useRouter();

    useEffect(() => {
        if(!autenticadoRedux)
            Router.push('/');
    
    }, [])

    const Boton = styled.button`
        border: solid 1px #e3e3e3;
        color:white;
    `;


    const { valores, errores, handleSubmit, handleChange, handleBlur } = 
    useValidacion(STATE_INICIAL, validarCrearReceta, crearReceta);

    const { titulo, descripcion } = valores;
    const [ingredientes, setIngredientes] = useState({cantidad: '', ingrediente:'' });
    const [isIngrediente, setIsIngrediente] = useState(false);
    const [listaIngredientes, setListaIngredientes] = useState([]);
    


    //boton para agregar ingredientes

    const {cantidad, ingrediente} =ingredientes;

    const agregarIngrediente = e =>{
        if(ingredientes.cantidad.trim() == '' || ingredientes.ingrediente.trim() == '')
            return setIsIngrediente(true);

        setIsIngrediente(false);
        console.log(ingrediente);

        setListaIngredientes([
            ...listaIngredientes,
            ingrediente
        ]);
        ingredientes.cantidad= ''
        ingredientes.ingrediente=''

    }

    const eliminarIngrediente = (ingrediente) => {
        const nuevaLista = listaIngredientes.filter(ingre =>(
            ingre != ingrediente
        ));
        setListaIngredientes(nuevaLista);
        //console.log(nuevaLista);
    }
    

    async function crearReceta() {

        // si el usuario no esta autenticado llevar al login
        // if(!usuario) {
        //   return router.push('/login');
        // }
    
        // crear el objeto de nuevo producto 
        const producto = {
            titulo, 
            descripcion,
            creado: Date.now(), 
            creador: {
                id: usuario.uid,
                nombre: "usuario.displayName"
            },
            imagen: "jshdsd",
            votos: 0,
            votantes: [],
            comentarios: [],
        }
    
        // insertarlo en la base de datos
        //firebase.db.collection('productos').add(producto);
    
        //return router.push('/');
    
      }


    


    // const titulo, descripcion, imagen, ingrediente;
    
    return ( 
        <Layout>
        <div className="container d-flex justify-content-center">
            <FormDiv className="col-lg-7 py-3">
                <form>
                    <div className="form-group">
                        <label htmlFor="">Nombre receta: </label>
                        <input type="text" className="form-control"
                            onChange={handleChange}
                            value={titulo}
                            name = "titulo"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Descripción: </label>
                        <input type="text" className="form-control"
                            onChange={handleChange}
                            value={descripcion}
                            name = "descripcion"
                        />
                    </div>
                    <div className="form-group">
                        
                        <input type="file" className=""
                            
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">ingrediente: </label>
                        <div className="d-flex">
                        <input type="text" className="form-control col-2 col-lg-1"
                        placeholder="2"
                        onChange={ e => setIngredientes({...ingredientes,[e.target.name]: e.target.value})}
                        value={cantidad}
                        name = "cantidad"
                    />
                        <input type="text" className="form-control"
                            placeholder="cucharadas de sal"
                            onChange={ e => setIngredientes({...ingredientes,[e.target.name]: e.target.value})}
                            value={ingrediente}
                            name = "ingrediente"
                        />
                        <button type="button" 
                            className="btn btn-sm btn-primary"
                            onClick={agregarIngrediente}
                        >Agregar</button>
                        </div>
                    </div>
                    {
                        isIngrediente
                        ?<Error
                            error ="Falta un campo (ingrediente o cantidad)"
                        />
                        : null
                    }
                    <div>
                        {
                            listaIngredientes.length == 0
                            ? <p>No hay ingredientes agregados</p>
                            :
                            listaIngredientes.map( (ingre, index) =>(
                                <Boton
                                    type ="button" key={index} className="btn  mt-3"
                                    onClick={ ()=> eliminarIngrediente(ingre)}>
                                    {ingre} &times;
                                </Boton>
    ))
                            

                        }
                        
                            
                    </div>
                </form>
            </FormDiv>
        </div>
        </Layout>
     );
}
 
export default CrearReceta;