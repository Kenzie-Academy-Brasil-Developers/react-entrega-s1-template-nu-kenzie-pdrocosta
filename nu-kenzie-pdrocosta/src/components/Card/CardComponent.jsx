import "./Card.css";
import trash from "./trash.svg";
export function Card({ inputs, setInputs, index }) {
  function newArr(index) {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    console.log(newInputs);
    setInputs(newInputs);
  }

  return (
    <ul>
      {inputs.length ? (
        inputs.map((input, index) => (
          <>
            <li key={index}>
              <div>
                <h3 className="infoInputDescription">{input.description}</h3>
                <p>{input.type}</p>
              </div>
              <p className="infoInputValue">R${input.value},00</p>
              <button className="deleteBtn" onClick={() => newArr(index)}>
                <img src={trash} alt="deleteIcon" />
              </button>
            </li>
          </>
        ))
      ) : (
        <p>Voce ainda nao fez nenhum lancamento</p>
      )}
    </ul>
  );
}
