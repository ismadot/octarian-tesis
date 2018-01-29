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

function ButtonAppBar(props) {
  const { classes } = props;
  return (
      <AppBar position="static" className={classes.root}>
        <Col md={12} xs={12}>
          <Toolbar>
            <Col md={4} xs={4}>
              <Row start='xs'>
                <NavLink activeClassName='Menu-link--active' className='Menu-link' exact to={ routeCodes.HOME }>
                  <Col md={4} xs={4} >
                    <Typography type="title" color="inherit" className={classes.flex}>
                      explorar
                    </Typography>
                  </Col>
                </NavLink>
                <Col md={8} xs={8}>
                  <Typography type="title" color="inherit" className={classes.flex}>
                        empieza tu proyecto
                  </Typography>
                </Col>
              </Row>
            </Col>
            <Col xs={4} md={4}>
             <Row center="xs">
                <Col xs={6} md={6}>
                  <Typography type="title" color="inherit" className={classes.flex}>
                    ovum
                  </Typography>
                </Col>
             </Row>
            </Col>
            <Col xs={4} md={4}>
              <Row end="xs">
                <Col xs={12} md={12}>
                  <Button color="inherit">Login</Button>
                </Col>
              </Row>
            </Col>
          </Toolbar>
        </Col>
      </AppBar>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

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
