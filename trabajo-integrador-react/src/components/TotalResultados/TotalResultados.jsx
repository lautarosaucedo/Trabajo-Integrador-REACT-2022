

export const TotalResultados = ({
    result,
    cantidadPaginas
})=>{
    
    return(
       <div>
        Está viendo: 10 noticias en {cantidadPaginas} paginas de {result}  resultados
        </div>
    )
}

export default TotalResultados;