import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL_PRODUCTION,
    
})
//console.log("axios baseURL: "+process.env.REACT_APP_BACKEND_URL_PRODUCTION)



export default clienteAxios;

