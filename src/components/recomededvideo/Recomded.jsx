 
import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { Link, NavLink } from 'react-router-dom';
import '../../App.css';
import { API_KEY2, valueConverter } from '../../data';
function Recomded({categoryId}) {
  const [apidata, setapidata] = useState([]);

  const feathData = async ()=>{
     
    const relatedvideo = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=35&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY2}`
    await fetch(relatedvideo).then(res=>res.json()).then(data=>setapidata(data.items))  
  }
  useEffect(()=>{
    feathData()
  },[])
  return (
    <div className='recomed   w-full text-white flex gap-3 flex-col flex-wrap'>
        {
          apidata.map((item,index)=>{
            return(
              <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className='sidevideolist flex flex-col lg:flex-row  gap-4'>
              <img className='  lg:rounded-lg lg:w-[140px] lg:h-[85px] w-full h-[220px]' src={item.snippet.thumbnails.medium.url} alt="" />
              <div className='   py-1 lg:w-[180px] flex flex-col lg:flex-wrap'>
                  <p className='vdname lg:block hidden text-[13px] '>{item.snippet.title.slice(0,20)}...</p>
                  <p className='vdname lg:hidden text-[15px] lg:text-[13px] '>{item.snippet.title.slice(0,90)}</p>
                  <p className='text-[#beb9b9] font-semibold lg:text-[12px]'>{item.snippet.channelTitle}</p>
                <p className='text-[#beb9b9] lg:text-[11px]'>{valueConverter(item.statistics.viewCount)} viwes <span className='text-[#beb9b9] text-[13px]'>1 days ago</span> </p>
              
              </div>
          </Link>
            )
          })
        }
    </div>
  )
}

export default Recomded