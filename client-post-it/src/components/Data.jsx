import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Data() {
  const [ lembretes ,setLembretes ] = useState([]);

  const getLembretes = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setLembretes(res.data)
    } catch (error) {
      return error
    }
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
            <img src="../../public/lixeira.png" alt="icone de lixeira" id="icone-lixeira"/>
          </div>))
        }
        </div>

      </div>
    )
}

export default Data;