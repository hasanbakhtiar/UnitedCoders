import React, { Component } from 'react'
import cardata from '../data/car'

class Dropdown extends Component{
    render(){
        return(
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             {this.props.carbrand}
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">{this.props.carmodelOne}</a></li>
              <li><a className="dropdown-item" href="#">{this.props.carmodelTwo}</a></li>
           
            </ul>
          </li>
        )
    }
}



export class Nav extends Component {
  render() {
    return (
<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>

        {cardata.map((item,count)=>{
          return  <Dropdown  key={count}
          carbrand ={item.brand} 
          carmodelOne={item.modelOne} 
          carmodelTwo={item.modelTwo}/>
        })}

      </ul>
     
    </div>
  </div>
</nav>



    )
  }
}

export default Nav