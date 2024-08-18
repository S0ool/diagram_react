import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateDiagram from "./components/create_diagram.jsx";
import Diagrams from "./components/diagrams.jsx";
import Background from '../public/background.jpg'
document.body.style.backgroundImage = `url(${Background})`
function App() {
  const [diagrams, setDiagrams] = useState(
      [
        {
          name:'name 1',
          color:'red',
          percent:20
        },
        {
          name:'name 2',
          color:'purple',
          percent:50
        },
        {
          name:'name 3',
          color:'blue',
          percent:80
        },
          {
          name:'name 1',
          color:'red',
          percent:20
        },
        {
          name:'name 2',
          color:'purple',
          percent:50
        },
        {
          name:'name 3',
          color:'blue',
          percent:80
        },
          {
          name:'name 1',
          color:'red',
          percent:20
        },
        {
          name:'name 2',
          color:'purple',
          percent:50
        },
        {
          name:'name 3',
          color:'blue',
          percent:80
        },
          {
          name:'name 1',
          color:'red',
          percent:20
        },
        {
          name:'name 2',
          color:'purple',
          percent:50
        },
        {
          name:'name 3',
          color:'blue',
          percent:80
        },
      ]
  )

  return (
    <>
      <CreateDiagram diagrams={diagrams} func={setDiagrams}/>
      <Diagrams diagrams={diagrams}/>


    </>
  )
}

export default App
