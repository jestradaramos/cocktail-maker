import React from 'react';
import { Card, CardContent, Typography, CardActionArea, CardMedia } from '@material-ui/core';
import './CustomCard.css'
import cocktail from '../../assets/cocktail.png'

function CustomCard() {
  return (
    <Card className="CustomCard">
      <CardActionArea>
        <CardMedia className='Media'
          component="img"
          image={cocktail}
          title="Cocktails"
        />
        <CardContent>
          <Typography>Cocktails</Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}

export default CustomCard;
