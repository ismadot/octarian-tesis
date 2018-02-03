import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Typography from 'material-ui/Typography';

import { getProjects } from 'actions/projects';

import { Row, Col } from 'react-flexbox-grid';
import Markdown from 'react-markdown';
import ReactEmoji from 'react-emoji';
import 'github-markdown.css'
//import {Twemoji, toArray} from 'react-emoji-render';


@connect(state => ({
  loadingProjects: state.projects.get('loadingProjects'),
  errorProjects: state.projects.get('errorProjects'),
  dataProjects: state.projects.get('dataProjects'),      
}))
export default class Project extends Component {
  static propTypes = {
    match           :PropTypes.object.isRequired,
    dataProjects    :PropTypes.object,
    errorProjects   :PropTypes.string,
    loadingProjects :PropTypes.bool,
  }
  componentWillMount() {
    const {
      dispatch,
      dataProjects,
      match,
    } = this.props;
    let request='&slug='+match.params.param;
    //console.log(request)
      if (!dataProjects) {
        if (match) {
      //console.log(match.params.param)
        dispatch(getProjects({request}));
      }
    }
  }

  renderDescription() {
    const {
      dataProjects
    } = this.props;
    var input = dataProjects.data.data[0].description
    //const emojify=ReactEmoji.emojify(input)
      return (
        <div>
         <Markdown source={ input } escapeHtml={false} />
         </div>
      );

  }

  render() {
    const {
      match,
      dataProjects,
    } = this.props;

    return (
        <Col xs={12} className='Project'>
          <br/>
          <Row center="xs">
            <Col xs={6} >
              <Typography type="display4" align="center" color='inherit' >
                { dataProjects && dataProjects.data.data[0].name }<br/>
              </Typography>
            </Col>
          </Row>
          <br/>
          <Row center="xs">
            <Col xs={6} >
             <Row start="xs">
              <Col xs={12} >
              <div className="markdown-body">
                { dataProjects && this.renderDescription() }<br/>
                <br/>
              </div>
              </Col>
            </Row>
            </Col>
              hola
          </Row>
          <Row center="xs">
            <Col xs={6} >
             <Row start="xs">
              <Col xs={12} >
              <div >
              Comentarios
                <br/>
                <br/>
              </div>
              </Col>
            </Row>
            </Col>
          </Row>
        </Col>
    );
  }
}
