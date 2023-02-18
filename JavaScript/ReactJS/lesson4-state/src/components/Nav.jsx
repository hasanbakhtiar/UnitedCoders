import React, { Component } from 'react'
import navbardata from '../data/navbardata';

 class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              {navbardata.map((item, i) => {
                return (
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {item.title}
                    </a>
                    {item.dropdown.map((a, i) => {
                      return (
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              {a.dropone}
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              {a.droptwo}
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              {a.dropthree}
                            </a>
                          </li>
                        </ul>
                      );
                    })}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav