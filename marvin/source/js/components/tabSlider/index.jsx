import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCategorys } from 'actions/categorys';
import { getInfo } from 'actions/info';

import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';

import { Row, Col } from 'react-flexbox-grid';

import RecipeReviewCard from 'components/recipeReviewCard/';
import SimpleCard from 'components/simpleCard/';
import HomeTabs from 'components/homeTabs/';

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
  loadingCategorys: state.categorys.get('loadingCategorys'),
  errorCategorys: state.categorys.get('errorCategorys'),
  dataCategorys: state.categorys.get('dataCategorys'),
  loadingInfo: state.info.get('loadingInfo'),
  errorInfo: state.info.get('errorInfo'),
  dataInfo: state.info.get('dataInfo'),      
}))
class tabSlider extends Component {
  static propTypes = {
    classes           :PropTypes.object.isRequired,
    dataCategorys     :PropTypes.object,
    errorCategorys    :PropTypes.string,
    loadingCategorys  :PropTypes.bool,
    
    dataInfo          :PropTypes.object,
    errorInfo         :PropTypes.string,
    loadingInfo       :PropTypes.bool,
  }
  state = {
    value: null,
  };
  componentWillMount() {
    const { 
      dispatch,
      dataCategorys,
      loadingCategorys
    } = this.props;    
    
    if (!dataCategorys) {
      dispatch(getCategorys());
    }
  }

  componentDidUpdate() {
     const { 
      dataCategorys,
    } = this.props;
     if (dataCategorys) {
      if(this.state.value == null){
        this.setState({ 
          value : 0,
          list:dataCategorys.data
         });
      }
    }
  }
  

  renderDataCategorys() {
    const {
      dataCategorys,
    } = this.props;
    const tab = dataCategorys.data.map(category => {
              const icon = <Ionicon icon={category.icon}  fontSize="35px" />
              return (<Tab value={ category.index } key={ category.slug } label={category.name} icon={icon} />)
              })
    return tab
  }
 
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render(){
    const { 
        name,
        classes,
        dataCategorys,
        errorCategorys,
        loadingCategorys,
      } = this.props;
    const { value,list } = this.state;
    //console.log(list,value)
    return(
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            fullWidth
            scrollable
            scrollButtons="auto"
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            { dataCategorys && this.renderDataCategorys() }
          </Tabs>
        </AppBar>
            {value === 0 && (<HomeTabs category = { list[0].id } />)}
            {value === 1 && (<HomeTabs category = { list[1].id } />)}
            {value === 2 && (<HomeTabs category = { list[2].id } />)}
            {value === 3 && (<HomeTabs category = { list[3].id } />)}
            {value === 4 && (<HomeTabs category = { list[4].id } />)}
            {value === 5 && (<HomeTabs category = { list[5].id } />)}
      </div>
    )
  }
}

export default withStyles(styles)(tabSlider);