import React from 'react'

const ProgressBar = () => {
    const current_hr = 5;
    const current_min = 10;

    let zf_current_min = current_min
    var zeroFilledCurrentMin = ('0'+zf_current_min).slice(-4);
        
    const total_hr = 13;
    const total_min = 23;

    let zf_total_min = total_min
    var zeroFilledTotalMin = ('0'+zf_total_min).slice(-4);

    const current_time = (current_hr * 60) + current_min;
    const total_time = (total_hr * 60) + total_min;
    const pct_done = (Math.round((current_time / total_time) * 100)).toFixed(0);

    return (
        <div>
            <div className='flex justify-center items-center gap-2 '>
            <div className="flex items-center gap-2">
          <img src="ev_icon_pic.jpg" alt="" className='w-10 h-10 rounded-full shadow-lg' />
          <span className='lexend text-md'>Erik Varga</span>
        </div>
                <span>{current_hr}:{current_min < 10 ? zeroFilledCurrentMin : current_min} | {total_hr}:{total_min < 10 ? zeroFilledTotalMin : total_min} | {pct_done}%</span>          
            </div>
        </div>
    )
}

export default ProgressBar