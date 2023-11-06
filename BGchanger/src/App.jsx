import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState('green')

  return (
    <>
   <div className='w-full h-screen duration-1000' style={{backgroundColor:color}}>

<div className='flex fixed flex-wrap justify-center 
bottom-12 inset-x-0 px-2'>

<div className='flex  flex-wrap justify-center 
gap-3 shodow-lg bg-white px-3 py-2 rounded-2xl'>
  <button className='outlinw-none px-4 text-black shadow-2xl rounded-2xl' style={{backgroundColor:"red"}} onClick={()=>setColor('red')}>red</button>

  <button className='outlinw-none px-4 text-black shadow-2xl rounded-2xl' style={{backgroundColor:"green"}} onClick={()=>setColor('green')}>green</button>

  <button className='outlinw-none px-4 text-black shadow-2xl rounded-2xl' style={{backgroundColor:"blue"}} onClick={()=>setColor('blue')}>blue</button>
</div>
</div>

    </div>
    </>
  )
}

export default App
