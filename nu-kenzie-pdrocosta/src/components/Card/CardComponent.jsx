import "./Card.css";

export function Card({ inputs }) {
  return (
    <ul>
      
      {inputs.length? (inputs.map((input) => (
        <>
          <li key={input.value}>
            <div>
              <h3 className="infoInputDescription">{input.description}</h3>
              <p>{input.type}</p>
            </div>
            <p className="infoInputValue">{input.value}</p>
            <button id="btnDelete">
              <img src="./src/assets/trash.svg" alt="deleteIcon" />
            </button>
          </li>
        </>
      ))):(
        <p>Voce ainda nao fez nenhum lancamento</p>
      )}
    </ul>
  ) 
}
