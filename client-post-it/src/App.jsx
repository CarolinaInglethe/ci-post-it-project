import { useState } from 'react'
import './styles/App.css'
import Form from  './components/Form';
import Data from './components/Data';
import Header from './components/Header';

function App() {

  return (
    <div id="App">
     <Header/>
     <Form/>
     <Data/>
     
    </div>
  )
}

export default App
