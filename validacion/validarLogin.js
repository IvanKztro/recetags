export default function validarLogin(valores){
    let errores = {}
    if(!valores.correo)
    {
        errores.correo = "Correo obligatorio perroooo";
    }else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.correo) ) 
    {
        errores.correo = "Correo no válido"
    }
    if(!valores.password)
    {
        errores.password = "Contraseña obligatoria";
    }else if( valores.password.length < 5 ) {
        errores.password = 'El password debe ser de al menos 5 caracteres'
    }
        

    return errores;
}
