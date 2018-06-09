import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementData, decrementData } from './actions/action'


class App extends Component {

    state = { count:0 }
    increment = () => {
        this.props.dispatch(incrementData());
    }

    decrement = () => {
      this.props.dispatch(decrementData());
    }

  render() {
    return (
      <div>
        <center>
          <h1>{this.props.count}</h1>
          <div>
            <button onClick={this.decrement}>Kurang</button>
            <span></span>
            <button onClick={this.increment}>Tambah</button>
          </div>
        </center>
      </div>
    );
  }
}

function mapStateToProps(state)
{
    return {
      count: state.count
    }
}


export default connect(mapStateToProps)(App);
