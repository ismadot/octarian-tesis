import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment } from 'actions/app';
import { getToken } from 'actions/auth';
import CircleSvg from 'svg/circle.svg';
import SquareSvg from 'svg/square.svg';
import TriangleSvg from 'svg/triangle.svg';
import bookImg from 'img/book2.jpg';
import { Row, Col } from 'react-flexbox-grid';
import Stats from 'components/Stats/Stats';
import Tabs from 'components/tabSlider/tabSlider';

@connect(state => ({
  counter: state.app.get('counter'),
  loadingAuth: state.auth.get('loadingAuth'),
  errorAuth: state.auth.get('errorAuth'),
  tokenAuth: state.auth.get('tokenAuth'),
    
}))

export default class Home extends Component {
  static propTypes = {
    counter: PropTypes.number,
    errorAuth: PropTypes.string,
    loadingAuth: PropTypes.bool,
    tokenAuth: PropTypes.object,

    // from react-redux connect
    dispatch: PropTypes.func,
  }

  handleTestButtonClick = () => {
    const { dispatch } = this.props;

    dispatch(increment());
  }

  handleTestLoginButtonClick = () => {
    const { dispatch } = this.props;

    dispatch(getToken({"username":'isma',"password":'ismael.23'}));
  }

  render() {
    const {
      counter,
      loadingAuth,
      errorAuth,
      tokenAuth,
    } = this.props;

    return (
       <Col md={12} xs={12} className='Home'>
        <Stats name="hola" />
        <Tabs/>

        <h1>Marvin</h1>
        <p>
          Boilerplate for kicking off React/Redux applications.
        </p>
        <h2>About</h2>
        <p>
          Marvin is internal project by <a href='https://work.co'>Work & Co</a>.
          We love React and use it a lot. So Marvin is meant to be a starting point
          for our React projects. But as we love open source too, it is publicly
          available for anyone interested in using it.
        </p>
        <p>
          Visit documentation
          on <a href='https://github.com/workco/react-redux-webpack2-boilerplate'>GitHub</a>
        </p>

        <hr />

        <h2>Examples</h2>

        <h3>Action</h3>
        <div className='Example'>
          <p>Counter: { counter }</p>
          <button onClick={ this.handleTestButtonClick }>
            Increase
          </button>
        </div>
 

        <h3>Get Token</h3>
        <div className='Example'>
          { tokenAuth &&
            <p>
            { tokenAuth.data.data.token }<br />
            </p> }  
          { loadingAuth && <p>Loading...</p> }
          { errorAuth && <p>Error: { errorAuth }</p> }
          <button
            disabled={ loadingAuth }
            onClick={ this.handleTestLoginButtonClick }>
          Token
          </button>
        </div>

        <h3>Background image</h3>
        <div className='Example'>
          <div className='BackgroundImgExample' />
        </div>

        <h3>Image imported to the component</h3>
        <div className='Example'>
          <img src={ bookImg } alt='' className='ImgExample' />
        </div>

        <h3>SVGs imported as react components</h3>
        <div className='Example'>
          <CircleSvg style={ { marginRight: 10 } } />
          <SquareSvg style={ { marginRight: 10 } } />
          <TriangleSvg />
        </div>
       </Col>
    );
  }
}
