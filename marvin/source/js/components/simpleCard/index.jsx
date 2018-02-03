import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { Row, Col } from 'react-flexbox-grid';

const styles = {
  card: {
    maxWidth: 200,
  },
  media: {
    height: 200,
  },
  
};

function SimpleCard(props) {
  const { 
    classes,
    elements
   } = props;
  return (
    <Col xs={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={elements.image}
          title={elements.name}
        />
        <CardContent>
          <Typography type="headline" component="h2">
            {elements.name}
          </Typography>
          {/*
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          */}
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Leer mas
          </Button>
        </CardActions>
      </Card>
    </Col>
  );
}

SimpleCard.propTypes = {
  classes : PropTypes.object.isRequired,
  elements:PropTypes.object
};

export default withStyles(styles)(SimpleCard);
