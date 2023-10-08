import React, { useContext } from 'react'
import InfoContext from '../context/infoContext';

function Form() {
  const {addLembretes, texto, setTexto, data, setData, getLembretes } = useContext(InfoContext)

  const handleChange = (event) => {
    if (event.target.name === "texto") setTexto(event.target.value);
    if (event.target.name === "data") setData(event.target.value);
  }

  const handleAddItem =  (event) => {
    if( texto.length < 3 || data === "") return alert("Preencha todos os campos")

    addLembretes()
  }

    return (
      <form id='form-component'>
        <h2>Criar novo Lembrete</h2>
        <div>
          <div>
          <label htmlFor="nomeform">Nome</label>
          <input type="text" name="texto" id="nomeform"  onChange={handleChange} value={texto} placeholder='nome do lembrete'/>
          </div>

          <div>
          <label htmlFor="dateform">Data</label>
          <input type="date" name="data" id="dateform" onChange={handleChange} value={data} placeholder='Data do lembrete (ss/mm/yyyy)'/>
          </div>
          
          <button type="button" onClick={handleAddItem}>Criar</button>
        </div>
        
      </form>
    )
}

export default Form;