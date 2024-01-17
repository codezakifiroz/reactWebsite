import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(0)

  const incValue = ()=>{
    if(counter < 20)
      setCount(counter +1)
  }
  const decValue = ()=>{
    if(counter > 0)
      setCount(counter -1)
  }
  return (
    <>
     <h1>Chai aur React</h1>
     <h3>Chai count: {counter}</h3>
     <button
     onClick={incValue}
     >Increase</button>
     <button onClick={decValue}>Decrease</button>
    </>
  )
}

export default App
