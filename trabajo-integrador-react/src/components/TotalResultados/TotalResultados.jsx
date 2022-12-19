import './TotalResultados.css'

export const TotalResultados = ({
    result,
    cantidadPaginas
})=>{
    
    return(
       <section className="style"  >
        
        <b >Está viendo: 10 noticias en {cantidadPaginas} paginas de {result}  resultados</b> 
        </section>
    )
}

export default TotalResultados;