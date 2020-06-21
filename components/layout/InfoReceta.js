import React from 'react';
import styled from '@emotion/styled';

const InfoReceta = ({receta}) => {
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

    const Comentarios = styled.div`
        
        .datos{
            font-size: 14px;
        }
    `;

    const Votos = styled.div`
        justify-content: center;
        text-align: center;
    `;

    /*
    
    idReceta: 2, 
      nombre: "Pozole", 
      descripcion: "Pozole de rancho, no es el pozole tipico de cuidad",
      creador: 2,
      creado: "hace 5 dias",
      foto: "",
      votos: 12,
      haVotado: [12,21,13,42],
      comentarios:[
        { byUserID: 3, nombre: "Ruben", correo: "ruben@gmail.com", comentario: "No sabia sobre este platillo pero esta rico"}
      ]
    
    */
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
            
    //         <Votos>
    //             {/* <div>&#9650;</div> */}
    //             <div><i className="fas fa-thumbs-up"></i></div>
    //             <p>{receta.likes}</p>
    //         </Votos>

    //   </Receta>
    //style="width: 18rem;"
    <div className="card col-12 col-md-4 col-lg-3 mb-2" >
        <Imagen className="" src={receta.foto} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{receta.nombre}</h5>
            <p className="card-text">{receta.descripcion}</p>

            <Comentarios>
                <div className="row datos aria-hidden">
                    <div className="col-3 "><i  aria-hidden className="fas fa-comment"></i>C {receta.comentarios.length} </div>
                    <div className="col-4 "><i  aria-hidden className="fas fa-thumbs-up"></i>L {receta.likes}</div>
                    <div className="col-5 "><i  aria-hidden className="far fa-heart"></i> Fav</div>
                    
                    {/* <i class="far fa-bookmark"></i> Guardar */}
                    
                </div>
                <a href="#" className="btn btn-primary form-control">Ingredientes</a>
            </Comentarios>
        </div>
    </div>
     );
}
 
export default InfoReceta;