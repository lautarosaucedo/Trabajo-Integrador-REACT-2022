import { Container } from "@mui/material";
import { useState } from "react";
import Buscador from "../components/Buscador/Buscador";
import Loading from "../components/Loading/Loading";
import{ ListaNoticias } from "../components/Noticias/Noticias";

import { getListaNoticias } from "../Servicios/Noticias";


const PaginaBuscador = () => {
    //estado donde recibe las noticias de la api
    const [noticias, setNoticias] = useState();
    //estado de louding
    const [isLoading, setIsLoading] = useState(false);

    const onBuscar = async (criterioBusqueda) => {
        setIsLoading(true);
        const { Search : noti } = await getListaNoticias(criterioBusqueda);
        setNoticias(noti);
        setIsLoading(false);
        console.log(noticias);
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
            
            <ListaNoticias /> 
           
        </Container>
            
        
    )
}

export default PaginaBuscador;