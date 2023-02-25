import React from 'react'

const List = ({listOne,listTwo}) => {
  return (
    <ol>
        <li>{listOne}</li>
        <li>{listTwo}</li>
    </ol>
  )
}

export default List