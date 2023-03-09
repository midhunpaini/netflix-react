import React from 'react'
import  ReactDOM  from 'react-dom/client'
import Banner from './src/components/banner/Banner'
import CarousalPoster from './src/components/carousal-poster/CarousalPoster'
import Navbar from './src/components/navbar/Navbar'
import {original, action, romance, horror, comedy} from "./src/constants/urls"

function App() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <CarousalPoster url = {original}  title="Netflix Originals"/>
        <CarousalPoster url = {action} title="Action" isSmall/>
        <CarousalPoster url = {romance} title="Romantic" isSmall/>
        <CarousalPoster url = {horror} title="Horrer" isSmall/>
        <CarousalPoster url = {comedy} title="Comedy" isSmall/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)