import React from 'react';

function Data() {
  const data = {
    "exemplo1": ["nome lembrete 1 ", "data"],
    "exemplo2": ["nome lembrete 2", "data"]
  }
  const lembretes = Object.keys(data);

    return (
        <div>
        <h2>Lista de lembretes</h2>
        {
          !data ? <p>Carregando..</p> : lembretes.map((key,index) => (
          <div key={index}> 
            <p>{data[key]}</p>
          </div>))
        }
      </div>
    )
}

export default Data;