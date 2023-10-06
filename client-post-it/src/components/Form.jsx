import React from 'react'

function Form() {
    return (
        <div>
        <h2>Criar novo Lembrete</h2>
        <label htmlFor="nomeform">Nome</label>
        <input type="text" id="nomeform" placeholder='nome do lembrete'/>
        
        <label htmlFor="dateform"></label>
        <input type="date" name="" id="dateform" placeholder='Data dolembrete (ss/mm/yyyy)'/>
        
        <button type="button">Criar</button>
      </div>
    )
}

export default Form;