import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Row, Col } from 'react-flexbox-grid';
import Stats from 'components/stats';

//import ReactPaginate from 'react-paginate';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Ionicon from 'react-ionicons'
import Tabs, { Tab } from 'material-ui/Tabs';
import Page from 'components/page';

import { getCategorys } from 'actions/categorys';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
});
@connect(state => ({
  loadingCategorys: state.categorys.get('loadingCategorys'),
  errorCategorys: state.categorys.get('errorCategorys'),
  dataCategorys: state.categorys.get('dataCategorys'),
}))
class PaginateProjects extends Component{
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
    value: 3,
  };
  componentWillMount() {
    const { 
      dispatch,
      dataCategorys,
    } = this.props;    
    if (!dataCategorys) {
      dispatch(getCategorys());
    }
  }
  componentWillReceiveProps(nextProps){
    const {
      dataCategorys,
    } = this.props;
    if (dataCategorys) {
      if(this.state.value == null){
        this.setState({ 
          value : dataCategorys.data[0].id,
          list:dataCategorys.data,
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
      return (<Tab value={ category.id } key={ category.slug } label={category.name} icon={icon} />)
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

    return(
      <Col xs={12}>
        <Stats/>
        <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            fullWidth
            scrollable
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            { dataCategorys && this.renderDataCategorys() }
          </Tabs>
          {value}
          <Page category={value} />
        </AppBar>
        </div>
        <h1>
        paginate
          <Ionicon icon="ios-arrow-back"  onClick={this.shakeIt} fontSize="40px" color="black"/>
          <Ionicon icon="ios-arrow-back"  onClick={this.shakeIt} fontSize="40px" color="black"/>
          
          <Ionicon icon="ios-arrow-forward"  onClick={this.shakeIt} fontSize="40px" color="black"/>
          <Ionicon icon="ios-arrow-forward"  onClick={this.shakeIt} fontSize="40px" color="black"/>
        </h1>

      </Col>
    );
  }
}
export default withStyles(styles)(PaginateProjects)