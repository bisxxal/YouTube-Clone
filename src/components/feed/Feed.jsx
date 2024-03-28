 
import React, { useContext, useEffect, useState } from 'react' 
import context from '../../context/context'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { API_KEY2 ,valueConverter } from '../../data';
import moment from 'moment'
import Serchvideo from './Serchvideo';
import Navbar from '../Navbar/Navbar';
import Loader from '../loader/Loader'
// import '../App.css'
function Feed() {
  
    const {expand,catagorie,showinputbox,setInptbox, resexpand,setresexpand ,loader , setLoader , setCategorie} = useContext(context);
    const [data ,setData] = useState([])

    const feathData = async()=>{ 
        const videourl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${catagorie}&key=${API_KEY2}`;
        await fetch(videourl).then(responce=>responce.json()).then(data=>setData(data.items))
        setLoader(false);
    }
    useEffect(()=>{
        feathData()
    },[catagorie])


    const togle = ()=>{
      setresexpand(!resexpand) 
    }

  return (
    <>

 {
    loader? <Loader/>:

    
    <> 
    <div className={`w-full topfeed mt-[-20px] text-white fixed overflow-x-auto flex-nowrap whitespace-nowrap flex gap-2 items-center   h-[40px] bg-[#0F0F0F] `} >
     <div onClick={togle} className= {`bg-[#222222] hover:bg-[#3F3F3F] cursor-pointer rounded-lg px-5   lg:hidden h-7 `}><img className=' filter invert-[1] w-[32px]' src={assets.compass} alt="" /></div>
    <div onClick={()=>setCategorie(0)}    className= {`${catagorie === 0 ? "bg-[#3F3F3F]" :""} bg-[#222222] hover:bg-[#3F3F3F] text-xs font-medium cursor-pointer py-1 px-3 rounded-lg`}>All</div>
    <div onClick={() => setCategorie(10)} className= {`${catagorie === 10 ? "bg-[#3F3F3F]" :""} bg-[#222222] hover:bg-[#3F3F3F] text-xs font-medium cursor-pointer py-1 px-3 rounded-lg`}>Music</div>
    <div onClick={() => setCategorie(20)} className= {`${catagorie === 20 ? "bg-[#3F3F3F]" :""} bg-[#222222] hover:bg-[#3F3F3F] text-xs font-medium cursor-pointer py-1 px-3 rounded-lg`}>Gaming</div>
    <div onClick={() => setCategorie(24)} className= {`${catagorie === 24 ? "bg-[#3F3F3F]" :""} bg-[#222222] hover:bg-[#3F3F3F] text-xs font-medium cursor-pointer py-1 px-3 rounded-lg`}>Entertainment</div>
    <div onClick={() => setCategorie(23)} className= {`${catagorie === 23 ? "bg-[#3F3F3F]" :""} bg-[#222222] hover:bg-[#3F3F3F] text-xs font-medium cursor-pointer py-1 px-3 rounded-lg`}>Sport</div>
    <div onClick={() => setCategorie(28)} className= {`${catagorie === 28 ? "bg-[#3F3F3F]" :""} bg-[#222222] hover:bg-[#3F3F3F] text-xs font-medium cursor-pointer py-1 px-3 rounded-lg`}>Tech</div>
    <div onClick={() => setCategorie(22)} className= {`${catagorie === 22 ? "bg-[#3F3F3F]" :""} bg-[#222222] hover:bg-[#3F3F3F] text-xs font-medium cursor-pointer py-1 px-3 rounded-lg`}>Blogs</div>
    <div onClick={() => setCategorie(25)} className= {`${catagorie === 25 ? "bg-[#3F3F3F]" :""} bg-[#222222] hover:bg-[#3F3F3F] text-xs font-medium cursor-pointer py-1 px-3 rounded-lg`}>News</div>
    <div onClick={() => setCategorie(1)}  className= {`${catagorie === 1 ? "bg-[#3F3F3F]" :""} bg-[#222222] hover:bg-[#3F3F3F] text-xs font-medium cursor-pointer py-1 px-3 rounded-lg`}>Film & Animation</div> 
     
    <div onClick={() => setCategorie(23)} className= {`${catagorie === 23 ? "bg-[#3F3F3F]" :""} bg-[#222222] hover:bg-[#3F3F3F] text-xs font-medium cursor-pointer py-1 px-3 rounded-lg`}>Comedy</div>
    <div onClick={() => setCategorie(28)} className= {`${catagorie === 28 ? "bg-[#3F3F3F]" :""} bg-[#222222] hover:bg-[#3F3F3F] text-xs font-medium cursor-pointer py-1 px-3 rounded-lg`}>Science</div>
     
    <div onClick={() => setCategorie(26)} className= {`${catagorie === 26 ? "bg-[#3F3F3F]" :""} bg-[#222222] hover:bg-[#3F3F3F] text-xs font-medium cursor-pointer py-1 px-3 rounded-lg`}>How to</div>
        </div>
    <div className='flex flex-wrap min-h-[100vh]   justify-center lg:justify-between items-center gap-4 mt-[42px] text-white '> 


{data ?

      (  data.map((item ,index)=>{
            return(
               
                <Link to={`video/${item.snippet.categoryId}/${item.id}`} className={`${expand ?'lg:w-[299px] md:w-[299px] ':'lg:w-[260px] md:w-[260px] '} md:h-[240px] lg:h-[240px]  md:justify-between h-[325px] flex flex-col justify-evenly w-[100%] overflow-hidden`}  >
                        <img className={`${expand ?'lg:w-[299px] md:w-[299px] h-[170px]':'lg:w-[260px] md:w-[260px] h-[160px]'} lg:w-[260px] md:w-[260px] w-full h-[220px] lg:h-[160px] lg:rounded-[9px]  ` }  src={item.snippet.thumbnails.medium.url} alt="" />
                        <p className='ml-3 lg:m-0 text-[14px] font-medium'>{item.snippet.title.slice(0,50)}...</p>
                        <h3 className='ml-3 lg:m-0 text-[13px] text-[#b3abab]'>{item.snippet.channelTitle}</h3>
                        <p className='ml-3 lg:m-0  text-[13px] text-[#b3abab]'>{valueConverter(item.statistics.viewCount)} viwes &bull; {moment(item.snippet.publishedAt).fromNow() }</p>
                 </Link>
            )
        })
     ): '' }
    
    </div>
 </>
  }

    </>
  )
}

export default Feed