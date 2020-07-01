import React, {useEffect} from 'react';
import Layout from '../components/layout/Layout'

//ACTIONS DE REDUX
import {useDispatch, useSelector} from 'react-redux'
 import Router, { useRouter } from 'next/router'

const Favoritos = () => {

    let autenticadoRedux = useSelector(state => state.auth.autenticado);
    const router = useRouter()
    
    useEffect(() => {
        if(!autenticadoRedux)
            Router.push('/');
    
    }, [])
    

    // if(!autenticadoRedux)
    //          Router.push('/');
            //location.href = "http://localhost:3000/";
    return ( 
        <>
            <Layout>
                <p>Favoritos</p>
            </Layout>
        </>
     );
}
 
export default Favoritos;