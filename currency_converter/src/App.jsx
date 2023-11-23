import { useState } from 'react'
import { Inputbx } from './components'
import useCurrencyconvert from './Hooks/useCurrencyconvert'

import './App.css'

function App() {
 const [amount,setamount]=useState(0)
 const [from,setfrom]=useState("usd")
 const [to ,setTo]=useState("inr")
 const [convertedamount, setconvertedamount] =useState(0)
  return (
    <>
    <h1 className=''>AKhsya</h1>
    </>
  )
}

export default App
