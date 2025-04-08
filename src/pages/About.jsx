import React from 'react'
import ProgressBar from '../components/ProgressBar'
import Title from '../components/Title'

const About = () => {
  return (
    <div className='flex flex-1 items-center justify-center'>
      <div className="flex flex-col gap-2 items-center justify-center">
        
      <div className="text-2xl mb-3">
          <Title text1={'ABOUT'} text2={'ME'} />
        </div>
        <img src="ev_icon_pic.jpg" alt="" className='w-25 h-25 rounded-full shadow-lg' />
        <span className='lexend text-md'>EV</span>
        <div className="w-90">
          <ProgressBar />
        </div>
      </div>

    </div>
  )
}

export default About