import React from 'react';
import './Cadastro.css';
import { useState } from 'react';


const Cadastro = () => {
  
  const [cpf, setCpf] = useState("");
  const [nota, setNota] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nota);
  };

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Faça a Avaliação aqui</h1>
            <div>
              <input className="input-field" type="text" placeholder="CPF: 123456789-12" onChange={(e) => setCpf(e.target.value)}/>
            </div>
            <div>
              <input className="input-field" type="number" placeholder="Ex: 10" min="0" max="10" onChange={(e) => setNota(e.target.value)}/>
            </div>
            <button type="submit">Enviar</button>
        </form>
        <a href="#">Clique aqui para verificar as estátisticas</a>
    </div>
  );
};

export default Cadastro;
