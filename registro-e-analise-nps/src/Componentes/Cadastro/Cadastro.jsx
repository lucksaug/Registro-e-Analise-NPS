//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { useState } from "react";
import Nota from "./Nota";
import { Link } from "react-router-dom";
import "../../Style/Cadastro.scss";

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
          <input
            className="input-field"
            type="text"
            placeholder="CPF: 123456789-12"
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>
        <div>
          <Nota />
        </div>
        <button type="submit" className="btn-enviar">
          Enviar
        </button>
      </form>
      <Link to="analise" className="link">
        Clique aqui para verificar as estátisticas
      </Link>
    </div>
  );
};

export default Cadastro;
