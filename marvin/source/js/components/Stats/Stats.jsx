import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from 'constants/routes';

import { Row, Col } from 'react-flexbox-grid';

import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';

const styles = theme => ({
   bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  card: {
    maxWidth: 200,
  },
  media: {
    height: 194,
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});


class Stats extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    name: PropTypes.string,
    
  }
  
  state = { expanded: false };
  
  
    render(){
      const { classes, name } = this.props;
      const bull = <span className={classes.bullet}>•</span>;
      return(
        <Col xs={12}>        
          <Row>
            <Col xs={3}>        
              <Card >
                <CardContent>
                  <Typography className={classes.title}>Word of the Day</Typography>
                  <Typography type="headline" component="h2">
                    be{bull}nev{bull}o{bull}lent
                  </Typography>
                  <Typography className={classes.pos}>adjective</Typography>
                  <Typography component="p">
                    well meaning and kindly.<br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
              </Card>        
            </Col>
            <Col xs={3}>        
              <Card >
                <CardContent>
                  <Typography className={classes.title}>Word of the Day</Typography>
                  <Typography type="headline" component="h2">
                    be{bull}nev{bull}o{bull}lent
                  </Typography>
                  <Typography className={classes.pos}>adjective</Typography>
                  <Typography component="p">
                    well meaning and kindly.<br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
              </Card>        
            </Col>
            <Col xs={3}>        
              <Card >
                <CardContent>
                  <Typography className={classes.title}>Word of the Day</Typography>
                  <Typography type="headline" component="h2">
                    be{bull}nev{bull}o{bull}lent
                  </Typography>
                  <Typography className={classes.pos}>adjective</Typography>
                  <Typography component="p">
                    well meaning and kindly.<br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
              </Card>        
            </Col>
            <Col xs={3}>        
              <Card >
                <CardContent>
                  <Typography className={classes.title}>Word of the Day</Typography>
                  <Typography type="headline" component="h2">
                    be{bull}nev{bull}o{bull}lent
                  </Typography>
                  <Typography className={classes.pos}>adjective</Typography>
                  <Typography component="p">
                    well meaning and kindly.<br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
              </Card>        
            </Col>        
          </Row>
        </Col>        
      );
    }
  }

export default withStyles(styles)(Stats);