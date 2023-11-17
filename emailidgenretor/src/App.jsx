import { useState,useCallback ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [email, setemail]=useState("")
  // const [count, setCount] = useState(0)
  const [finalemail, setfinalemail]=useState("aa")
  const [error, setError] = useState('');

 const emailcreate = useCallback(()=>{
  if (email.trim() !== '' && !email.includes('@')) {
    let fyemail = email + '@gmail.com';
    setfinalemail(fyemail);
    setError('');
  } else {
    setfinalemail('gmail.com');
    setError('Invalid input: "@" not allowed');
  }
 },[email,setfinalemail,setError])

 useEffect(()=>{

  emailcreate()
},[email])


  return (
    <>
      <h1 className='text-4xl text-center text-cyan-50 '>Password Genretor</h1>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-0 my-8 text-orange-500 bg-gray-500'>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
<input type="text" 
className='outline-none w-full py-2 px-3'
placeholder='Email iD'
readOnly
value={finalemail}


/>
<button className='outline-none bg-green-700 text-white px-3 py-0.5 shrink-0'>Copy</button>

    </div>
    
    {/* {error && <p className="text-red-500 bg-white dis">{error}</p>} */}

    </div>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
<input type="text" 

className='outline-none rounded-lg   w-full my-2 py-2 px-3'
placeholder='Enter text you want in your Emaild'
 value={email}
onChange={(e) => setemail(e.target.value)}
/>
</div>
    </>
  )
}

export default App
