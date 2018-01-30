import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from 'constants/routes';

import { Row, Col } from 'react-flexbox-grid';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getInfo } from 'actions/info';

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
    height: 115,
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

@connect(state => ({
  loadingInfo: state.info.get('loadingInfo'),
  errorInfo: state.info.get('errorInfo'),
  dataInfo: state.info.get('dataInfo'),   
}))

class Stats extends Component {
   constructor(props) {
    super(props);
    this.state = { date : '' } ;
  }
  static propTypes = {
    classes: PropTypes.object.isRequired,
    name: PropTypes.string,
    errorInfo: PropTypes.string,
    loadingInfo: PropTypes.bool,
    dataInfo: PropTypes.object,

  }

  componentWillMount() {
    let mode;
    var f=new Date();
    let month = ["Enero","Febrero","Marzo",
                 "Abril","Mayo","Junio",
                 "Julio","Agosto","Septiembre",
                 "Octubre","Noviembre","Diciembre"]
    let day = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]
    let date = day[f.getDay()] + ", " + f.getDate() + " de " + month[f.getMonth()] + " de " + f.getFullYear()

    this.setState({ date });
    
    const { dispatch,
            dataInfo } = this.props;
    if (!dataInfo) {
        dispatch(getInfo());
      }  
  }
  renderDataInfo() {
    const {
      dataInfo,
    } = this.props;

    return dataInfo.data.data.count;
  }
  
    render(){
      const { 
        classes, 
        name,
        dataInfo,
        errorInfo,
        loadingInfo,
        state
      } = this.props;
      const bull = <span className={classes.bullet}>•</span>;
      return(
        <Col xs={12}>        
          <Row>
            <Col xs={3}>        
              <Card className={classes.media}>
                <CardContent>
                  <Typography className={classes.title}>{ this.state.date }</Typography>
                  <Typography type="headline" component="h2">
                  Haciendo realidad proyectos creativos.
                  </Typography>
                  <Typography className={classes.pos}>adjective</Typography>
                </CardContent>
              </Card>        
            </Col>
            <Col xs={3}>        
              <Card className={classes.media}>
                <CardContent>
                  <Typography className={classes.title}>PROYECTOS ACTIVOS</Typography>
                  <Typography type="headline" component="h2">
                    { dataInfo && this.renderDataInfo() }
                  </Typography>
                  <Typography className={classes.pos}>adjective</Typography>
                </CardContent>
              </Card>        
            </Col>
            <Col xs={3}>        
              <Card className={classes.media}>
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
              <Card className={classes.media}>
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