import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { GoogleLogin, useGoogleLogin } from 'react-google-login'
import { Context } from '../Context'
import { Link } from "react-router-dom";
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
}));



export default function ButtonAppBar() {
  const classes = useStyles();
  const { user , setUser} = useContext(Context)
  // const { signIn, loaded } = useGoogleLogin({
  //   onSuccess  })
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
         <Typography variant="h6" className={classes.title}>
            Bienvenido!
          </Typography>
          <GoogleLogin
            clientId='262875674340-vgig3ad4jrmlvke8hj4qerrpgsbfv032.apps.googleusercontent.com'
            buttonText="Login"
            onSuccess={response=> {setUser(response)
              console.log(user)
            }}

            onFailure={response=> console.log(response)}
            cookiePolicy={'single_host_origin'}

          />
          <Link to="/ideas">
            <Button color="inherit">Iniciar Sesion</Button>
          </Link>

        </Toolbar>
      </AppBar>
    </div>
  );
}



