import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const CharacterDetails = () => {
    const [characters,setCharacters] = useState([]);
    useEffect(()=>{
       const fetchApi = async()=>{
            const comingData = await axios.get('https://rickandmortyapi.com/api/character')
            setCharacters(comingData.data.results);

       }
       fetchApi();
    },[])
    const {url} = useParams();

    const detailsdata = characters.find(p=>p.id == url);
    
   
    
    
  return (
    <>
        {detailsdata === undefined ? <h1>Loading...</h1>:<div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                <img src={detailsdata.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
                </div>
                <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">{detailsdata.name}</h1>
                <p className="lead">{detailsdata.species}</p>
                <p className="lead">{detailsdata.gender}</p>
                <p className="lead">{detailsdata.location.name}</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  
                    <Link to="/" className="btn btn-outline-secondary btn-lg px-4">back</Link>
                </div>
                </div>
            </div>
            </div>}
    </>
        

  )
}

export default CharacterDetails