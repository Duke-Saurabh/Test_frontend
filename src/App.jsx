import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
useEffect(()=>{
 const  response=fetch(`/api`, {
  })

  console.log(response);
},[])


  return (
    <>
      
    </>
  )
}

export default App
