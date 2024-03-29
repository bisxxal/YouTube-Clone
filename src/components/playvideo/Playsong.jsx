import React, { useContext,useState, useEffect } from 'react'
import { assets } from '../../assets/assets'
import context from '../../context/context' 
import { Link, useParams } from 'react-router-dom';
import '../../App.css'; 
import { API_KEY ,valueConverter } from '../../data';
import moment from 'moment'
import Loader from '../loader/Loader';
function Playsong() {
    const { loader , setLoader  } = useContext(context);
   
    const {videoId} = useParams();
    const [APIdata ,setAPIData] = useState(null);
    const [channelData ,setchannelData] = useState(null);
    const [commentData ,setcommentData] = useState([]);
    
    const feathData = async()=>{ 
        const videourl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videourl).then(responce=>responce.json()).then(data=>setAPIData(data.items[0]))
    }
    
    const feattchotherData = async()=>{
        
        const videodetail = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${APIdata.snippet.channelId}&key=${API_KEY}`;

        await fetch(videodetail).then(responce=>responce.json()).then(data=>setchannelData(data.items[0]))
        
        const commenntUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;

        await fetch(commenntUrl).then(responce=>responce.json()).then(data=>setcommentData(data.items))
        setLoader(false);
    }
    useEffect(()=>{
        feathData()
    } , [videoId])
    useEffect(()=>{
        feattchotherData()
    } , [APIdata])
  return (



    <>
    
    {loader? <Loader/> :<>
    
    <div className='text-white   playdideo w-full lg:pl-[100px]'> 
    <div className="   text-white"  > 
      
        <iframe className='w-full lg:h-[33vw] h-[50vw] lg:rounded-lg'  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}   frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       
        <h3 className='text-[18px] mt-2'>{APIdata?APIdata.snippet.title:"titlle here"}</h3>


        <div className='play-video-info flex lg:items-center flex-col lg:flex-row pl-3 lg:justify-between flex-wrap mt-[10px] text-[14px]  '>
        <div className='publisher text-white flex items-center lg:justify-center'> 
    <img className='w-[33px] rounded-full' src={ channelData?channelData.snippet.thumbnails.default.url:assets.userprofile} alt="" />
    <div className='ml-[15px]'>
        
        <p className=' font-bold  '>{APIdata?APIdata.snippet.channelTitle:'Channel name'}</p>
        <span className='text-[#928e8e] text-[13px] font-medium'>
  {channelData ? valueConverter(channelData.statistics.subscriberCount) : "1.3m"} subscribers
</span>

    </div>
    <button className='bg-[#ffffff] text-black px-3 py-1 font-medium flex items-center justify-center rounded-full ml-7'>subscribe</button>
    </div>
           
            <div className='flex lg:mt-0 mt-3'> 
               <div className='bg-[#272727] flex items-center justify-center  rounded-full'>
               <span className='  hover:bg-[#3F3F3F] px-4 py-[5px] text-[11px] font-medium  inline-flex items-center lg:ml-[1px]  border-r border-[gray]'> <img className='w-[17px] mr-[8px]  filter invert-[1] ' src={assets.like} alt="" />{APIdata?valueConverter(APIdata.statistics.likeCount):"23M"}</span>
                <span className=' hover:bg-[#3F3F3F] px-4 py-[5px] text-[11px] font-medium rounded-full inline-flex items-center ml-[1px]'>   <img className='w-[17px] mr-[8px] filter invert-[1] ' src={assets.dislike} alt="" /></span>
               </div>
                <span className='bg-[#272727] hover:bg-[#3F3F3F] px-4 py-[5px] text-[11px] font-medium rounded-full inline-flex items-center ml-[15px]'>   <img className='w-[17px] mr-[8px]  filter invert-[1] ' src={assets.share} alt="" />Share</span>
                <span className='bg-[#272727] hover:bg-[#3F3F3F] px-4 py-[5px] text-[11px] font-medium rounded-full inline-flex items-center ml-[15px]'>   <img className='w-[17px] mr-[8px]  filter invert-[1] ' src={assets.save} alt="" />Save</span>
            </div>
        </div>


    </div>
 

     <div className=' mt-5 describtion'>
            <div className='bg-[#272727] hover:bg-[#3F3F3F] flex flex-col flex-wrap rounded-xl px-4 py-1'> 
            <p className='text-[13px] font-medium '>{APIdata ? valueConverter(APIdata.statistics.viewCount) : '10000'} viwes &bull; {APIdata ? moment(APIdata.snippet.publishedAt).fromNow() :'23 days ago'}</p>
            <p className='text-[13px] font-normal '>{APIdata ? APIdata.snippet.description.slice(0, 350) : "Default description if not available"}</p>
            </div>
  
     <div className='commet section mt-5'>

     <h4 className='font-bold mb-3'> {APIdata ? valueConverter(APIdata.statistics.commentCount) : '1000'}  comments</h4>

{/* //comments  section*/}

 

{
    commentData.map((item,index)=>{
        return(
            <div key={index} className='comment flex items-start mb-5  lg:gap-4 '>
            <img className='w-[28px] rounded-full ' src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
            <div className='flex flex-col px-4 flex-wrap '>
                <h4 className='font-medium text-[12px] '>{item.snippet.topLevelComment.snippet.authorDisplayName} &bull; <span className='text-[11px] font-semibold  text-[#7b7777]'> {moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span> </h4>
                <p className='text-[11px]'>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className='comment-section flex items-center'> 
                <img className='w-[18px] h-[18px]   filter invert-[1] ' src={assets.like} alt="" />
                <span className='mx-3 text-[13px]'>{valueConverter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                <img className='w-[18px] h-[18px]   filter invert-[1] ' src={assets.dislike} alt="" />
                </div>
            </div>
        </div>
        )
    })
}
     </div>
     </div>
</div>
    
    </>}
    
    
    
    </>
    
  )
}

export default Playsong