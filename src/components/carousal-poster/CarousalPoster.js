import React from 'react'
import "./carousal-poster.css"
import { useEffect, useState } from 'react'
import axios from '../axios'
import { apiKey, imageURL } from '../../constants/constants'
import YouTube from 'react-youtube'

function CarousalPoster(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data.results)
      setMovies(response.data.results)
    })
  }, [])
  const opts = {
    height:'390',
    width:'100%',
    playerVars: {
      autoplay:1
    }
  }
  const handleMOvies = (id) =>{
    axios.get(`movie/${id}/videos?api_key=${apiKey}&language=en=US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('array empty')
      }
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
        {movies.map(obj => (
          <img onClick={()=>handleMOvies(obj.id)} className={props.isSmall ? 'small-poster':'poster'} src={`${imageURL}${obj.backdrop_path}`} alt='' key={obj.id} />
        ))}
        </div>
        {urlId && <YouTube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default CarousalPoster