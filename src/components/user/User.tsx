import React, { useEffect, useState } from 'react';
import {
  CssBaseline,
  Container,
  Typography,
  Avatar,
  Grid,
  Paper,
  makeStyles,
} from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

export default function User() {
  const [users, setUsers] = useState([
    { id: 0, first_name: '', last_name: '', avatar: '' },
  ]);

  useEffect(() => {
    async function fetchData() {
      await axios.get('https://reqres.in/api/users?per_page=12').then((res) => {
        setUsers(res.data.data);
      });
    }

    fetchData();
  }, []);

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="md"
        style={{
          backgroundColor: '#ffffff',
          height: '1200px',
          borderRadius: '10px',
          marginTop: '50px',
          padding: '15px',
        }}
      >
        <Typography component="div">
          <h1>Users</h1>
          <ul>
            {users.map((user) => {
              return (
                <div className={classes.root} key={user.id}>
                  <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                      <Grid item>
                        <Avatar alt={user.first_name} src={user.avatar} />
                      </Grid>
                      <Grid item xs zeroMinWidth>
                        <Typography
                          noWrap
                        >{`${user.first_name} ${user.last_name}`}</Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </div>
              );
            })}
          </ul>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
