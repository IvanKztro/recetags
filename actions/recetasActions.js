import {
    CREANDO_RECETA, CREAR_RECETA_ERROR, CREAR_RECETA_EXITOSO,
    OBTENIENDO_RECETAS, OBTENER_RECETAS_EXITO, OBTENER_RECETAS_ERROR,
    OBTENIENDO_RECETASFAV, OBTENER_RECETASFAV_EXITO, OBTENER_RECETASFAV_ERROR,
    AGREGANDO_RECETAFAV, AGREGAR_RECETAFAV_EXITO, AGREGAR_RECETAFAV_ERROR,
    OBTENIENDO_RECETAID, OBTENER_RECETAID_EXITO, OBTENER_RECETAID_ERROR,
    ELIMINANDO_RECETA, ELIMINAR_RECETA_EXITO, ELIMINAR_RECETA_ERROR,
    AGREGANDO_COMENTARIO, AGREGAR_COMENTARIO_EXITO, AGREGAR_COMENTARIO_ERROR,
    BUSCANDO_POR_RECETA, BUSCAR_POR_RECETA_EXITO, BUSCAR_POR_RECETA_ERROR,
    BUSCANDO_POR_INGREDIENTE, BUSCAR_POR_INGREDIENTE_EXITO, BUSCAR_POR_INGREDIENTE_ERROR,
    MOSTRANDO_INGREDIENTES, MOSTRAR_INGREDIENTES_EXITO, MOSTRAR_INGREDIENTES_ERROR,
    AGREGANDO_INGREDIENTE, AGREGAR_INGREDIENTE_EXITO, AGREGAR_INGREDIENTE_ERROR,
} from '../types/index'

import clienteAxios from '../config/axios';


export function crearRecetaAction (receta){
    console.log("actionsss time");
    console.log(receta);

        return async (dispatch) => {
            dispatch(creandoRecetaReducer());
            try {
            const response = await clienteAxios.post("api/recetas/crearReceta",receta)
            console.log(response.data.receta);
            dispatch(crearRecetaExitoReducer(response.data.receta));
        } catch (error) {
            console.log(error.response);
            dispatch(crearRecetaErrorReducer("Error al crear receta"))
        }
    }
}

const creandoRecetaReducer = () => ({
    type: CREANDO_RECETA
});

const crearRecetaErrorReducer = (msg) =>({
    type: CREAR_RECETA_ERROR,
    payload: msg
});

const crearRecetaExitoReducer = (msg) =>({
    type: CREAR_RECETA_EXITOSO,
    payload: msg
})

export function obtenerRecetasAction(usuario, orden){

    return async(dispatch) => {
        dispatch(obteniendoRecetasReducer());
        try {
            // console.log(usuario);
            // console.log(orden);
            let recetas;
            if(usuario)
                recetas = await clienteAxios.post('api/recetas/', {orden: orden});
            else
                recetas = await clienteAxios.post('api/recetas/', {orden});
            // console.log(recetas.data);
            // console.log(usuario);
            
            dispatch(obtenerRecetasExitoReducer(recetas.data))

        
        } catch (error) {
            console.log(error.response);
            dispatch(obtenerRecetasErrorReducer("NO SE PUDIERON OBTENER LAS RECETAS"))
        }
    }
}


const obteniendoRecetasReducer = ()=>({
    type: OBTENIENDO_RECETAS,
    payload: true
})

const obtenerRecetasExitoReducer = (recetas) => ({
    type: OBTENER_RECETAS_EXITO,
    payload: recetas
})

const obtenerRecetasErrorReducer = (msg) => ({
    type: OBTENER_RECETAS_ERROR
})


export function obtenerRecetasFavAction(usuario){

    return async(dispatch) => {
        
        dispatch(obteniendoRecetasFavReducer());
        try {
            //console.log(usuario);
            let recetas;
            if(usuario)
                recetas = await clienteAxios.post('api/recetas/', usuario); 
            else
                recetas = await clienteAxios.post('api/recetas/', "");
            
            
            const favs = recetas.data.filter( receta =>(receta.votantes.includes(usuario.correo)) );
            //console.log(favs);
            dispatch(obtenerRecetasFavExitoReducer(favs))

        
        } catch (error) {
            console.log(error.response);
            dispatch(obtenerRecetasFavErrorReducer("NO SE PUDIERON OBTENER LAS RECETAS"))
        }
    }
}


