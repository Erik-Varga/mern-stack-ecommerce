import React from 'react'
import ProgressBar from '../components/ProgressBar'

const About = () => {
  return (
    <div className='flex flex-1 items-center justify-center'>
      <div className="flex flex-col gap-2 items-center justify-center">
        About
        <div className="w-90">
          <ProgressBar />
        </div>
      </div>

    </div>
  )
}

export default About