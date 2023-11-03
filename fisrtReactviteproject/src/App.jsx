import { useState } from 'react'
import './App.css'

function App() {
  const [counter , setcounti] = useState(0)//number
  const [name, setName]=useState('Akshay')//String
  const [liked, setliked]=useState(true)//boolean
 

  function handleChange(e) {
    setliked(e.target.checked);
  }

  const addvaule =()=>{
    if(counter<20){
    setcounti(counter+1)
    }
    else{
      alert("limit over")
    }
         
  }

  const subvaule =()=>{

    if(counter>0){
      setcounti(counter-1)
      }
      else{
        alert("limit over")
      }
   
         
  }
  return (
    <>
    <input value={name} onChange={(e)=>{
      setName(e.target.value)
    }}/>   
      <h1>{name} Ghadavale Score{counter+2}</h1>
      <h5>Project Counts :- {counter}</h5>

      <button
      onClick={addvaule}
      >increase</button>
     <br /> <br />
      <button onClick={subvaule}>decrease</button>

      <input
          type="checkbox"
          checked={liked}
          onChange={handleChange}
          
        />
         <p>You {liked ? 'theu liked' : ' they did not like'} this.</p>
    </>
  )
}

export default App
