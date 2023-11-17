import React from 'react'

const Doplist = (props) => {
  return (
    <div className='w-full  h-20 bg-green-300 flex justify-center items-center'>
      <div className="w-1/5 h-full bg-slate-600"></div>
      <div className="w-4/5 h-full bg-blue-300 flex items-center justify-around border-dashed border-2 border-sky-500 " >
        <h1>{props.wname}</h1>
        <h1>{props.quntity}</h1>
      </div>


    </div>
  )
}

export default Doplist
