import './styles/App.css'
import InfoProvider from './context/infoProvider';
import Form from  './components/Form';
import Data from './components/Data';
import Header from './components/Header';

function App() {

  return (
    <div id="App">
      <InfoProvider>
        <Header/>
         <Form/>
         <Data/>
      </InfoProvider>
    </div>
  )
}

export default App
