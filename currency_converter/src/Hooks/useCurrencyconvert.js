 import {useEffect , useState} from "react"


 function useCurrencyconvert(currency){
    const [vaule, setvaule] =useState();
useEffect (()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
.then((res)=>res.json())
.then((res)=> setvaule(res[currency]) )
console.table(vaule)
},[currency])

console.log(vaule)
return vaule
 }

 export default useCurrencyconvert