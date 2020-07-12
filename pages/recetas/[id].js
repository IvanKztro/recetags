//REACT
import React, {useEffect, useState} from 'react'
import {useRouter, Router} from 'next/router';
import {useDispatch, useSelector} from 'react-redux'
import {ObtenerRecetaIdAction, eliminarRecetaAction, agregarComentarioAction} from '../../actions/recetasActions'
import Layout from '../../components/layout/Layout'

import styled from '@emotion/styled';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';


const Contenedor = styled.div`
        /* @media (min-width:768px) {
            display: grid;
            grid-template-columns: 2fr 1fr;
            column-gap: 2rem;
        } */

        img{
            width: 100%;
        }
    `;
const Usuario = styled.div`
    background-color: #e1e1e1;

    span{
        font-weight: bold;
    }
`;

const Comentario = styled.div`
    
    border: 1px solid #e1e1e1;
`;

const Creador = styled.small`
    background-color: rgba(0,179,126,.1);
    color: #056d4e;
    padding: 3px 10px;
    border-radius: 10px;
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
    /* margin-bottom: 15px; */
    
`;


const Receta = () => {

    useEffect(() => {
        console.log("effect");
        const getRecetaById = () => dispatch(ObtenerRecetaIdAction(id));
        getRecetaById();
    },[])

    const router = useRouter();
    const {query: {id}} = router;
    // console.log("sdsdsds22222");
    // console.log(id);
    

  
    
    //Redux
    const dispatch = useDispatch();

    
    
        
    const receta = useSelector(state => state.recetas.recetaSelect);
    const usuario = useSelector(state => state.auth.usuario);
    // console.log("receta");
    // console.log(receta);

    const [comentario, setComentario] = useState( { idReceta: id } );
    const [error, setError] = useState(null);


    if(!receta || Object.keys(receta).length === 0)  return 'Cargando...';
        const {titulo, descripcion, imagen, ingredientes, comentarios, creado, votantes, _id, creador, } = receta
        const puedeBorrar = () =>{
            if(!usuario)
                return false

            if(creador.id === usuario._id)
                return true
        }

        const esCreador = (correoUsuariobyComentario) =>{

            if(correoUsuariobyComentario === creador.correo)
                return true
        }

        const eliminarRecetaA = () => dispatch(eliminarRecetaAction(receta._id))

        const eliminarReceta = () =>{
            eliminarRecetaA();
            router.push('/');

        }

        const agregarComentario = () => dispatch(agregarComentarioAction(comentario));

         const submitComentario = (e) =>{
            e.preventDefault();
            if(comentario.comentario.trim() == "")
                return setError("Debe ingresar un comentario");
            
            setError(null);
            console.log(comentario);
            agregarComentario();
            
         }

         const changeComentario = (e) =>{
            //console.log(e.target.value);
            setComentario({
                ...comentario,
                [e.target.name]: e.target.value
            });    
        }
    
    

    return ( 
        <Layout>
            
            {
                receta ?
                <div>
            { puedeBorrar() &&  
                <div className="pl-3">
                    <button
                        onClick={eliminarReceta}
                        className="btn btn-danger mb-3"
                    >Eliminar Producto</button>
                </div>
            } 
                    <div className="container">
                        <h3 className="text-center">{titulo}</h3>
                        <Contenedor>
                            <div className="pb-3 col-12"> 
                                <p className="fecha_publicado">
                                    Publicado hace: {formatDistanceToNow(new Date(creado), {locale: es})}
                                </p>
                                <p>Por: {creador.nombre}</p>
                                 
                                <div className="d-flex justify-content-center">
                                <img className="img_producto_detalles " src={imagen} alt=""/>
                                </div>
                                <h4 className="mt-3">DESCRIPCIÓN: </h4>
                                <p>{descripcion}</p>

                                <div className= "bg-  d-flex">
                                    <div className="mb-4 ">
                                        <h4 className="mt-3">INGREDIENTES: </h4>
                                        {
                                            ingredientes.map((ingre, index) =>(
                                                
                                                <div key={index}>
                                                    {ingre.cantidad} - {ingre.ingrediente}
                                                </div>
                                                
                                            ))
                                        }
                                    </div>
                                    {/* <div className="mb-4 col-6 bg-primary">
                                        <h4 className="mt-3">INGREDIENTES: </h4>
                                        {
                                            ingredientes.map((ingre, index) =>(
                                                
                                                <div key={index}>
                                                    {ingre.cantidad} - {ingre.ingrediente}
                                                </div>
                                                
                                            ))
                                        }
                                    </div> */}
                                </div>

                                {
                                    usuario &&
                                    (<>
                                        {error? <p className="alert alert-danger">{error}</p>:null}
                                        <h4>Agrega un comentario</h4>
                                        <div>
                                            <form id="formComentario" onSubmit={submitComentario} >
                                                <div className="form-group">
                                                    <textarea 
                                                        placeholder="agrega tu comentario aqui"
                                                        className="form-control"
                                                        id="comentario"
                                                        name="comentario"
                                                        onChange={changeComentario}
                                                        />
                                                </div>
                                                <button className="btn btn-primary btn-sm form-control">Agregar Comentario</button>
                                            </form>
                                        </div>
                                    </>)
                                }

                                <h4 className="mt-4">Comentarios</h4>
                                <div >
                                    {comentarios.map(( comentario, index) =>(
                                        <Comentario
                                            key={index}
                                            className="mb-2"
                                        >
                                            {esCreador( comentario.correo )
                                                ?
                                                <Usuario className="">
                                                    <span>{comentario.nombre}
                                                        <Creador className="badge">creador</Creador>
                                                    </span>
                                                    {
                                                        comentario.fechaPublicacion ?
                                                        <p>
                                                            hace: {formatDistanceToNow(new Date(comentario.fechaPublicacion), {locale: es})}
                                                        </p>
                                                        : null
                                                    }
                                                </Usuario>
                                                :
                                                <Usuario className="">
                                                    <span>{comentario.nombre}</span>
                                                    {
                                                        comentario.fechaPublicacion ?
                                                        <p>
                                                            hace: {formatDistanceToNow(new Date(comentario.fechaPublicacion), {locale: es})}
                                                        </p>
                                                        : null
                                                    }
                                                </Usuario>
                                            }
                                            <p className="ml-3">{comentario.comentario}</p>
                                            
                                            
                                        </Comentario>
                                    ))}
                                </div>

                            </div>
                            {/* <aside className="bg-">
                               
                                <div className="mt-5">
                                    <p className="text-center">Votos: {votantes.length}</p>
                                    {
                                    usuario &&
                                    (<>
                                    <button 
                                        className="btn btn-success  btn-sm form-control"
                                        // onClick={votarProducto}
                                    >Votar</button>
                                    </>)}
                                </div>
                                
                            </aside> */}
                        </Contenedor>
                        
                    </div>
                
            </div>
            :null

            } 
        </Layout>
     );
}
 
export default Receta;