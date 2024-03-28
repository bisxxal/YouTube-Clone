import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import context from '../../context/context'
// import { useHistory, Link} from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar() {
  const {expand,catagorie,input,setinput ,showsearch, setexpand,setCategorie} = useContext(context);
const togle = ()=>{

  setexpand(!expand) 
}
 

const handleKeyDown = (e) => {
  if (e.key === "Enter") { 
    setinput(e.target.value);
    showsearch();
    if(input !== ' ' ){

      window.location.href = `/search_query`;
    }
  }
};

const handleChange = (e) => {
  setinput(e.target.value);
};

  return (
    <div className='flex w-full px-[1%] py-[10px]  border-b-[.7px] lg:border-none border-[#343333] item-center sticky top-0 z-10 justify-evenly  lg:justify-between h-12 bg-[#0F0F0F]'>
        <div className='logo flex items-center gap-6 '>   
        
        <div onClick={togle}  className= 'hidden hover:bg-[#3F3F3F] h-9 lg:flex justify-center items-center w-9 rounded-full '>
          
           <img className='w-[20px] ' src={assets.menu} alt="" /> 
          
          </div>
         <Link to={'/'}>
        <img className='lg:w-[80px] lg:pl-3 pl-2 lg:p-0  w-[70px] lg:block ' src={assets.youtubelogo} alt="" />
        {/* <img className='w-[50px] mt-3 pl-3 lg:p-0 lg:hidden ' src={assets.yt} alt="" /> */}
         </Link>
         </div>
        <div className=' serchbar'>
            <Link to={'/search_query'}   className='flex items-center px-3   border-[1px] outline-1 border-[#414040] rounded-full bg-[#1c1b1b] '>

             <input
              onKeyDown={(e) => { 
                        if (e.key === "Enter") { 
                           setinput(e.target.value)
                           showsearch()
                        } 
                    }}  onChange={(e)=>setinput( )} value={input}  className='w-[250px]  lg:w-[400px] px-3 py-1 text-[14px] text-white bg-transparent outline-none  rounded-full' placeholder='search' type="text" />

       
             <img onClick={(e)=>{setinput(e.target.previousSibling.value)}} className='w-[14px] ' src={assets.search} alt="" />
             </Link>
            </div>
        <div className='hidden lg:flex gap-5 items-center'>
        <img className='w-[22px] '  src={assets.notification} alt="" />
        <img className='w-[22px] '  src={assets.more} alt="" />
        <img className='w-[22px] '  src={assets.uplode} alt="" />
        <img className='w-[22px] rounded-full '  src={assets.userprofile} alt="" />
        </div>
    </div>
  )
}

export default Navbar