const API_KEY = '243a279adf084331a33c01e522a596cd';

const OMDB_API = 'https://newsapi.org';


export const getListaNoticias = async (criterioBusqueda, paginaActual) => {
    const respuesta = await fetch(`${OMDB_API}?apiKey=${API_KEY}&q=${criterioBusqueda}&page=${paginaActual}`);
    const noticias = await respuesta.json();
    return  noticias;
    
}
