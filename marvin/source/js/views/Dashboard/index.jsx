import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { testAction, testAsync } from 'actions/app';
import { login } from 'actions/auth';
import CircleSvg from '../../../assets/svg/circle.svg';
import SquareSvg from '../../../assets/svg/square.svg';
import TriangleSvg from '../../../assets/svg/triangle.svg';
import bookImg from '../../../assets/img/book2.jpg';

@connect(state => ({
  asyncData: state.app.get('asyncData'),
  asyncError: state.app.get('asyncError'),
  asyncLoading: state.app.get('asyncLoading'),
  asyncDataAuth: state.app.get('asyncDataAuth'),
  asyncErrorAuth: state.app.get('asyncErrorAuth'),
  asyncLoadingAuth: state.app.get('asyncLoadingAuth'),
  counter: state.app.get('counter'),
}))
export default class Dashboard extends Component {
  static propTypes = {
    asyncData: PropTypes.object,
    asyncError: PropTypes.string,
    asyncLoading: PropTypes.bool,
    
    asyncDataAuth: PropTypes.object,
    asyncErrorAuth: PropTypes.string,
    asyncLoadingAuth: PropTypes.bool,
    
    counter: PropTypes.number,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  constructor() {
    super();

    this.handleAsyncButtonClick = this.handleAsyncButtonClick.bind(this);
    this.handleTestButtonClick = this.handleTestButtonClick.bind(this);
    this.handleTestLoginButtonClick = this.handleTestLoginButtonClick.bind(this);
  }

  handleAsyncButtonClick() {
    const { dispatch } = this.props;

    dispatch(testAsync());
  }

  handleTestButtonClick() {
    const { dispatch } = this.props;

    dispatch(testAction());
  }
  handleTestLoginButtonClick(){
    const { dispatch } = this.props;

    dispatch(login('isma','ismael.23'));
  }

  render() {
    const {
      asyncData,
      asyncError,
      asyncLoading,
      asyncDataAuth,
      asyncErrorAuth,
      asyncLoadingAuth,
      counter,
    } = this.props;

    return (
      <div className='Dashboard'>
        <h1>Marvin</h1>
        <p>
          Boilerplate for kicking off React/Redux applications.
        </p>

        <hr />

        <h2>Examples</h2>

        <h3>Synchronous action</h3>
        <div className='Example'>
            {counter}
          <p>Counter: { counter }</p>
          <button onClick={ this.handleTestButtonClick }>
            Increase
          </button>
        </div>
        
        <h3>Get Token</h3>
        <div className='Example'>
          { asyncDataAuth &&
            <p>
            { asyncDataAuth.token }<br />
            </p> }  
          { asyncLoadingAuth && <p>Loading...</p> }
          { asyncErrorAuth && <p>Error: { asyncErrorAuth }</p> }
          <button
            disabled={ asyncLoadingAuth }
            onClick={ this.handleTestLoginButtonClick }>
          Token
          </button>
        </div>

        <h3>Async action example</h3>
        <div className='Example'>
          { asyncData &&
            <p>
              Date: { asyncData.date }<br />
              Time: { asyncData.time }<br />
              Miliseconds since epoch: { asyncData.milliseconds_since_epoch }
            </p> }
          { asyncLoading && <p>Loading...</p> }
          { asyncError && <p>Error: { asyncError }</p> }
          <button
            disabled={ asyncLoading }
            onClick={ this.handleAsyncButtonClick }
          >
            Get async data
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
      </div>
    );
  }
}
