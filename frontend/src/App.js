import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import { Typography } from '@material-ui/core';
import  CustomCard  from './components/CustomCard/CustomCard';

function App() {
  return (
    <div className="App">
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className='Title'>Dumb Bitch Forgot Again</Typography>
        </Toolbar>
      </AppBar>

      <CustomCard></CustomCard>
    </div>
  );
}

export default App;
