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
          <Grid item xs={12} sm={4} md={4} xl={4}>
            <Paper className={classes.paper}>
              <img width={'100%'} src='https://picsum.photos/200?random=1' alt='img1'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={4} xl={4}>
            <Paper className={classes.paper}>
              <img width={'100%'} src='https://picsum.photos/200?random=2' alt='img2'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={4} xl={4}>
            <Paper className={classes.paper}>
              <img width={'100%'} src='https://picsum.photos/200?random=3' alt='img3'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </container>

  )
}
