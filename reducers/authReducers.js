//Cada
const initialState= {
    usuario: {},
    autenticado: false,
    error: null,
    mensaje: null,
    token: null
}

export default function (state = initialState, action){

    switch(action.type)
    {
        default:
            return state;
    }
}
