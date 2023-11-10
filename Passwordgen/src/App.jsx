import { useState , useCallback } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(7)
  const [numberok,setnumberok]=useState(false)
  const [symbolok,setsymbolok]=useState(false)
  const [password,setpassword]=useState("")

  const passgen= useCallback(()=>{
    let pass=""
    letstr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberok){
      str +="1234567890"
    }

    if(symbolok){
      str +="!@#$%^&*()" 
    }

    for (let i=1;i<=length;i++){
let char =Math.floor(Math.random() * str.length + 1)
    
pass=str.charAt(char)

}
   
setpassword(pass)
  },[length,numberok,symbolok,setpassword])

  return (
    <>
    <h1 className='text-4xl text-center text-cyan-50 '>Password Genretor</h1>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>
test
    </div>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
<input type="text" 
value={password}
className='outline-none w-full py-1 px-3'
placeholder='password'
readOnly
   
/>
<button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1 '>
        <input
        type='range'
        min={6}
        max={30}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setlength(e.target.value)}}
        />
        <label> Length :{length}</label>

      </div>
      <div className='flex items-center gap-x-1 '>
      <input
        type='checkbox'
        defaultChecked={numberok}
      id='numberInput'
       
        onChange={()=>{setnumberok((prev)=>!prev);}}
        />
        <label htmlFor="numberInput">numberInput</label>
      </div>
      <div className='flex items-center gap-x-1 '>
      <input
        type='checkbox'
        defaultChecked={symbolok}
      id='symbolInput'
       
        onChange={()=>{setsymbolok((prev)=>!prev);}}
        />
        <label htmlFor="symbolInput">symbolInput</label>
      </div>

    </div>
    
    </>
  )
}

export default App
