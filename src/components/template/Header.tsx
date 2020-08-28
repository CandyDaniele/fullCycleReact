import React from 'react';
import { Button, makeStyles, Toolbar, Typography, AppBar } from '@material-ui/core';
import { Link } from 'react-router-dom';


/* ignore jslint*/
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));



export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            React Challenge
          </Typography>
          <Button color="inherit" component={Link} to={'/'}>Home</Button>
          <Button color="inherit" component={Link} to={'/usuarios'}>Users</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
