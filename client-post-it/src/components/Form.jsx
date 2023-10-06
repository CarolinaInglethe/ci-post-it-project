import React from 'react'

function Form() {
    return (
      <form id='form-component'>
        <h2>Criar novo Lembrete</h2>
        <div>
          <>
          <label htmlFor="nomeform">Nome</label>
          <input type="text" id="nomeform" placeholder='nome do lembrete'/>
          </>

          <>
          <label htmlFor="dateform">Data</label>
          <input type="date" name="" id="dateform" placeholder='Data dolembrete (ss/mm/yyyy)'/>
          </>
          
          <button type="button">Criar</button>
        </div>
        
      </form>
    )
}

export default Form;