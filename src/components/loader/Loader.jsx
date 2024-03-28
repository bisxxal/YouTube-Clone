import React from 'react'
import { Oval } from 'react-loader-spinner'

function Loader() {
  return (
    <div className='w-full flex justify-center items-center h-screen bg-[#0F0F0F]'>
     <Oval
    visible={true}
    height="50"
    width="50"
    color="white"
    ariaLabel="oval-loading"
    wrapperStyle={{ color: 'gray' }}
    wrapperClass=""
/>

      
      </div>
    
  )
}

export default Loader

 