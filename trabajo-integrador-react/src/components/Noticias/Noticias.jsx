import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DEFAULT_IMAGE, NA } from '../../libs/constantes';









const Noticias = ({
  noticia
}) => {
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={noticia.urlToImage === NA ? DEFAULT_IMAGE : noticia.urlToImage}
        
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          {noticia.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {noticia.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={noticia.url}>Ver más</Button>
      </CardActions>
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



