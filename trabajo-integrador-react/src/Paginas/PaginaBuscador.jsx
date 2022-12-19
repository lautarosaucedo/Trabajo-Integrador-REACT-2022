import { Container } from "@mui/material";
import { useState } from "react";
import Buscador from "../components/Buscador/Buscador";
import { Footer } from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";
import { Navbar } from "../components/navbar/navbar";
import{ ListaNoticias } from "../components/Noticias/Noticias";
import Paginador from "../components/Paginador/Paginador";
import { getListaNoticias } from "../Servicios/Noticias";
import { TotalResultados } from "../components/TotalResultados/TotalResultados";


const PaginaBuscador = () => {
    //estado donde recibe las noticias de la api
    const [noticias, setNoticias] = useState();
    //estado de louding
    const [isLoading, setIsLoading] = useState(false);
    //estado interno de totalResult
    const[cantidadPaginas, setCantidadPaginas] = useState(1);
    const [criterioBusqueda, setCriterioBusqueda] = useState('');
    const [result, setResult] = useState(1);
    

    const onBuscar = async (criterioBusqueda, pagina=1) => {
        setIsLoading(true);
        const { articles : noti, totalResults} = await getListaNoticias(criterioBusqueda, pagina);
       
        setCriterioBusqueda(criterioBusqueda);
        setNoticias(noti);
     
        setResult(totalResults);
        setCantidadPaginas(Math.ceil(parseInt(totalResults)/10));
        setIsLoading(false);
       
    };
 
    
    const onCambioPagina = (pagina) => {        
        onBuscar(criterioBusqueda, pagina);
    };


    return (
     
        //metodo onBuscar se encarga de conectar la pagina padre con el hijo(paginabuscador con buscador)
        <Container maxWidth='sm'>
            <Navbar/>
            <Buscador onBuscar={onBuscar} />
            {isLoading && <Loading /> }
            {noticias && < TotalResultados result={result} cantidadPaginas={cantidadPaginas}/>}
            {noticias && < ListaNoticias noticias={noticias}/>} 
            {noticias && < Paginador cantidadPaginas={cantidadPaginas} onChange={onCambioPagina}/>}
            {!noticias && <Footer/>}
  
        </Container>
            
        
    )
}

export default PaginaBuscador;
