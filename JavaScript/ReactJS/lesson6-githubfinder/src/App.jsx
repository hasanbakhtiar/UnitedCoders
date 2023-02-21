import axios from 'axios'
import React, { Component } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Users from './components/Users';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }
  searchResult = (keyword) => {
    axios
      .get(`https://api.github.com/search/users?q=${keyword}`)
      .then(res => { this.setState({ users: res.data.items }) })
  }

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <Search searchKey={this.searchResult} />
          <Users apiusers = {this.state.users}/>
        </div>
      </>
    )
  }
}

export default App