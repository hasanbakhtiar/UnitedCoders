import React, { Component } from 'react'
import SingleCard from './SingleCard'

class Users extends Component {
  render() {
    return (
      <div className='row g-5'>
        {this.props.apiusers.map(item=>{
            return <SingleCard  key={item.id} uservalue = {item}/>
        })}
      </div>
    )
  }
}

export default Users