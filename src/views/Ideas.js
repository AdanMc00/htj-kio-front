import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import AppBarLoged from '../components/AppBarLoged'
import Cards from '../components/Cards'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Modal from '../components/Modal'
const style = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};
export default function SimpleContainer () {
  return (
    <React.Fragment>
      <CssBaseline/>
      <AppBarLoged style={style} />
      <Grid container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            style={{ marginTop: 15 }}
            spacing={2}
      >
        <Grid item xs={8} sm={3} md={2}>
        <Button fullWidth variant="contained" style={style}>Mis Ideas</Button>
        </Grid>
        <Grid  item xs={8} sm={3} md={2}>
        <Button fullWidth variant="contained" style={style}>Todas las Ideas</Button>
        </Grid>
        <Grid item xs={8} sm={3} md={2}>
        <Modal />
        </Grid>
      </Grid>

      <Grid maxWidth="md" style={{ height: 100 }}>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center">
        <Cards/>
      </Grid>
    </React.Fragment>
  )
}