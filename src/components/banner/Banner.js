import React, {useEffect, useState} from 'react'
import axios from '../axios'
import { apiKey, imageURL } from '../../constants/constants'
import "./banner.css"
function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`).then((response)=>{
     
      setMovie(response.data.results[0])
    })
  }, [])
  
  return (
    <div style={{backgroundImage:`url(${movie ? imageURL +  movie.backdrop_path:""})`}} className='banner'>
        <div>
            <div className='content'>
            {movie && <h1 className='title'>{movie.name}</h1>}
                <div className='banner-buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview:''}</h1>
            </div>
        </div>
    </div>
  )
}

export default Banner