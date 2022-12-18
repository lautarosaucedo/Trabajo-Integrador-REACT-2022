import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './Buscador.css';

const Buscador = ({onBuscar}) => {
  //el estado de busqueda va ser interdo de el hijo buscador
  const [criterioBusqueda, setCriterioBusqueda] = useState('');
  
  return (
    <Paper
      className='style'
      component="div"
      sx={{ p: '10px 15px', display: 'flex', alignItems: 'center', width: 520, marginTop:10, }}
    >
      
      <InputBase
        sx={{ ml: 5, flex: 5}}
        font-size="large"
        placeholder="Buscar Noticias"
        inputProps={{ 'aria-label': 'Buscar Noticias' }}
        value={criterioBusqueda}
        role="searchbox"
        onChange={(e) => { 
          setCriterioBusqueda(e.target.value)
        }}
        
      />
      
      <IconButton
        type="button"
        sx={{ p: '10px' }}
        aria-label="search"
        onClick={() => {
          if(criterioBusqueda.length > 2) {
            onBuscar(criterioBusqueda)
          }
        }}
        role="button"
      >
        <SearchIcon />
      </IconButton>

    </Paper>
  );
};

export default Buscador
