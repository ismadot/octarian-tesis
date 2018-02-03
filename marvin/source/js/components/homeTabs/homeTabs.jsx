import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';
import { getProjects } from 'actions/projects';

import { Row, Col } from 'react-flexbox-grid';  
import SimpleCard from 'components/simpleCard/';
import RecipeReviewCard from 'components/recipeReviewCard/';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';

import Ionicon from 'react-ionicons'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}
TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
  content:{
    padding: '24px',
  }
});

@connect(state => ({
  loadingProjects: state.projects.get('loadingProjects'),
  errorProjects: state.projects.get('errorProjects'),
  dataProjects: state.projects.get('dataProjects'),      
}))
class HomeTabs extends React.Component {
    static propTypes = {
    classes         :PropTypes.object.isRequired,
    category        :PropTypes.number,
    dataProjects    :PropTypes.object,
    errorProjects   :PropTypes.string,
    loadingProjects :PropTypes.bool,
  }
  componentWillMount() {
  const { 
    dispatch,
    dataProjects,
    category,
  } = this.props;    
  let request='&Category='+category;
  if (category) {
    if (!dataProjects) {
      console.log(category)
      dispatch(getProjects({request}))
    }else{
      dispatch(getProjects({request}))
    }
  }
}
  render() {
     const { 
        classes,
        category,
        dataProjects,
      } = this.props;
     // console.log(dataProjects)
    return (
     <Col xs={12}>
        <Row>
          <Col xs={12} md={6}>
            { dataProjects &&
            <TabContainer>
               <RecipeReviewCard elements={ dataProjects.data.data[0] } /> 
            </TabContainer>}
          </Col>
          <Col xs={12} md={6} className={classes.content}>
            <Row>
            { dataProjects && <SimpleCard elements={ dataProjects.data.data[1] } />}
            { dataProjects && <SimpleCard elements={ dataProjects.data.data[2] } />}
            { dataProjects && <SimpleCard elements={ dataProjects.data.data[3] } />}
            </Row>
          </Col>
        </Row>
      </Col>
      );
  }
}
export default withStyles(styles)(HomeTabs)
