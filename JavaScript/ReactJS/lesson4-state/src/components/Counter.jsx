import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super();
        this.decrement = this.decrement.bind(this);
        this.state={
            count:0
        }
    }
    decrement(){
      if (this.state.count > 0) {
        this.setState({
            count:this.state.count - 1
        })
      }
    }

    increment=()=>{
        this.setState({
            count:this.state.count + 1
        })
    }

  render() {
    return (
      <>
        <button className='btn btn-danger' onClick={this.decrement}>-</button>
        <span className='mx-2'>{this.state.count}</span>
        <button className='btn btn-success' onClick={this.increment}>+</button>
      </>
    )
  }
}

export default Counter