import { Component } from 'react'

class List extends Component {
  render() {
    return (
      <ol>
        <li>{this.props.listOne}</li>
        <li>{this.props.listTwo}</li>

      </ol>
    )
  }
}

export default List