import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import './listItem.scss'

const ListItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = props.video;
  
  return (
    <>
    <div 
    className="listItem"
    style={{left: isHovered && props.index * 225 - 50 + props.index * 2.25}}
    onMouseEnter={()=>setIsHovered(true)}
    onMouseLeave={()=>setIsHovered(false)}
    >
        <img src={props.image} alt="" />
        {isHovered &&
        <>
        <iframe src={trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow className='icon'/>
            <Add className='icon'/>
            <ThumbUpAltOutlined className='icon'/>
            <ThumbDownAltOutlined className='icon'/>
          </div>
          <div className="itemInfoTop">
            <span>1 hour 14 min</span>
            <span className='limit'>16+</span>
            <span>1999</span>
          </div>
          <div className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nihil autem reprehenderit 
            aspernatur facilis
          </div>
          <div className="genre">Action</div>
        </div> 
        </>
        }
    </div>
    </>
    
  )
}

export default ListItem