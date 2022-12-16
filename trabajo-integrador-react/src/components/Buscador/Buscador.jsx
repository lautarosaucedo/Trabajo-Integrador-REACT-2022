import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


const Buscador = ({onBuscar}) => {
  //el estado de busqueda va ser interdo de el hijo buscador
  const [criterioBusqueda, setCriterioBusqueda] = useState('');
  
  return (
    <Paper
      component="div"
      sx={{ p: '3px 5px', display: 'flex', alignItems: 'center', width: 400, marginTop:10 }}
    >
      
      <InputBase
        sx={{ ml: 1, flex: 1 }}
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
