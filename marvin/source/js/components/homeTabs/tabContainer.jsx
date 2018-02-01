import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';  
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';


export default class TabContainer extends Component {
  static propTypes  = {
    children: PropTypes.node.isRequired,
  };
  render(){
    return(
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    )
  }
}
