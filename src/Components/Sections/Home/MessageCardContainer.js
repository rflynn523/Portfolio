import React from 'react';
import { Container, Grid } from '@material-ui/core';
import MessageFlipCard from './MessageFlipCard';

const MessageCardContainer = ({ message }) => {
  return (
    <Container>
      <Grid container spacing={1}>
        {message.split('').map((letter, index) => (
          <Grid item key={index}>
            <MessageFlipCard letter={letter} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MessageCardContainer;
