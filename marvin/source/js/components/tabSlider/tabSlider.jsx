import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCategorys } from 'actions/categorys';

import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';

import { Row, Col } from 'react-flexbox-grid';

import RecipeReviewCard from 'components/RecipeReviewCard/';
import SimpleCard from 'components/SimpleCard/';
import ShoppingBasket from 'material-ui-icons/ShoppingBasket';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ThumbDown from 'material-ui-icons/ThumbDown';
import PhoneIcon from 'material-ui-icons/Phone';
import ThumbUp from 'material-ui-icons/ThumbUp';
import HelpIcon from 'material-ui-icons/Help';
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
}))
class tabSlider extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    errorCategorys: PropTypes.string,
    loadingCategorys: PropTypes.bool,
    dataCategorys: PropTypes.object,
  }
  state = {
    value: 3,
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

  renderDataCategorys() {
    const {
      dataCategorys 
    } = this.props;

    const tab = dataCategorys.data.data.data.map(category => {
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
    const { value } = this.state;
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
            indicatorClassName="holaaaa"
          >
            { dataCategorys && this.renderDataCategorys() }
          </Tabs>
        </AppBar>
            {value === 0 && <TabContainer>{value}
            <Ionicon icon={"md-basket"} fontSize="35px" color="rgb(125, 176, 24)"/>
            
            </TabContainer>}
            {value === 1 && <TabContainer>Item Two</TabContainer>}
            {value === 2 && <TabContainer>Item Three</TabContainer>}
            {value === 3 && 
              <Col xs={12}>
              <Row>
                <Col xs={6}>
                  <TabContainer>
                  <RecipeReviewCard />
                  </TabContainer>
                </Col>
                <Col xs={6} className={classes.content} >
                <Row>
                <SimpleCard />
                <SimpleCard />
                <SimpleCard />
                </Row>
                </Col>
              </Row>
              </Col>
            }
            {value === 4 && <TabContainer>Item five</TabContainer>}
            {value === 5 && <TabContainer>Item six</TabContainer>}
            {value === 6 && <TabContainer>Item Seven</TabContainer>}
      </div>
    )
  }
}

export default withStyles(styles)(tabSlider);