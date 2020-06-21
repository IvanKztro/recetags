export default function validarCrearCuenta(valores) {

    let errores = {};

    

    // Validar el nombre del usuario
    if(!valores.titulo) {
        errores.titulo = "El Nombre es obligatorio";
    }

    // validar empresa
    if(!valores.descripcion) {
        errores.descripcion = "La descripcion de la receta es obligatoria"
    }
    
   


    return errores;
}