const obteniendoRecetasFavReducer = ()=>({
    type: OBTENIENDO_RECETASFAV,
    payload: true
})

const obtenerRecetasFavExitoReducer = (favs) => ({
    type: OBTENER_RECETASFAV_EXITO,
    payload: favs
})

const obtenerRecetasFavErrorReducer = (msg) => ({
    type: OBTENER_RECETASFAV_ERROR,
    payload: msg
})




export function agregarRecetaFavAction(usuario, idReceta){
    return async (dispatch) => {
        console.log("EN AGREGAR FAV DESDE ACTIONS")
        console.log(usuario)
        console.log(idReceta)

        dispatch(agregandoRecetaFavReducer());
        try {
            console.log(idReceta);
            const response = await clienteAxios.post('/api/recetas/agregarRecetaFav',{usuario, idReceta});
            console.log(response.data.receta);
            dispatch(agregarRecetaFavExitoReducer(response.data.receta));
            
        } catch (error) {
            console.log(error.response);
            dispatch(agregarRecetaFavErrorReducer("Error al agregar receta a favoritos"));
        }


    }
}

const agregandoRecetaFavReducer = () =>({
    type: AGREGANDO_RECETAFAV
})

const agregarRecetaFavExitoReducer = (receta) =>({
    type: AGREGAR_RECETAFAV_EXITO,
    payload: receta
})

const agregarRecetaFavErrorReducer = (msg) => ({
    type: AGREGAR_RECETAFAV_ERROR,
     payload: msg
})


export function ObtenerRecetaIdAction(_id){

    return async(dispatch)=>{
        console.log("ObtenerRecetaIdAction");
        console.log(_id);
        dispatch(obteniendoRecetaIdReducer());

        try {
            console.log("ObtenerRecetaIdAction")
            const response = await clienteAxios.post("/api/recetas/obtenerRecetaByID",{_id})
            console.log(response.data.recetaById);
            dispatch(obtenerRecetaIdExitoReducer(response.data.recetaById))
        } catch (error) {
            console.log(error.response);
            dispatch(obtenerRecetaIdErrorReducer("No se pudo obtener la receta por ID"));
        }

    }

}

const obteniendoRecetaIdReducer = () =>({
    type: OBTENIENDO_RECETAID,
})

const obtenerRecetaIdExitoReducer = (recetaById) =>({
    type: OBTENER_RECETAID_EXITO,
    payload: recetaById
})

const obtenerRecetaIdErrorReducer = (msg) =>({
    type: OBTENER_RECETAID_ERROR,
    payload: msg
})


export function eliminarRecetaAction(id){
    console.log("ELIMINADO RECETA POR ID");
    return async(dispatch) => {

        dispatch(eliminandoRecetaReducer());

        try {
                                                        
            const response = await clienteAxios.delete(`/api/recetas/eliminarReceta/${id}`);
            console.log(response.data._id);
            dispatch(eliminarRecetaExitoReducer(response.data._id));
        } catch (error) {
            console.log(error.response);
            dispatch(eliminarRecetaErrorReducer("No se pudo eliminar la receta"));
        }

    }

}

const eliminandoRecetaReducer = () => ({
    type: ELIMINANDO_RECETA
})

const eliminarRecetaExitoReducer = (idReceta) => ({
    type: ELIMINAR_RECETA_EXITO,
    payload: idReceta
});

const eliminarRecetaErrorReducer = (msg) => ({
    type: ELIMINAR_RECETA_ERROR,
    payload: msg
})

export function agregarComentarioAction (comentario){

    return async (dispatch) =>{
        dispatch(agregandoComentarioReducer());

        try {
            const response = await clienteAxios.put("/api/recetas/agregarComentario",comentario);
            console.log(response.data);
            //dispatch(agregarComentarioExitoReducer(response.data));
        } catch (error) {
            console.log(error.response);
        }

    }
}

