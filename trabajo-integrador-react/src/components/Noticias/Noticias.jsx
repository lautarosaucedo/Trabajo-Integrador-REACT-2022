import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { DateTime } from "luxon";
import Typography from '@mui/material/Typography';
import { DEFAULT_IMAGE, NA } from '../../libs/constantes';

import CardActionArea from '@mui/material/CardActionArea';
import './Noticias.css';



const Noticias = ({
  noticia
}) => {
        const date = DateTime.fromISO(noticia.publishedAt).toLocaleString(DateTime.DATE_MED);
        const time = DateTime.fromISO(noticia.publishedAt).toLocaleString(DateTime.TIME_SIMPLE);
   
  return (
    <Card sx={{ width: 1000, marginBottom: 10, height: 400}} >
      <CardActionArea href={noticia.url}>
        <CardMedia
          className='imagen'
          component="img"
          height="200"
          width={800}
          image={noticia.urlToImage === NA ? DEFAULT_IMAGE : noticia.urlToImage}
          
        />
        <CardContent sx={{ width: 500, height: 100}}>
          
          <Typography gutterBottom variant="h5" component="div">
                {noticia.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {noticia.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Publicado el: {date} a las {time} hs
            </Typography>
        </CardContent>
        
      </CardActionArea>
    </Card>
  );
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



