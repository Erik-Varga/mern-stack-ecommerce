import React from 'react'
import Title from '../components/Title'

const PlaceOrder = () => {
  return (
    <div className='flex flex-1 items-center justify-center'>
      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 mih-h-[80vh] border-t">
        
        {/* left side */}
        <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-2xl mb-3">
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder