import React from 'react';
import styled from '@emotion/styled';

const Boton = styled.button`
        border: solid 1px #e3e3e3;
        color:white;
    `;

    const FormReceta1 = ({cantidad, ingrediente, isIngrediente,listaIngredientes, ingredientes,
    setIngredientes,setIsIngrediente,setListaIngredientes}) => {

    //FUNCIONES
    const agregarIngrediente = e =>{
        if(ingredientes.cantidad.trim() == '' || ingredientes.ingrediente.trim() == '')
            return setIsIngrediente(true);

        setIsIngrediente(false);
        console.log(ingredientes);

        setListaIngredientes([
            ...listaIngredientes,
            ingredientes
        ]);
        setIngredientes({cantidad: '', ingrediente:'' });

    }

    const eliminarIngrediente = (ingrediente) => {
        const nuevaLista = listaIngredientes.filter(ingre =>(
            ingre != ingrediente
        ));
        setListaIngredientes(nuevaLista);
        //console.log(nuevaLista);
    }



    return ( 
        <>
            <div>
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
                            <p>ssssssss</p>
                            // listaIngredientes.map( (ingre, index) =>(
                            //     <Boton
                            //         type ="button" key={index} className="btn  mt-3"
                            //         onClick={ ()=> eliminarIngrediente(ingre)}>
                            //         {ingre} &times;
                            //     </Boton>
                            // ))
                            

                        }
                        
                            
                    </div>
            </div>
        </>
     );
}
 
export default FormReceta1;