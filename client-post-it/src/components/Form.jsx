import React, { useState, toast } from 'react'
import axios from 'axios';

function Form() {
  const [texto, setTexto] = useState("");
  const [ data, setData] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "texto") setTexto(event.target.value);
    if (event.target.name === "data") setData(event.target.value);
  }

  const addItem =  (event) => {
    if( texto.length < 3 || data === "") return alert("Preencha todos os campos")

     axios.post("http://localhost:8800", {
      texto: texto,
      data: data
    })
    .then(({data}) => console.log(data))
    .catch(({data}) => console.log(data))

    setTexto("");
    setData("");
  }

    return (
      <form id='form-component'>
        <h2>Criar novo Lembrete</h2>
        <div>
          <>
          <label htmlFor="nomeform">Nome</label>
          <input type="text" name="texto" id="nomeform"  onChange={handleChange} placeholder='nome do lembrete'/>
          </>

          <>
          <label htmlFor="dateform">Data</label>
          <input type="date" name="data" id="dateform" onChange={handleChange} placeholder='Data do lembrete (ss/mm/yyyy)'/>
          </>
          
          <button type="button" onClick={addItem}>Criar</button>
        </div>
        
      </form>
    )
}

export default Form;