/**
 * Created with wangyonghua.
 * Date: 2018-11-24
 * Time: 22:40
 * Desc: counter 栗子
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'antd';
import * as CounterActions from './action';

class Counter extends Component {

  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return (
      <div>
        <h1>示例代码counter</h1>
        <div>
          <span>Clicked: <span style={{color: 'red'}}>{counter}</span> times</span>
          <br/>
          <br/>
          <Button type="primary" onClick={increment}>+</Button>
          {' '}
          <Button type="primary" onClick={decrement}>-</Button>
          {' '}
          <Button type="primary" onClick={incrementIfOdd}>Increment if odd</Button>
          {' '}
          <Button type="primary" onClick={() => incrementAsync()}>Increment async</Button>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
}

function mapStateToProps (state){
  return {
    counter: state.counter
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
