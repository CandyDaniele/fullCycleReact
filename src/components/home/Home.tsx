import React from 'react';
import { CssBaseline, Container, Typography } from '@material-ui/core';

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="md"
        style={{
          backgroundColor: '#ffffff',
          height: '350px',
          borderRadius: '10px',
          marginTop: '50px',
          padding: '15px',
        }}
      >
        <Typography component="div">
          <h1>Home</h1>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
