import React from 'react'
import Recomded from '../../components/recomededvideo/Recomded'
import { useParams } from 'react-router-dom'
import Playsong from '../../components/playvideo/Playsong';
function Video2() {
    const {videoId } = useParams();
    return (
      <div className='play-cont px-[2%] py-[20px] w-full flex flex-wrap justify-between '>
   
        <Playsong  />
        
      </div>
  )
}

export default Video2