import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from 'constants/routes';

import { Row, Col } from 'react-flexbox-grid';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import  Dialog, {
        DialogActions,
        DialogContent,
        DialogContentText,
        DialogTitle,
  } from 'material-ui/Dialog';
  import TextField from 'material-ui/TextField';


const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class ButtonAppBar extends Component  {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };
  state = {
    open: false,
    password:'',
    name:'',
  };
    handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render(){
    const { classes,fullScreen } = this.props;
    return (
      <AppBar position="static" className={classes.root}>
        <Col md={12} xs={12}>
          <Toolbar>
            <Col md={4} xs={4}>
              <Row start='xs'>
                <NavLink activeClassName='Menu-link--active' className='Menu-link--active' to={ routeCodes.HOME }>
                  <Col md={4} xs={4} >
                    <Button color="inherit">explorar</Button>
                  </Col>
                </NavLink>
                <Col md={8} xs={8}>
                  <NavLink activeClassName='Menu-link--active' className='Menu-link--active' to={ routeCodes.REGISTERPROJECT }>
                  <Button color="inherit">empieza tu proyecto</Button>
                  </NavLink>
                </Col>
              </Row>
            </Col>
            <Col xs={4} md={4}>
             <Row center="xs">
                <Col xs={6} md={6}>
                  <Typography type="title" color="inherit" className={classes.flex}>
                  OVUM
                  </Typography>
                </Col>
             </Row>
            </Col>
            <Col xs={4} md={4}>
              <Row end="xs">
                <Col xs={12} md={12}>
                  <Button onClick={this.handleClickOpen} color="inherit">Login</Button>
                  <Button onClick={this.handleClickOpen} color="inherit">registrar</Button>
                </Col>
              </Row>
            </Col>
          </Toolbar>
        </Col>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullScreen={fullScreen}
        >
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <DialogContentText>
              para hacer login por favor ingrese su email y contrasena
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email"
              type="email"
              fullWidth
              onChange={this.handleChange('name')}
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Contrasena"
              type="password"
              fullWidth
              onChange={this.handleChange('pasword')}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </AppBar>
    );
  }
}


export default withStyles(styles)(ButtonAppBar);
    {/*
      <div className='Menu'>
        <div className='Menu-logo'>
          <a href='https://work.co' target='_blank' rel='noreferrer noopener' aria-label='Work & Co website'>
            <img
              src={ workAndCoLogoImg }
              alt='Work & Co logo'
            />
          </a>
        </div>
        <div className='Menu-links'>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            exact
            to={ routeCodes.HOME }
          >
            Home
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to={ routeCodes.PEOPLE }
          >
            API data example
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to='/404'
          >
            404
          </NavLink>
        </div>
      </div>*/}
