import { useState } from "react";
import "./Form.css";
import { Card } from "../Card/CardComponent.jsx";

export function Form({ inputs, setInputs }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("entrada");

  function handleInput(event) {
    event.preventDefault();

    const newInput = { description, value, type };
    console.log(newInput);
    setInputs((inputs) => [...inputs, newInput]);
  }
  return (
    <>
      <form>
        <p>Descricao</p>
        <input
          type="text"
          id="descInput"
          name="description"
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Digite aqui sua descricao"
        />
        <p>Ex: Compra de roupas</p>
        <div className="div_Infos_input">
          <div id="divInput_value_type">
            <p>Valor:</p>
            <input
              type="number"
              onChange={(event) => setValue(event.target.value)}
              name="value"
              id="inputValue"
            />
          </div>

          <div>
            <p>Tipo de valor</p>
            <select
              name="type"
              id="valueType"
              onChange={(event) => setType(event.target.value)}
            >
              <option value="entrada">Entrada</option>
              <option value="saida">Saida</option>
            </select>
          </div>
        </div>
        <button id="addBtn" type="submit" onClick={handleInput}>
          Inserir Valor
        </button>
      </form>
    </>
  );
}
