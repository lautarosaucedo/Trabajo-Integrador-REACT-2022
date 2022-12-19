
import * as React from 'react';
import { DateTime } from "luxon";
import { DEFAULT_IMAGE, NA } from '../../libs/constantes.js';
import './Noticias.css';



const Noticias = ({
  noticia
}) => {
        const date = DateTime.fromISO(noticia.publishedAt).toLocaleString(DateTime.DATE_MED);
        const time = DateTime.fromISO(noticia.publishedAt).toLocaleString(DateTime.TIME_SIMPLE);
        
        return (
          <section >
              <div class="noticia">
                    <div>
                      <a href={noticia.url} >
                          <img class="imagen" src={noticia.urlToImage === NA ? DEFAULT_IMAGE : noticia.urlToImage}  alt="Not Found" />
                      </a>
                    </div> 
                    <div className='title'>
                      <a href={noticia.url} >
                        <h1 className='title' >{noticia.title}</h1>
                      </a>
                    </div>
                    <div>
                      <p className='descripcion'>{noticia.description}</p>
                    </div>
                    <div className='date'>
                      <b className='date'>Publicado el: {date} a las {time} hs</b>
                    </div>
                    
                    <div class="reset"></div>
              </div>
          </section>
      )
}

export const ListaNoticias = ({ noticias }) => {
  return (
    <section style={{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: '20px',
    }}>
      {
        noticias.map((noticia) => {
          return <Noticias noticia = {noticia} />
      })
      }
    </section>
  )
}


export default Noticias;



