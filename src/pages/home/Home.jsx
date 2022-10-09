import React from 'react'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/Navbar'
import List from '../../components/list/List'
import './home.scss'
const Home = ({type}) => {
  return (
    <>
    <div className='home'>
        <Navbar/>
        <Featured type={type}/>
        <List image="http://cdn29.us1.fansshare.com/images/flypaper/flypaper-movie-1325011093.jpg" video="https://www.youtube.com/embed/OT6Re08MQV4?&autoplay=1&controls=0"/>
        <List image="https://wallpapercave.com/dwp2x/wp8010359.jpg" video="https://www.youtube.com/embed/sj9J2ecsSpo?&autoplay=1&controls=0"/>
        <List image="https://media-cache.cinematerial.com/p/500x/jpxuyxiq/valkyrie-danish-movie-poster.jpg?v=1456304087" video="https://www.youtube.com/embed/-YppIQUiE9Y?&autoplay=1&controls=0"/>
    </div>
    </>
  )
}

export default Home