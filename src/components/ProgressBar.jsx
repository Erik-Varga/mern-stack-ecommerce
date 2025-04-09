import React from 'react'

const ProgressBar = () => {
    const current_hr = 4;
    const current_min = 56;

    const total_hr = 13;
    const total_min = 23;

    const current_time = (current_hr * 60) + current_min;
    const total_time = (total_hr * 60) + total_min;
    const pct_done = (Math.round((current_time / total_time) * 100)).toFixed(0);

    return (
        <div>
            <div className='flex justify-center items-center gap-2 '>
            <div className="flex items-center gap-2">
          <img src="ev_icon_pic.jpg" alt="" className='w-15 h-15 rounded-full shadow-lg' />
          <span className='lexend text-md'>Erik Varga</span>
        </div>
                <span>{current_hr}:{current_min} | {total_hr}:{total_min} | {pct_done}%</span>          
            </div>
        </div>
    )
}

export default ProgressBar