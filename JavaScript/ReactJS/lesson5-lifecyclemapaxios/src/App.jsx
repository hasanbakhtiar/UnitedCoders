import axios from 'axios';
import React, { Component } from 'react'

 class App extends Component {
  constructor(){
    super();
    this.state={
      users: []
    }
  }
  
  componentDidMount(){
      // axios
      // .get('https://jsonplaceholder.typicode.com/users')
      // .then(res=>this.setState({
      //   users:res.data
      // }))

      const comingData = async()=>{
        const usersData = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.setState({
          users:usersData.data
        })
      }
      comingData();
  }
  render() {
    return (
      <ol>
        {this.state.users.map(item=>{
          return <li key={item.id}>{item.name}</li>
        })}
      </ol>
    )
  }
}

export default App