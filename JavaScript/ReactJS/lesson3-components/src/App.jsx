// import { Component } from "react";
// export class List extends Component{
//     render(){
//       return(
//         <ul>
//           <li>test list</li>
//           <li>test list</li>
//           <li>test list</li>
//           <li>test list</li>
//           <li>test list</li>
//         </ul>
//       )
//     }
//   }
//   export class App extends Component{
//     render(){
//       return(
//         <h1>This is App Component</h1>
//       )
//     }
//   }



import  { Component } from 'react'
import List from './components/List'
import Nav from './components/Nav'
import Product from './pages/Product'

class App extends Component {
  render() {
    return (
      <>
      <Nav/>
      <div className="container">
      <Product />
      </div>
      {/* <List listOne="pen" listTwo="book"/>
      <List listOne="laptop" listTwo="pc"/>
      <List listOne="phone" listTwo="kindle"/> */}

      </>
    )
  }
}

export default App
