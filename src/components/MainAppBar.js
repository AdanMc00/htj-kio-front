import React, { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import PdfDoc from '../KIO.pdf'
import PdfDoc2 from '../Linux.pdf'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))
export default function ButtonAppBar () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Bienvenido!
          </Typography>
          <Button href={'http://localhost:8080/auth/google/callback'} color="inherit">Iniciar Sesion</Button>
          <a href={PdfDoc} target="_blank"> <Button color="secondary"> PDF1 </Button> </a>
          <a href={PdfDoc2} target="_blank"> <Button color="secondary"> PDF2 </Button> </a>
        </Toolbar>
      </AppBar>
    </div>
  )
}



