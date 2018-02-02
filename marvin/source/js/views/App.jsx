import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { routeCodes } from 'constants/routes';
import Menu from 'components/global/Menu';
import Home from 'views/Home';
import People from 'views/People';
import Project from 'views/Project';
import NotFound from 'views/NotFound';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
const theme = createMuiTheme();

class App extends Component {
  render() {
    return (
        <Row>
          <Col xs={12} md={12}>
            <MuiThemeProvider theme={theme}>
              <div className='App'>
                <Menu/>
                <div className='Page'>
                  <Switch>
                    <Route path={ routeCodes.HOME } exact       component={ Home } />
                    <Route path={ routeCodes.PEOPLE }           component={ People } />
                    <Route path={ routeCodes.PROJECT+':param' } component={ Project } />
                    <Route path='*'                             component={ NotFound } />
                  </Switch>
                </div>
              </div>
            </MuiThemeProvider>
          </Col>
        </Row>
        );
  }
}

export default hot(module)(App);
