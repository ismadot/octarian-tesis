import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import { Row, Col } from 'react-flexbox-grid';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  fullTextField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  textLabel:{
    fontSize: "0.7em",
  },
  menu: {
    width: 200,
  },
});

class RegisterProject extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };
  state = {
    name: '',
    age: '',
    multiline: '',
    currency: '',
    tittle:'',
    image:'',
  };
 handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render() {
    const { classes } = this.props;
    const { 
      name,
      tittle
       } = this.state;
    return (
      <Row>
        <Col xs={12}>
          <Row center="xs">
          <Col xs={6}>
              <br/>
               <Typography type="display1" align="center" color='inherit' >
                Regista tu proyecto una idea novedosa que pueda cambiar el mundo<br/>
              </Typography>
              <hr/>
              <br/>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel className={classes.textLabel} htmlFor="tittle">Titulo</InputLabel>
                  <Input id="tittle" value={this.state.name} fullWidth onChange={this.handleChange('name')} />
                </FormControl>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel className={classes.textLabel} htmlFor="image">Imagen</InputLabel>
                  <Input  id="image" value={this.state.name} fullWidth onChange={this.handleChange('name')} />
                </FormControl>
                  <Input type="file"  id="solas" fullWidth onChange={this.handleChange('name')} />

                 <TextField id="Description" rows="10" label="Descripcion" multiline value={this.state.multiline} onChange={this.handleChange('multiline')} className={classes.fullTextField } margin="normal" fullWidth />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default withStyles(styles)(RegisterProject);