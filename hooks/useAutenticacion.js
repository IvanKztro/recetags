import React, {useState, useEffect} from 'react';
import axios from 'axios'

function useAutenticacion(){
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const auntenticarUsuario = async() =>{
            try {
                const response = await axios.get("http://localhost:4000/api/auth/");
                console.log("frontend");
                console.log(response);
                if(response){
                    setUsuario(response)
                }else{
                    setUsuario(null)
                }
            } catch (error) {
                console.log(error)
            }
        }
        auntenticarUsuario();
    }, [])

    return usuario;
}
 
export default useAutenticacion;