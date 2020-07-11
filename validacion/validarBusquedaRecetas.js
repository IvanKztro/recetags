export default function validarBusquedaRecetas(valores){
    let errores = {}
    if(!valores.buscado)
    {
        errores.buscado = "Campo de ingrediente o receta obligatorio ";
    }
        

    return errores;
}
