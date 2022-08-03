import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function OutlinedCard(props: any) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {props.drink.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.drink.year}
          </Typography>
          <Typography variant="body2">
            {props.drink.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={`/drank/${props.drink.id}`}>
            <Button size="small">Recipe</Button>
          </Link>

        </CardActions>
      </Card>
    </Box>
  );
}
