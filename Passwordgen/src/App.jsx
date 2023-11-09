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

    for (let i=1;i<=Array.length;i++){
let char =Math.random() * str.length + 1;
    }
    
  },[length,numberok,symbolok,setpassword])

  return (
    <>
    <h1 className='text-4xl text-center text-cyan-50 '>Password Genretor</h1>
    </>
  )
}

export default App
