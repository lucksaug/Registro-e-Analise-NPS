import { React } from "react";
import "./Nota.css";
import { useState } from "react";

const Nota = () => {
  const propriedades = [
    { id: "1", class: "btn-1", value: 1 },
    { id: "2", class: "btn-2", value: 2 },
    { id: "3", class: "btn-3", value: 3 },
    { id: "4", class: "btn-4", value: 4 },
    { id: "5", class: "btn-5", value: 5 },
    { id: "6", class: "btn-6", value: 6 },
    { id: "7", class: "btn-7", value: 7 },
    { id: "8", class: "btn-8", value: 8 },
    { id: "9", class: "btn-9", value: 9 },
    { id: "10", class: "btn-10", value: 10 },
  ];
  const corString = "";
  const [cor, setCor] = useState("");
  const [pressionado, setPressionado] = useState(false);
  const [nota, setNota] = useState("");

  const isPressionado = (pressionado, {}) => {
    if (pressionado) {
      setPressionado(false);
    } else {
      setPressionado(true);
    }
    return alert("O botão foi" + pressionado.id + "foi pressionado");
  };
// lista com select
  return propriedades.map(function (item) {
    return (
      <button className={item.class} onClick={isPressionado}>
        {item.id}
      </button>
    );
  });
};
export default Nota;
