import React from 'react'

const App = () => {
  return (
    <div className='relative h-screen overflow-hidden'>
      <video className='absolute inset-0 h-full w-full object-cover ' autoPlay loop muted playsInline>
        <source src='/mixkit-birthday-party-table-with-balloons-falling-5101-hd-ready.mp4' type="video/mp4" />
      </video>

      <div className='absolute bg-black/40 inset-0'></div>

      <div className='relative z-10 flex justify-center h-full items-center text-white '>
        
      </div>
    </div>

  )
}

export default App