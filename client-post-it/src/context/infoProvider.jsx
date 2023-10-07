import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import InfoContext from './infoContext';

function InfoProvider({ children }) {
  const [ lembretes, setLembretes ] = useState([]);
  const [texto, setTexto] = useState("");
  const [ data, setData] = useState("");


  const getLembretes = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setLembretes(res.data)
    } catch (error) {
      return error
    }
  }

  const addLembretes = async () => {
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


  const contextValues = {
    getLembretes,
    lembretes,
    setLembretes,
    addLembretes,
    texto,
    setTexto,
    data,
    setData
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