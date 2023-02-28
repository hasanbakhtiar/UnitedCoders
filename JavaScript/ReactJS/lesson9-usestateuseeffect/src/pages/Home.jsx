import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const [characters,setCharacters] = useState([]);
    useEffect(()=>{
       const fetchApi = async()=>{
            const comingData = await axios.get('https://rickandmortyapi.com/api/character')
            setCharacters(comingData.data.results);

       }
       fetchApi();
    },[])
    
  return (
  <>
  <h1 className='my-5 text-center'>Rick and Morty</h1>
  <div className='d-flex flex-wrap row g-5'>
        {console.log(characters)}
        {characters.map(item=>(
            <div className='col-4'>
                <img src={item.image} alt="" />
                <h4>{item.name}</h4>
                <Link to={`/${item.id}`} className='btn btn-warning'>read more</Link>
            </div>
        ))}
    </div>
  
  </>
  )
}

export default Home