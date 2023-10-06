import React from 'react';

function Data() {
  const data = {
    "exemplo1": ["nome lembrete ", "data"],
    "exemplo2": ["nome lembrete 2", "data"]
  }

    return (
        <div>
        <h2>Lista de lembretes</h2>
        {
          !data ? <p>Carregando..</p> : data.exemplo1.map((value,index) => (
          <div key={index}> 
            <p>{value}</p>
          </div>))
        }
      </div>
    )
}

export default Data;