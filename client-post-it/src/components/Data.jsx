import React, { useContext, useEffect } from 'react';
import InfoContext from '../context/infoContext';

function Data() {
  const { getLembretes, lembretes, setLembretes, deleteLembretes, lembretesPorData } = useContext(InfoContext);
  const datasKey = Object.keys(lembretesPorData);

  useEffect(() => {
    getLembretes();
  }, [setLembretes])

  const handleDeleteItem = async (event) => {
    await deleteLembretes(event.target.name);
  }

    return (
        <section>
        <h2>Lista de lembretes</h2>
        <div>
        {
          !lembretesPorData ? <p>Carregando...</p> : datasKey.map((value,index) => (
          <div key={index}> 
              <h3>{value}</h3>
              {
                !lembretesPorData[value] ? <p>carregando ...</p> : lembretesPorData[value].map((value2,index2) => (
                <div key={index2} id="lista-lembretes">
                  <p>{value2.texto}</p>
                  <img 
                     src="../../public/lixeira.png" 
                     alt="icone de lixeira" 
                     id="icone-lixeira"
                     name={value2.id}
                     onClick={handleDeleteItem}
                  />
                </div>
                ))
              }
            
          </div>))
        }
        </div>

      </section>
    )
}

export default Data;