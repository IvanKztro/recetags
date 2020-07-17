import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'

import {buscarPorRecetaAction} from '../actions/recetasActions'

const useBuscarReceta = (tipoBusqueda,busqueda) => {
    
    const [recetas, setRecetas] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        
        const buscarRecetas = ()=> dispatch(buscarPorRecetaAction());

        buscarRecetas();
        
    }, [])
    
    return {}
}
 
export default useBuscarReceta;