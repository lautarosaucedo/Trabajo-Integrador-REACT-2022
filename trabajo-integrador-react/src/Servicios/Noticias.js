const API_KEY = '243a279adf084331a33c01e522a596cd';

const OMDB_API = 'https://newsapi.org/v2/everything';


export const getListaNoticias = async (criterioBusqueda, paginaActual) => {
    const respuesta = await fetch(`${OMDB_API}?q=${criterioBusqueda}&page=${paginaActual}&apiKey=${API_KEY}`);
    const noticias = await respuesta.json();
    return  noticias;
    
}