const agregandoComentarioReducer = () =>({
    type: AGREGANDO_COMENTARIO,
});

const agregarComentarioExitoReducer = (comentario) => ({
    type: AGREGAR_COMENTARIO_EXITO,
    payload: comentario
})

//BUSCAR RECETAS

export function buscarPorRecetaAction(tipoBusqueda, receta){

    return async(dispatch) => {
        if(tipoBusqueda === "receta")
            dispatch(buscandoPorRecetaReducer());
        else
            dispatch(buscandoPorIngredienteReducer());
        try {
            console.log(receta);
            const response = await clienteAxios.post('/api/recetas/buscarPorReceta', {receta});
            console.log(response.data);
            const buscado = receta.toLowerCase();
            console.log("buscado")
            console.log(tipoBusqueda)

            if(tipoBusqueda === "receta")
            {
                //FILTRO POR TITULO Y DESCRIPCION
                const filtro = response.data.filter( receta => {
                    return(
                        receta.titulo.toLowerCase().includes(buscado) ||
                        receta.descripcion.toLowerCase().includes(buscado)
                    )
                });

                console.log(filtro);

                dispatch(buscarPorRecetaExitoReducer(filtro));
            }
            else
            {
                    // CODIGO PARA BUSCAR POR INGREDIENTE
                let recetasFiltradas =[]
                response.data.map( receta => 
                (
                receta.ingredientes.map( ingre => {
                    if(buscado.includes(ingre.ingrediente.toLowerCase()))
                        recetasFiltradas.push(receta);
                })
                )
                )
                console.log(recetasFiltradas);
                dispatch(buscarPorIngredienteExitoReducer(recetasFiltradas));
            }
    //   const filtro =  productos.filter(producto => {
    //     return (
    //       producto.nombre.toLowerCase().includes(busqueda) || 
    //       producto.descripcion.toLowerCase().includes(busqueda)
    //     )
    //   });

        } catch (error) {
            console.log(error.response);
            dispatch(buscarPorRecetaErrorReducer());
        }
    }

}
//REDUCERS BUSQUEDA POR RECETA
const buscandoPorRecetaReducer = () => ({
    type: BUSCANDO_POR_RECETA
});

const buscarPorRecetaExitoReducer = (recetas) => ({
    type: BUSCAR_POR_RECETA_EXITO,
    payload: recetas
})

const buscarPorRecetaErrorReducer = (msg) => ({
    type: BUSCAR_POR_RECETA_ERROR,
    payload: msg
})


//REDUCERS BUSQUEDA POR INGREDIENTE
const buscandoPorIngredienteReducer = () => ({
    type: BUSCANDO_POR_INGREDIENTE
});

const buscarPorIngredienteExitoReducer = (recetas) => ({
    type: BUSCAR_POR_RECETA_EXITO,
    payload: recetas
})

const buscarPorIngredienteErrorReducer = (msg) => ({
    type: BUSCAR_POR_RECETA_ERROR,
    payload: msg
})

export function mostrarIngredientesAction (mostrar){

    return (dispatch)=>{
        dispatch(mostrandoIngredientesReducer());
        dispatch(mostrarIngredientesExitoReducer(mostrar));
    }

}

const mostrandoIngredientesReducer = () => ({
    type: MOSTRANDO_INGREDIENTES
})

const mostrarIngredientesExitoReducer = (mostrar) => ({
    type: MOSTRAR_INGREDIENTES_EXITO,
    payload: mostrar
})

const mostrarIngredientesErrorReducer = () => ({
    type: MOSTRAR_INGREDIENTES_ERROR
})


export function agregandoIngredienteAction (ingrediente){

    return (dispatch)=>{
        console.log("ingrediente buscado Reducer")
        console.log(ingrediente)
        dispatch(agregandoIngredienteReducer());
        dispatch(agregarIngredienteReducer(ingrediente));


    }
}

const agregandoIngredienteReducer = () => ({
    type: AGREGANDO_INGREDIENTE
})

const agregarIngredienteReducer = (ingrediente) => ({
    type: AGREGAR_INGREDIENTE_EXITO,
    payload: ingrediente
})