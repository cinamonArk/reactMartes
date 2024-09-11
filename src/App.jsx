import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carrusel from './componets/carrusel'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navb from './componets/Navb'
import Texto from './componets/txtt'
import Botones from './componets/Botones'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <Navb></Navb>
    <Carrusel></Carrusel>
    <Texto></Texto>
    <Botones></Botones>


    
    

    </div>
    
     
    </>
  )
}

export default App
