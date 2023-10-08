import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import InfoContext from './infoContext';

function InfoProvider({ children }) {
  const [ lembretes, setLembretes ] = useState([]);
  const [texto, setTexto] = useState("");
  const [ data, setData] = useState("");

  const lembretesPorData = Object.groupBy(lembretes, ({data}) => data); // agrupando resultado de lembretes por data
  console.log(lembretesPorData)


  const getLembretes = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setLembretes(res.data)
    } catch (error) {
      return error
    }
  }

  const addLembretes = async (id) => {
    await axios.post("http://localhost:8800", {
      texto: texto,
      data: data
    })
    .then(({data}) => console.log(data))
    .catch(({data}) => console.log(data))

    
    setTexto("");
    setData("");

    getLembretes()
  }

  const deleteLembretes = async (id) => {
    await axios.delete("http://localhost:8800/" + id )
    .then(({data}) => console.log(data))
    .catch(({data}) => console.log(data))

    getLembretes()
  }


  const contextValues = {
    getLembretes,
    lembretes,
    setLembretes,
    addLembretes,
    texto,
    setTexto,
    data,
    setData,
    deleteLembretes,
    lembretesPorData
  };

  return (
    <InfoContext.Provider value={ contextValues }>
      { children }
    </InfoContext.Provider>
  );
}

export default InfoProvider;

InfoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};