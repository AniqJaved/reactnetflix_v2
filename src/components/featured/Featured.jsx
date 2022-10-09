import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import React from 'react'
import './featured.scss'

const Featured = (props) => {
  return (
    <>
    <div className="featured">
        <img src="https://images.pexels.com/photos/3406020/pexels-photo-3406020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="featuredContainer">
            {props.type && (
                <div className='category'>
                <span>{props.type === 'movie' ? "Movies" : "Series"}</span>
                <select className="genre">
                    <option value="Genre">Genre</option>
                    <option value="Animation">Animation</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Crime">Crime</option>
                    <option value="Drama">Drama</option>
                    <option value="Experimental">Experimental</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Historical">Historical</option>
                    <option value="Horror">Horror</option>
                    <option value="Romance">Romance</option>
                </select>
            </div>
            )}
            <div className="info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Ozark_TV_series_logo.png?20190409070319" alt="" />
            </div>
            <span className="desc">
            Created by Bill Dubuque ("The Accountant," "The Judge"), this drama series stars Jason Bateman as Marty Byrde, a financial planner who relocates his family from Chicago to a summer resort community in the Ozarks.With wife Wendy and their two kids in tow, Marty is on the move after a money-laundering scheme goes wrong 
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Featured