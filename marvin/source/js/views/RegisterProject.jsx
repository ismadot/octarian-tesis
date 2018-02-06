import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

import { Row, Col } from 'react-flexbox-grid';
import FileInput from 'react-simple-file-input';

import Markdown from 'react-markdown';
import 'github-markdown.css'

const styles = theme => ({
  fullTextField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  textLabel:{
    fontSize: "0.7em",
  },

  color: {
    width: 'red',
  }, 
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});
const stylesDropzone={
    height: '200px',
    border: 'rgba(0, 0, 0, 0.54)',
    borderStyle: 'dashed',
    color:'rgba(0, 0, 0, 0.54)',
}
class RegisterProject extends Component {
  constructor(props, context) {
    super(props, context);

  }
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };
  state = {
    name: '',
    age: '',
    multiline: '',
    tittle:'',
    image:[],
    color:'hola',
    openUploadModal: false,
    file:[],
    progressPercent:'',
    cancelButtonClicked:true

  };
    
  fileIsIncorrectFiletype = allowedFileTypes => event =>{
    console.log(allowedFileTypes,event.type)
    //const allowedFileTypes = ["image/png", "image/jpeg", "image/gif"];
    if (allowedFileTypes.indexOf(event.type) === -1) {
      return true;
    } else {
      return false;
    }
  }

  showInvalidFileTypeMessage = file =>{
    window.alert("el archivo seleccionando no cumple con los requerimientos para este campo " + file.type);
  }
  showProgressBar(){
    this.setState({ progressBarVisible: true});
  }

  updateProgressBar = event => {
    this.setState({
      progressPercent: (event.loaded / event.total) * 100
    });
  }
  handleFileSelected=(event, file)=>{
    let reader = new FileReader();
    let IMGfileContents=event.target.result;
    reader.onload=(event)=>{
     let img = document.getElementById("preview")
     img.setAttribute("src", event.target.result)
     img.removeAttribute("hidden")
    }
    reader.readAsDataURL(file)
    this.setState({IMGfileContents, image:file,imageLoad:true});
  }
  handlePDFSelected=(event, file)=>{
    let reader = new FileReader();
    let PDFfileContents=event.target.result;
    
    reader.onload=(event)=>{
     let PDF = document.getElementById("PDFpreview")
     PDF.setAttribute("src", event.target.result)
     PDF.removeAttribute("hidden")
    }
    reader.readAsDataURL(file)
    this.setState({PDFfileContents, pdf:file,PDFLoad:true});
  }  
  onLog = () => {
      console.log(this.state.pdf,this.state.PDFfileContents)
  }

 handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render() {
    const { 
      classes,
     } = this.props;
     const {
      progressPercent,
      imageLoad,
      PDFLoad
     }=this.state
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
                <hr/>
                <br/>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel className={classes.textLabel} htmlFor="image">Imagen</InputLabel>
                  <br/>
                  <br/>
                  <br/>
                    <label >
                      <FileInput
                        id="image"
                        readAs='binary'
                        style={ { display: 'none' } }
                        onLoad={this.handleFileSelected}
                        abortIf={this.cancelButtonClicked}
                        onCancel={this.showInvalidFileTypeMessage}
                        onAbort={this.resetCancelButtonClicked}                          
                        cancelIf={this.fileIsIncorrectFiletype(["image/png", "image/jpeg"])}/>
                         { !imageLoad && 
                          <Col xs={12} >
                            <Row center="xs">
                               <Col xs={6} style={stylesDropzone}>
                                  <span>
                          arrastra una imagen para tu propuesta o has click aqui
                                  </span>
                                </Col>
                              <br/> 
                            </Row>
                          </Col>
                        }
                        <img id="preview" src="#" hidden="true" alt="your image" />
                    </label>
                </FormControl>
            </Col>
          </Row>
          <Row center="xs">
            <Col xs={6}>
                <FormControl fullWidth>
                  <TextField 
                  id="Description" 
                  rows="10" 
                  label="Descripcion" 
                  multiline 
                  value={this.state.multiline} 
                  onChange={this.handleChange('multiline')} 
                  className={classes.textLabel } 
                  margin="normal" fullWidth />
                </FormControl>
            </Col>
          </Row>
          <Row center="xs">
            <Col xs={8} >
              <Row start="xs" style={{overflow: 'auto', maxHeight: 500}}>
                <Markdown  source={ this.state.multiline } escapeHtml={false} />
              </Row>
            </Col>
          </Row>
          <Row center="xs">
            <Col xs={6}>
              <FormControl fullWidth>
                <InputLabel className={classes.textLabel} htmlFor="PDF">Archivo pdf</InputLabel>
                <br/>
                <br/>
                <br/>
                  <label >
                    <FileInput
                      id="PDF"
                      readAs='binary'
                      style={ { display: 'none' } }
                      onLoad={this.handlePDFSelected}                          
                      onCancel={this.showInvalidFileTypeMessage}
                      cancelIf={this.fileIsIncorrectFiletype(["application/pdf"])}/>
                     { !PDFLoad && 
                      <Col xs={12} >
                        <Row center="xs">
                           <Col xs={6} style={stylesDropzone}>
                              <span>
                      arrastra una PDF para tu propuesta o has click aqui
                              </span>
                            </Col>
                          <br/> 
                        </Row>
                      </Col>
                    }
                   { PDFLoad && "[ cambiar archivo ]"}
                    <div style={{clear:"both"}}>
                      <iframe style={{width:"100%", minHeight: 300}} id="PDFpreview" src="#" hidden="true" alt="your PDF" />
                    </div>
                  </label>
              </FormControl>
              <hr/>
            </Col>
          </Row>
              <br/>
          <Row center="xs">
            <Col xs={6}>
              <Row end="xs">
                <Button className={classes.button} raised color="primary">
                  Enviar proyecto
                </Button>
              </Row>
                <br/>
                <br/>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default withStyles(styles)(RegisterProject);