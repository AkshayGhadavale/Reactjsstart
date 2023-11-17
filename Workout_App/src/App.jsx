import Doplist from "./Components/Doplist"



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="w-full max-h-screen h-screen bg-slate-500 flex justify-center items-center">
<div className="w-3/4 h-3/6 bg-red-300">
<div className="w-full h-1/6 bg bg-green-300 flex justify-center items-center">
  <h1>Work Out List </h1>
</div>
<div className="w-full h-5/6 bg bg-red-900 flex justify-center items-center flex-col">
<Doplist wname="Plank"   quntity="60" ></Doplist>
<Doplist  wname="pushups" quntity ="30"></Doplist>
<Doplist  wname="crunch" quntity="10"></Doplist>
</div>



</div>
</div>
    </>
  )
}

export default App
