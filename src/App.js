import React, { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {

    state = { count:0 }
    increment = () => {
        this.props.dispatch({type:'INCREMENT'});
    }

    decrement = () => {
      this.props.dispatch({type:'DECREMENT'});
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
