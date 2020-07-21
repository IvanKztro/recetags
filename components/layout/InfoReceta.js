import React from 'react';
import styled from '@emotion/styled';

import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';
import Link from 'next/link'

//REDUX
import {useDispatch, useSelector} from 'react-redux'

import {agregarRecetaFavAction} from '../../actions/recetasActions';

const InfoReceta = ({receta, usuario}) => {
    const Receta = styled.div`
        background-color: black;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 575.98px){
            align-items: flex-start;
        }
  `;

    const Descripcion = styled.div`

        flex: 0 1 700px;
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-gap: 0.4rem;

        .detalles{
            color: #e1e1e1;
        }

        @media (max-width: 575.98px){
            display: flex;
            flex-direction: column;
            .detalles{
                color: black;
            } 
        }
  `;

    const Imagen = styled.img`
        max-width: 100%;
        max-height: 160px;
        @media (max-width: 575.98px) {
            max-height: 500px;
        }
    `;

    const Fecha = styled.p`
        font-size: 14px;
        font-weight: bold;
    `;

    const Comentarios = styled.div`
    
        .datos{
            font-size: 14px;
            p{
                margin-left: 5px;
            }
        }
        .fa-heart{
            color: red;
            font-size: 18px;
        }
        
        .fa-comment{
            color: blue;
            font-size: 18px;
        }
        
        
    `;

    const Votos = styled.div`
        justify-content: center;
        text-align: center;
    `;


    //REDUX data
    
   // console.log(usuario);
    if(!usuario)
    {
        //console.log("no hay usuario logeado");
        usuario= {
            correo: "0000000000"
        }
    }
        
        

    //REDUX Actions
    const dispatch = useDispatch();

    const agregarFavAction = (idReceta) => dispatch(agregarRecetaFavAction(usuario, idReceta));
    

    //FUNCION DE AGREGAR FAV

    //agregarRecetaFavAction
    async function agregarFav (receta){
        console.log(receta);
        agregarFavAction(receta._id);
    }


    
    return ( 
    //     <Receta className="container mt-4">
    //         <Descripcion>
    //             <div className="bg-primary">
    //             <Imagen src="https://cdn.kiwilimon.com/articuloimagen/1675/27618.jpg" alt=""/>
    //             </div>
    //             <div className="bg-success">
    //             <p>{receta.nombre}</p>
    //             <p className="detalles">{receta.descripcion}</p>
    //             <Comentarios>
    //                 <div>
    //                 {receta.comentarios.length} comentarios
    //                 </div>
    //             </Comentarios>
    //             </div>
    //         </Descripcion>
    
    <div className="card col-12 col-md-4 col-lg-3 mb-2" >
        <Imagen className="" src={receta.imagen} alt={receta.titulo} loading="lazy"/>
        <Fecha>Publicado hace: {formatDistanceToNow(new Date(receta.creado), {locale: es})}</Fecha>
        <div className="card-body" >
            <h5 className="card-title">{receta.titulo}</h5>
            <p className="card-text">{receta.descripcion}</p>

            <Comentarios>
                <div className="row  datos aria-hidden">
                    <div className="col-6 d-flex"><i  aria-hidden className="far fa-comment"></i><p>{receta.comentarios.length}</p></div>
                    
                    {
                        receta.votantes.includes(usuario.correo)
                        ?
                        <div className="col-6 d-flex"><i  aria-hidden className="fas fa-heart" onClick={()=> agregarFav(receta)}></i><p>{receta.votantes.length}</p></div>
                        :
                        <div className="col-6 d-flex"><i  aria-hidden className="far fa-heart" onClick={()=> agregarFav(receta)}></i><p>{receta.votantes.length}</p></div>

                    }
                    {/* <div className="col-5 "><i  aria-hidden className="far fa-heart"></i> Fav</div> */}
                    
                    {/* <i class="far fa-bookmark"></i> Guardar */}
                    
                </div>
                <Link  href='/recetas/[id]' as={`/recetas/${receta._id}`}>
                    <button className="btn btn-primary form-control">Más información</button> 
                </Link>
                
            </Comentarios>
        </div>
    </div>
     );
}
 
export default InfoReceta;