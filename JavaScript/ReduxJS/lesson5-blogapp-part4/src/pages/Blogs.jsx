import React from 'react'
import { Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard'
import { connect } from 'react-redux'

const Blogs = ({pvalue}) => {
  return (
   <>
   <h1 className='text-center my-5'>Blog List</h1>
   <Row>
    {pvalue.map(item=>{
      return  <SingleCard
      
      title={item.title}
      id={item.id}
      key={item.id}
      desc={item.desc}
      photo={item.photo}
      />
    })}
      
    </Row>
   
   </>
  )
}


const mapStateToProps =(state)=>{
  return {
    pvalue:state
  }
}


export default connect(mapStateToProps)(Blogs)