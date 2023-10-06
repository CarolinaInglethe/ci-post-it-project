import { useState } from 'react'
import './App.css'
import Form from  './components/Form';
import Data from './components/Data';
import NavBar from './components/NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
     <Form/>
     <Data/>
     
    </>
  )
}

export default App
