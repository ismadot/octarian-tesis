import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getProjects } from 'actions/projects';

import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';


const styles = theme => ({
  root: {
    width: '100%',
  },
});

@connect(state => ({
  loadingProjects: state.projects.get('loadingProjects'),
  errorProjects: state.projects.get('errorProjects'),
  dataProjects: state.projects.get('dataProjects'),      
}))
class Page extends Component{
    static propTypes = {
    classes           :PropTypes.object.isRequired,
    category          :PropTypes.number,
    dataProjects      :PropTypes.object,
    errorProjects     :PropTypes.string,
    loadingProjects   :PropTypes.bool,

  }
  componentWillMount() {
    const { 
      dispatch,
      dataProjects,
      category,
    } = this.props;    
    let request='&Category='+category+"&limit=6";
        console.log(category)
    if (category) {
      if (!dataProjects) {
        dispatch(getProjects({request}))
      }else{
        dispatch(getProjects({request}))
      }
    }
  }
  renderDataProjects() {
    const {
      dataProjects,
    } = this.props;       
    const CardProjects = dataCategorys.data.map(category => {
      const icon = <Ionicon icon={category.icon}  fontSize="35px" />
      return (<Tab value={ category.id } key={ category.slug } label={category.name} icon={icon} />)
    })
    return tab
  }
  
  render(){
    const { 
        classes,
        category,
      } = this.props;
    return(
      <h1>
      page {category}
      </h1>

    )
  }
}

export default withStyles(styles)(Page)