import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DEFAULT_IMAGE, NA } from '../../libs/constantes';
const Noticias = ({
  noticias
}) => {
  console.log(noticias);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={noticias.urlToImage === NA ? DEFAULT_IMAGE : noticias.urlToImage}
        alt={noticias.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {noticias.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
}

export const ListaNoticias = ({ noticias }) => {
  return (
        noticias?.map((noticia) => {
          return <Noticias noticia = {noticia}/>
      })
      
  )
}


export default Noticias;