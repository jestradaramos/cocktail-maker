import type { NextPage } from 'next'
import NavBar from '../components/NavBar/NavBar'
import DrinkCard from '../components/DrinkCard/DrinkCard'
import Grid from '@mui/material/Grid';
import data from '../testdata.json'

const Home: NextPage = () => {
  let drinks = data.drinks
  return (
    <div >
      <NavBar></NavBar>
      <br></br>
      <Grid container sx={{ px: 2 }} spacing={2}>
        {drinks.map(x => (
          <Grid key={x.id} item xs={4}>
            <DrinkCard drink={x}></DrinkCard>
          </Grid>
        ))}
        {/* <Grid item xs={4}>
        <DrinkCard drinkId='1'></DrinkCard>
        </Grid>
        <Grid item xs={4}>
        <DrinkCard drinkId='2'></DrinkCard>
        </Grid>
        <Grid item xs={4}>
          <DrinkCard drinkId='3'></DrinkCard>
        </Grid>
        <Grid item xs={4}>
        <DrinkCard drinkId='4'></DrinkCard>
        </Grid>
        <Grid item xs={4}>
        <DrinkCard drinkId='5'></DrinkCard>
        </Grid>
        <Grid item xs={4}>
          <DrinkCard drinkId='6'></DrinkCard>
        </Grid> */}
      </Grid>

    </div>
  )
}

export default Home
