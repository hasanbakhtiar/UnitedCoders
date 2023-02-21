import React, { Component } from 'react'

 class Header extends Component {
  render() {
    return (
      <>
      <nav className="navbar bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" target="_blank" href="https://github.com"><i className="fa-brands fa-github" /> Github</a>
        </div>
      </nav>

        
      </>
    )
  }
}

export default Header