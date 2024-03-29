import Navbar from '../Navbar/Navbar'
import React, { useContext, useEffect, useState } from 'react' 
import context from '../../context/context'
import { assets } from '../../assets/assets'
import { Link ,useParams} from 'react-router-dom';
import { API_KEY ,valueConverter } from '../../data';
import moment from 'moment'
function Serchvideo() {   
  const {expand,catagorie,showsearch,setInptbox,input,setinput , setCategorie} = useContext(context);
  const [data ,setData] = useState([])

 
  const feathData = async()=>{ 
    const videourl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=${API_KEY}&type=video&q=${input}`;
    await fetch(videourl).then(responce=>responce.json()).then(data=>setData(data.items))
}


    useEffect(()=>{
      if(input !== undefined )
      {
        feathData()
      }
  
    },[input]) 
    
  return (
    <>
   
    <Link to={'/search_query'} className='w-full flex flex-col items-center  min-h-[100vh]  overflow-hidden'>
     
     {data.map((item, index) => (
       <Link   className='flex  my-4  gap-4'>
          <img className=' w-[220px] h-[120px] lg:h-[unset] lg:w-[unset] rounded-lg' src={item.snippet.thumbnails.medium.url} alt="" />
                <div className='py-1 lg:w-[500px]  h-[120px]  flex flex-col '>
                    <p className='vdname text-white text-[14px] font-medium '>{item.snippet.title}</p>
                    <p className='text-[#beb9b9] font-semibold text-[12px]'>{moment(item.snippet.publishedAt).fromNow()}</p>
                    <p className='text-[#beb9b9] font-semibold text-[12px]'>{item.snippet.channelTitle}</p>
                    <p className='text-[#beb9b9] mt-2 font-semibold text-[11px] hidden lg:block'> {item.snippet.description.slice(0,300)}</p>
                    <p className='text-[#beb9b9] mt-2 font-semibold text-[11px] lg:hidden'> {item.snippet.description.slice(0,40)}</p>
                </div>  
    </Link>
))}
       </Link>
          </>
  )
}

export default Serchvideo