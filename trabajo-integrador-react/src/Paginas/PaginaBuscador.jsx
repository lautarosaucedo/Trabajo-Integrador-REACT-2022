import { Container } from "@mui/material";
import { useState } from "react";
import Buscador from "../components/Buscador/Buscador";
import Loading from "../components/Loading/Loading";
import{ ListaNoticias } from "../components/Noticias/Noticias";
import Paginador from "../components/Paginador/Paginador";
import { getListaNoticias } from "../Servicios/Noticias";



const PaginaBuscador = () => {
    //estado donde recibe las noticias de la api
    const [noticias, setNoticias] = useState();
    //estado de louding
    const [isLoading, setIsLoading] = useState(false);
    //estado interno de totalResult
    const[cantidadPaginas, setCantidadPaginas] = useState(1);
    const [criterioBusqueda, setCriterioBusqueda] = useState('');

    const onBuscar = async (criterioBusqueda, pagina=1) => {
        setIsLoading(true);
        const { articles : noti, totalResults } = await getListaNoticias(criterioBusqueda, pagina);
        setCriterioBusqueda(criterioBusqueda);
        setNoticias(noti);
        setCantidadPaginas(Math.ceil(parseInt(totalResults)/10));
        setIsLoading(false);
    };

    const onCambioPagina = (pagina) => {        
        onBuscar(criterioBusqueda, pagina);
    };


    return (
        //metodo onBuscar se encarga de conectar la pagina padre con el hijo(paginabuscador con buscador)
        <Container maxWidth='sm'>
           
            <Buscador onBuscar={onBuscar} />
            {isLoading && <Loading /> }
            {noticias && < ListaNoticias noticias={noticias}/>} 
            {noticias && < Paginador cantidadPaginas={cantidadPaginas} onChange={onCambioPagina}/>}
           
        </Container>
            
        
    )
}

export default PaginaBuscador;
