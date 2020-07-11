import clienteAxios from './axios';

const tokenAuth = (token) =>{
    // console.log("token en axios: ",token)
    if(token)
        clienteAxios.defaults.headers.common['x-auth-token'] = token;
    else
        delete clienteAxios.defaults.headers.common['x-auth-token'];

        // console.log(clienteAxios.defaults.headers.common['x-auth-token']);
}

export default tokenAuth;