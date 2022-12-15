import { Container } from "@mui/material";
import { useState } from "react";
import Buscador from "../components/Buscador/Buscador";
import Loading from "../components/Loading/Loading";
import{ ListaNoticias } from "../components/Noticias/Noticias";
import Paginador from "../components/Paginador/Paginador";

import { getListaNoticias} from "../Servicios/Noticias";


const PaginaBuscador = () => {
    //estado donde recibe las noticias de la api
    const [noticias, setNoticias] = useState();
    //estado de louding
    const [isLoading, setIsLoading] = useState(false);
    //estado interno de totalResult
    const[cantidadPaginas, setCantidadPaginas] = useState(1);
   //nuevo estado de la pagina actual por defaul es 1
   const [paginaAactual, setPaginaActual] = useState(1);

    const onBuscar = async (criterioBusqueda) => {
        setIsLoading(true);
        const { Search : noti, totalResults} = await getListaNoticias(criterioBusqueda, paginaAactual);
        setNoticias(noti);
        setCantidadPaginas(Math.ceil(parseInt(totalResults)/10))
        setIsLoading(false);
        
       
    };
    console.log(noticias);
    if(isLoading){
        return (<Container maxWidth='sm'>
                    <Loading/>
                </Container>
        )
    }
    return (
        //metodo onBuscar se encarga de conectar la pagina padre con el hijo(paginabuscador con buscador)
        <Container maxWidth='sm'>
            
            <Buscador onBuscar={onBuscar} />
            
            {noticias && < ListaNoticias />} 
            {noticias && <Paginador cantidadPaginas = {cantidadPaginas}/> }
           
        </Container>
            
        
    )
}

export default PaginaBuscador;