import React, { useContext } from 'react'
import Sidebar from '../../components/sideebar/Sidebar'
import context from '../../context/context'
import Feed from '../../components/feed/Feed'
import SIderes from '../../components/sideebar/SIderes';
function Home() {
  const {expand} = useContext(context);
  
  return (
    <>
    <Sidebar/>
    <SIderes/>
    <div className={`${expand ?'lg:pl-[12%] pl-[0]':'lg:pl-[5%] pl-0'} bg-[#0F0F0F]  pr-[2%]  py-[20px]` }>
      <Feed/>
    </div>
    </>
  )
}

export default Home