import React, { Component } from 'react'


class MyValue extends Component{
  componentWillUnmount(){
    // alert('information is deleted');
    document.querySelector('button').className = 'btn btn-danger';
  }
  
  render(){
    return(
      <>
        <h1>New Value</h1>
      </>
    )
  }
}



class LifeCycle extends Component {

  constructor(){
    super();
    // this.state ={
    //   text:"Data"
    // }
  }

  // componentDidUpdate(){
  //   console.log('updated');
  //   const text = document.querySelector('p');
  //   text.style.fontSize = '50px';
  // }

  // action=()=>{
  //   this.setState({
  //     text:"Hello React"
  //   })
  // }
  state={display:true}
  

  deleteInfo=()=>{
    this.setState({display:false})
  }

  render() {
    let data;
    if (this.state.display) {
      data = <MyValue />
    }
    return (
      <div className='container'>
        {data}
        <p>{this.state.text}</p>
        <button className='btn btn-primary' onClick={this.deleteInfo}>action</button>
      </div>
    )
  }
}

export default LifeCycle