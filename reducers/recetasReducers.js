import {
    CREANDO_RECETA, CREAR_RECETA_ERROR, CREAR_RECETA_EXITOSO,
    OBTENIENDO_RECETAS, OBTENER_RECETAS_EXITO, OBTENER_RECETAS_ERROR,
    OBTENIENDO_RECETASFAV, OBTENER_RECETASFAV_EXITO, OBTENER_RECETASFAV_ERROR,
    AGREGANDO_RECETAFAV, AGREGAR_RECETAFAV_EXITO, AGREGAR_RECETAFAV_ERROR,
    OBTENIENDO_RECETASPOPULARES, OBTENER_RECETASPOPULARES_EXITO, OBTENER_RECETASPOPULARES_ERROR,
    OBTENIENDO_RECETAID, OBTENER_RECETAID_EXITO, OBTENER_RECETAID_ERROR,
    ELIMINANDO_RECETA, ELIMINAR_RECETA_EXITO, ELIMINAR_RECETA_ERROR,
    AGREGANDO_COMENTARIO, AGREGAR_COMENTARIO_EXITO, AGREGAR_COMENTARIO_ERROR,
    BUSCANDO_POR_RECETA, BUSCAR_POR_RECETA_EXITO, BUSCAR_POR_RECETA_ERROR,
    BUSCANDO_POR_INGREDIENTE, BUSCAR_POR_INGREDIENTE_EXITO, BUSCAR_POR_INGREDIENTE_ERROR,
    MOSTRANDO_INGREDIENTES, MOSTRAR_INGREDIENTES_EXITO, MOSTRAR_INGREDIENTES_ERROR,
    AGREGANDO_INGREDIENTE, AGREGAR_INGREDIENTE_EXITO, AGREGAR_INGREDIENTE_ERROR,
} from '../types/index'

const initialState = {
    recetas:[],
    recetasFav:[],
    recetaSelect: {},
    cargando: null,
    buscado: null,
    ingredientes:[],
    ingrediente: null,
    mensaje: null,
    comentario: null,
    comentarios: [],
    recetasBuscadas: null,
    ingredientesBuscados: [],
    mostrarIngredientes: false

}

export default function (state = initialState, action){
    switch(action.type)
    {
        case CREANDO_RECETA:
            return{
                ...state,
                cargando: true
            }
        case CREAR_RECETA_ERROR:
            return{
                ...state,
                cargando: false,
                mensaje: action.payload
            }
        case CREAR_RECETA_EXITOSO:
            return{
                ...state,
                cargando: false,
                mensaje: "Receta creada",
                recetas:[
                    ...state.recetas,
                    action.payload
                ]
            }
        // case BUSCANDO_POR_INGREDIENTE:
        // case BUSCANDO_POR_RECETA:
        case AGREGANDO_INGREDIENTE:
        case MOSTRANDO_INGREDIENTES:
        case AGREGANDO_COMENTARIO:
        case ELIMINANDO_RECETA:
        case OBTENIENDO_RECETAID:
        case OBTENIENDO_RECETASPOPULARES:
        case OBTENIENDO_RECETASFAV:
        case OBTENIENDO_RECETAS:
            return{
                ...state,
                cargando: true
            }
        case OBTENER_RECETASFAV_EXITO:
            return{
                ...state,
                cargando: false,
                mensaje: "Recetas listas",
                recetasFav: action.payload
            }
        case OBTENER_RECETASPOPULARES_EXITO:
        case OBTENER_RECETAS_EXITO:
            return{
                ...state,
                cargando: false,
                mensaje: "Recetas listas",
                recetas: action.payload
            }
        case OBTENER_RECETASFAV_ERROR:
            return{
                ...state,
                cargando: false,
                recetasFav:[],
                mensaje: action.payload
            }
        case OBTENER_RECETASPOPULARES_ERROR:
        case OBTENER_RECETAS_ERROR:
            return{
                ...state,
                cargando: false,
                recetas:[],
                mensaje: action.payload
            }
        case OBTENER_RECETAID_EXITO:
            return{
                ...state,
                recetaSelect: action.payload
            }
        case AGREGANDO_RECETAFAV:
            return{
                ...state,
                cargando: true,  
            }
        case AGREGAR_RECETAFAV_EXITO:
            return{
                ...state,
                recetas: state.recetas.map(receta => (receta._id === action.payload._id ? action.payload : receta)),
                recetasFav: [
                    ...state.recetasFav,
                    action.payload
                ],
                cargando: false,

            }

        case AGREGAR_COMENTARIO_EXITO:
            return{
                ...state,
                comentarios:[
                    ...state.comentarios,
                    action.payload
                ],
                cargando: false,
            }
        
         case ELIMINAR_RECETA_EXITO:
             return{
                 ...state,
                 recetas: state.recetas.filter(receta => receta._id !== action.payload),
                 recetaSelect: {},
                 recetasFav: state.recetasFav.filter(receta => receta._id !== action.payload),
             }
        
        case BUSCANDO_POR_INGREDIENTE:
            return{
                ...state,
                cargando: true,
            }
        case BUSCANDO_POR_RECETA:
            return{
                ...state,
                cargando: true,
                recetasBuscadas: null
            }
        
             
        case BUSCAR_POR_RECETA_EXITO:
            return{
                ...state,
                cargando: false,
                recetasBuscadas: action.payload
            }


        
        case MOSTRAR_INGREDIENTES_EXITO:
            return{
                ...state,
                mostrarIngredientes: action.payload
            }
        case AGREGAR_INGREDIENTE_EXITO:
            return{
                ...state,
                ingredientesBuscados:[
                    ...state.ingredientesBuscados,
                    action.payload
                ]
            }

        default: 
            return state
    }
}