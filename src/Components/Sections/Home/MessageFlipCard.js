import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    width: 100,
    height: 100,
    position: 'relative',
    cursor: 'pointer',
    transformStyle: 'preserve-3d',
    transition: 'transform 3s',
  },
  front: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D3D3D3',
    transform: 'rotateX(0)',
  },
  back: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2D3032',
    color: '#fff',
    transform: 'rotateX(180deg)',
  },
  hidden: {
    visibility: 'hidden',
  },
});

const MessageFlipCard = ({ letter }) => {
  const classes = useStyles();
  const [flipped, setFlipped] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleFlip = () => {
    if (!clicked) {
      setFlipped(true);
      setClicked(true);
    }
  };

  return (
    <Card
      className={classes.card}
      onMouseEnter={handleFlip}
    //   style={{ transform: flipped ? 'rotateX(360deg)' : 'rotateX(0)' }}
    >
      <CardContent className={`${classes.back} ${flipped ? classes.hidden : ''}`}>
        {/* Front side should be blank */}
      </CardContent>
      <CardContent className={`${classes.front} ${flipped ? '' : classes.hidden}`}>
        <Typography variant="h6">{letter}</Typography>
        {/* {letter} */}
      </CardContent>
    </Card>
  );
};

export default MessageFlipCard;
