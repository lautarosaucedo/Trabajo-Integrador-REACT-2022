import { Pagination } from "@mui/material"
import './Paginador.css'
const Paginador = ({
    cantidadPaginas,
    onChange
}) => {
    const cambiaPagina = (_evento, pagina) => {
        onChange(pagina);
    };
    
    return (
      
        <Pagination className="style"
            size="large" 
            count={cantidadPaginas}
            color="secondary"
            onChange={cambiaPagina}
        />
    );
}

export default Paginador;



