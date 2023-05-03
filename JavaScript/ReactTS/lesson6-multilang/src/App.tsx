import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { ProductContext } from './context/ProductContext'
import Header from './Header';

const App = () => {
  const [data] = useContext(ProductContext);
  return (
    <Container className='mt-5'>
      <Header />
      {data.map((i:any)=>(
        <li key={i.id}>{i.title}</li>
      ))}
    </Container>
  )
}

export default App