import React, { Component } from 'react'
import List from './components/List'

// class App extends Component {
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }

// function App (){
//     return(
//         <h1>Hello</h1>
//     )
// }


const App=()=>{
    return(
      <>
      <List listOne = "test1"  listTwo="demo1"/>
      <List listOne = "test2" listTwo="demo2"/>
      <List listOne = "test3" listTwo="demo3"/>
      
      </>
    )
}

export default App