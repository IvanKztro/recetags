import React, {useState, useEffect} from 'react';

import Layout from '../components/layout/Layout';
import styled from '@emotion/styled';

import FormReceta1 from '../components/formReceta/formReceta1'

import useValidacion from '../hooks/useValidacion';
import validarCrearReceta from '../validacion/validarCrearReceta'
import Error from '../components/Error'

//ACTIONS DE REDUX RECETAS
import {useDispatch, useSelector} from 'react-redux'
import {crearRecetaAction} from '../actions/recetasActions'
//ACTIONS DE REDUX AUTENTICACION
import {authUsuarioAction} from '../actions/authActions'

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
    let usuario = useSelector(state => state.auth.usuario);
   // console.log(usuario);
    const router = useRouter();

    const dispatch = useDispatch();

    useEffect(() => {
        
        const getAutenticacion = async() =>  await dispatch(authUsuarioAction());
        getAutenticacion();

        // console.log(usuario)
        // console.log(autenticadoRedux)


        
        if(!autenticadoRedux)
            Router.push('/');
    
    }, [])

    
    //VALIDACION (HOOK Y USEVALDACION)
    const { valores, errores, handleSubmit, handleChange, handleBlur } = 
    useValidacion(STATE_INICIAL, validarCrearReceta, crearReceta);
    let { titulo, descripcion } = valores;

    //STATE DE LA PAGINA
    const [ingredientes, setIngredientes] = useState({cantidad: '', ingrediente:'' });
    const [isIngrediente, setIsIngrediente] = useState(false);
    const [listaIngredientes, setListaIngredientes] = useState([]);
    const [estadoFormulario, setEstadoFormulario] = useState(1);
    const [receta, setReceta] = useState({});

    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState('')
    const [urlImage, setUrlImage] = useState(null);

    const [isReadyForm, setReadyForm] = useState(false);
    const [error, setError] = useState(null);
    let boton ="";
    let color = "";
    
    if(estadoFormulario == 2)
    {
        boton = "Crear";
        color = "btn-success"
    }
    else{
        boton = "Siguiente";
        color = "btn-primary"
    }


    //boton para agregar ingredientes
    const {cantidad, ingrediente} =ingredientes;

    

    const siguienteForm = ()=>{

        

        if(estadoFormulario == 1)
        {
            if(titulo.trim() === "" || descripcion.trim() === "" )                
                return setError("Ingrese todos los campos");

        }else if(estadoFormulario == 2)
        {
            if(listaIngredientes.length == 0)
                return setError("Debe ingresar algun ingrediente");
            
           return crearReceta();
        }
        setError(null);
        const cont = estadoFormulario + 1;
        setEstadoFormulario(cont);
        setReadyForm(false);
    }
    

    

    const crearNuevaReceta = (nuevaRecetaRedux) => dispatch(crearRecetaAction(nuevaRecetaRedux));
    const autenticacion = () => dispatch(authUsuarioAction());

    

    async function crearReceta() {

        const nuevaRecetaRedux = {
            titulo: titulo,  
            descripcion: descripcion,
            // creador: {
            //     id: usuario._id,
            //     nombre: `${usuario.nombre} ${usuario.apellidos}`,
            //     correo: usuario.correo
            // },
            imagen: urlImage,
            ingredientes: listaIngredientes
        }
        //MANDAR A LLAMAR AL METODO DE REDUX

        //primero se autentica al usuario
        //await autenticacion();
        //crear la receta
        await crearNuevaReceta(nuevaRecetaRedux);   
        
        //RESET DE FORMULARIO
        // setError(null);
        // titulo =""
        // descripcion =""
        // setEstadoFormulario(1);
        
        
        // setListaIngredientes([]);
        Router.push("/");
        setLoading(true);
        setUrlImage(null);
    }

    

    const handleImage = async(e) =>{
        //console.log("cambiando imagen")
        setLoading(false)
        const files = e.target.files;
        const data = new FormData()

        data.append('file', files[0]);
        data.append('upload_preset', 'recetags_preset')
        const response = await fetch('https://api.cloudinary.com/v1_1/imageapi2020/image/upload',{
        method: 'POST',
        body: data
        });
        

        const file = await response.json()
        //console.log(file)
        setUrlImage(file.secure_url);
        setLoading(true);

    }

    


    // const titulo, descripcion, imagen, ingrediente;
    
    return ( 
        <Layout>
        <div className="container d-flex justify-content-center">
            <FormDiv className="col-lg-7 py-3">
                <form onSubmit={crearReceta}>
                    {
                        error
                        ?<Error error={error}></Error>:null

                    }
                {
                    estadoFormulario === 1
                    ?
                    (
                       <>
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
                                
                                <input type="file" name="file"  placeholder="" className=""
                                    onChange={handleImage}
                                    
                                />
                                {
                                    !loading ?
                                    <div className="sk-circle">
                                        <div className="sk-circle1 sk-child"></div>
                                        <div className="sk-circle2 sk-child"></div>
                                        <div className="sk-circle3 sk-child"></div>
                                        <div className="sk-circle4 sk-child"></div>
                                        <div className="sk-circle5 sk-child"></div>
                                        <div className="sk-circle6 sk-child"></div>
                                        <div className="sk-circle7 sk-child"></div>
                                        <div className="sk-circle8 sk-child"></div>
                                        <div className="sk-circle9 sk-child"></div>
                                        <div className="sk-circle10 sk-child"></div>
                                        <div className="sk-circle11 sk-child"></div>
                                        <div className="sk-circle12 sk-child"></div>
                                    </div>
                                    : null
                                }
                                {/* <input name="file" type="file"
                                    className="file-upload" data-cloudinary-field="image_id"
                                    data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"
                                /> */}
                            </div>
                       </>
                    )
                    : null
                } 
                {
                    estadoFormulario === 2
                    ?
                    (
                        <FormReceta1
                            cantidad={cantidad}
                            ingrediente = {ingrediente}

                            isIngrediente={isIngrediente}
                            listaIngredientes={listaIngredientes}
                            ingredientes={ingredientes}

                            setIngredientes={setIngredientes}
                            setIsIngrediente={setIsIngrediente}
                            setListaIngredientes={setListaIngredientes}
                        />
                    ): null
                } 
                </form>
                <div className="d-flex justify-content-between">
                {
                    (estadoFormulario > 1)
                    ?
                    <button 
                        type="button" 
                        className= "btn btn-primary" 
                        onClick={ () =>{ setEstadoFormulario(estadoFormulario - 1)} }
                    
                    >Anterior</button>
                    :
                    null
                }
                {
                    loading ?
                    <button 
                        type="button" 
                        className={"btn " +color}
                        onClick={siguienteForm}
                    
                    >{boton}</button> : null
                }
                </div>
            </FormDiv>
        </div>
        </Layout>
     );
}
 
export default CrearReceta;