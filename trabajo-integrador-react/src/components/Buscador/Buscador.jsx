import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


const Buscador = ({onBuscar}) => {
  //el estado de busqueda va ser interdo de el hijo buscador
  const [criterioBusqueda, setCriterioBusqueda] = useState('');
  
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
        //
        value={criterioBusqueda}
        onChange={(e) => {
          setCriterioBusqueda(e.target.value)
        } }
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search"
        //escucga un evenntp, es el metodo de conectar con la paginaBuscador
        onClick={() => {
          if(criterioBusqueda.length > 2) {
            onBuscar(criterioBusqueda)
          }
        }}
      >
        <SearchIcon />
      </IconButton>

    </Paper>
  );
}

export default Buscador
