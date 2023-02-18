import React, { Component } from 'react'

 class BasicBookApp extends Component {
    constructor(){
        super();
        this.state={
            title:"1984",
            auther: "Geroge Orwell",
            photo:"https://i0.wp.com/www.printmag.com/wp-content/uploads/2017/01/2a34d8_a6741e88335241308890543d203ad89dmv2.jpg?resize=500%2C815&ssl=1"

        }
    }
    
    nextBook=()=>{
        this.setState({
            title:"batman comics",
            auther: "unknow",
            photo:"https://m.media-amazon.com/images/I/61mmmZnhBxL._AC_UF894,1000_QL80_.jpg"
        })
    }

    prevBook=()=>{
        this.setState({
            title:"1984",
            auther: "Geroge Orwell",
            photo:"https://i0.wp.com/www.printmag.com/wp-content/uploads/2017/01/2a34d8_a6741e88335241308890543d203ad89dmv2.jpg?resize=500%2C815&ssl=1"
        })
    }
  render() {
    return (
      <>
            <div className="card" style={{width: '18rem'}}>
            <img src={this.state.photo} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{this.state.title}</h5>
                <p className="card-text">{this.state.auther}</p>
                <a href="#" className="btn btn-warning " onClick={this.prevBook}>Prev Book</a>
                <a href="#" className="btn btn-primary ms-3" onClick={this.nextBook}>Next Book</a>
            </div>
            </div>

      </>
    )
  }
}

export default BasicBookApp