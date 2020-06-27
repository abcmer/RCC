import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GoogleLogin } from 'react-google-login';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import './TopNav.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'black',
    color: 'black'
  },
  appBar: {
    backgroundColor: '#222628',
    // color: 'white'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TopNav(props) {
  const {appName, user, setUser} = props;
  const classes = useStyles();
  let loginText
  if (user) {
    loginText = 'LOGOUT'
  } else {
    loginText = 'LOGIN'
  }

  const responseGoogle = (response) => {
    const user = {
      ...response.profileObj,
      ...response.tokenObj
    }
    console.log(user)
    setUser(user)
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {appName}
          </Typography>
          {!user? (
            <GoogleLogin
              clientId="949347339047-8s7hh1v5k9m32g857piefi0omolkr6t6.apps.googleusercontent.com"
              buttonText="Logout"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          ) : (
            <GoogleLogin
              clientId="949347339047-8s7hh1v5k9m32g857piefi0omolkr6t6.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          )                 
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}
