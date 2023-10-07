import React, { useContext, useEffect } from 'react';
import InfoContext from '../context/infoContext';

function Data() {
  const { getLembretes, lembretes, setLembretes, deleteLembretes } = useContext(InfoContext);

  const handleDeleteItem = async (event) => {
    await deleteLembretes(event.target.name);
  }

  useEffect(() => {
    getLembretes();
  }, [setLembretes])

    return (
        <div>
        <h2>Lista de lembretes</h2>
        <div id="lista-lembretes">
        {
          !lembretes ? <p>Carregando...</p> : lembretes.map((value,index) => (
          <div key={index}> 
            <p>{value.id}</p>
            <p>{value.texto}</p>
            <p>{value.data}</p>
            <img 
              src="../../public/lixeira.png" 
              alt="icone de lixeira" 
              id="icone-lixeira"
              name={value.id}
             onClick={handleDeleteItem}
            />
          </div>))
        }
        </div>

      </div>
    )
}

export default Data;