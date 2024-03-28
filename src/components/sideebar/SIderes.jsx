import  { useContext } from 'react'
import { assets } from '../../assets/assets'
import context from '../../context/context'
import Loader from '../loader/Loader'
function SIderes() {
    const {resexpand,catagorie , setCategorie,loader , setLoader } = useContext(context);
  return (
    <div className={`${resexpand?'left-0':'left-[-200px]'} fixed top-[80px] left-0 bg-[#0F0F0F] text-white w-[190px] h-screen lg:hidden flex flex-col`}>
      <div className='flex flex-col gap-3 mt-6  '> 
            <div onClick={()=>setCategorie(0)} className={`${catagorie === 0 ? "bg-[#3F3F3F]" :""}   links py-[5px] rounded-l px-[8px] flex-wrap cursor-pointer rounded-lg hover:bg-[#3F3F3F] flex  items-center gap-3`}>
                <img className='w-[18px] filter invert-[1] ' src={assets.home} alt="" /> <p className={`${resexpand?'':'hidden'} text-[12px] capitalize`}>home</p>
            </div>
            <div onClick={()=>setCategorie(20)}  className={`${catagorie === 20 ? "bg-[#3F3F3F]" :""}   links py-[5px] rounded-l px-[8px] flex-wrap cursor-pointer rounded-lg hover:bg-[#3F3F3F] flex  items-center gap-3`}>
                <img className='w-[18px] filter invert-[1] ' src={assets.game_icon} alt="" /> <p className={`${resexpand?'':'hidden'} text-[12px] capitalize`}>game</p>
            </div>
            <div  onClick={()=>setCategorie(2)} className={`${catagorie === 2 ? "bg-[#3F3F3F]" :""}   links py-[5px] rounded-l px-[8px] flex-wrap cursor-pointer rounded-lg hover:bg-[#3F3F3F] flex  items-center gap-3`}>
                <img className='w-[18px] filter invert-[1] ' src={assets.automobiles} alt="" /> <p className={`${resexpand?'':'hidden'} text-[12px] capitalize`}>automobiles</p>
            </div>
            <div onClick={()=>setCategorie(17)}  className={`${catagorie === 17 ? "bg-[#3F3F3F]" :""}   links py-[5px] rounded-l px-[8px] flex-wrap cursor-pointer rounded-lg hover:bg-[#3F3F3F] flex  items-center gap-3`}>
                <img className='w-[18px] filter invert-[1] ' src={assets.sports} alt="" /> <p className={`${resexpand?'':'hidden'} text-[12px] capitalize`}>sports</p>
            </div>
            <div onClick={()=>setCategorie(24)}  className={`${catagorie === 24 ? "bg-[#3F3F3F]" :""}   links py-[5px] rounded-l px-[8px] flex-wrap cursor-pointer rounded-lg hover:bg-[#3F3F3F] flex  items-center gap-3`}>
                <img className='w-[18px] filter invert-[1] ' src={assets.entertainment} alt="" /> <p className={`${resexpand?'':'hidden'} text-[12px] capitalize`}>entertainment</p>
            </div>
            <div onClick={()=>setCategorie(10)}  className={`${catagorie === 10 ? "bg-[#3F3F3F]" :""}   links py-[5px] rounded-l px-[8px] flex-wrap cursor-pointer rounded-lg hover:bg-[#3F3F3F] flex  items-center gap-3`}>
                <img className='w-[18px] filter invert-[1] ' src={assets.music} alt="" /> <p className={`${resexpand?'':'hidden'} text-[12px] capitalize`}>music</p>
            </div>
            <div onClick={()=>setCategorie(28)}  className={`${catagorie === 28 ? "bg-[#3F3F3F]" :""}   links py-[5px] rounded-l px-[8px] flex-wrap cursor-pointer rounded-lg hover:bg-[#3F3F3F] flex  items-center gap-3`}>
                <img className='w-[18px] filter invert-[1] ' src={assets.tech} alt="" /> <p className={`${resexpand?'':'hidden'} text-[12px] capitalize`}>technology</p>
            </div>
            <div onClick={()=>setCategorie(22)}  className={`${catagorie === 22 ? "bg-[#3F3F3F]" :""}   links py-[5px] rounded-l px-[8px] flex-wrap cursor-pointer rounded-lg hover:bg-[#3F3F3F] flex  items-center gap-3`}>
                <img className='w-[18px] filter invert-[1] ' src={assets.blogs} alt="" /> <p className={`${resexpand?'':'hidden'} text-[12px] capitalize`}>blogs</p>
            </div>
            <div  onClick={()=>setCategorie(25)} className={`${catagorie === 25 ? "bg-[#3F3F3F]" :""}   links py-[5px] rounded-l px-[8px] flex-wrap cursor-pointer rounded-lg hover:bg-[#3F3F3F] flex  items-center gap-3`}>
                <img className='w-[18px] filter invert-[1] ' src={assets.news} alt="" /> <p className={`${resexpand?'':'hidden'} text-[12px] capitalize`}>news</p>
            </div>
         
        </div>
        
    </div>
  )
}

export default SIderes