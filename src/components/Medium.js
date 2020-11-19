import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 15
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

export default function CenteredGrid () {
  const classes = useStyles()
  return (
    <container>
      <div className={classes.root}>
        <Grid container spacing={5}>
          <Grid item xs={12} xl={4}>
            <Paper className={classes.paper}>
              <img src='https://picsum.photos/200?random=1' alt='img1'/>
              <p>jhdsahjdsajhbdjh cdsjhfds</p>
            </Paper>
          </Grid>
          <Grid item xs={12} xl={4}>
            <Paper className={classes.paper}>
              <img src='https://picsum.photos/200?random=2' alt='img2'/>
              <p>jhdsahjdsajhbdjh cdsjhfds</p>
            </Paper>
          </Grid>
          <Grid item xs={12} xl={4}>
            <Paper className={classes.paper}>
              <img src='https://picsum.photos/200?random=3' alt='img3'/>
              <p>jhdsahjdsajhbdjh cdsjhfds</p>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </container>

  )
}
