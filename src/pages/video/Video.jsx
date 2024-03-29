import React from 'react' 
import Recomded from '../../components/recomededvideo/Recomded'
import { useParams } from 'react-router-dom'
import Playsong from '../../components/playvideo/Playsong';
import Sidebar from '../../components/sideebar/Sidebar';

function Video() {
  const {videoId , categoryId} = useParams();
  return (
    <div className='play-cont px-[2%] py-[20px] w-full flex flex-wrap justify-between '>
 
      <Playsong videoId={videoId}/>
      <Recomded categoryId={categoryId}/>

    </div>
  )     
}

export default Video