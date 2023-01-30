import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./globalStyles.css";
import {} from "//src/assets/Illustration.svg"
import { Header } from "./components/header/HeaderComponent.jsx";
import { Form } from "./components/Form/FormComponent.jsx";
import { TotalMoney } from "./components/TotalMoney/TotalMoneyComponent.jsx";
import { Card } from "./components/Card/CardComponent.jsx";
function App() {
  const [home, setHome] = useState(true);
  const [inputs, setInputs] = useState([]);

  return (
    <div id="renderDiv">
      {home ? (
        <>
          <div id="mainDiv">
            <h3>
              <span>Nu </span>Kenzie
            </h3>

            <h2>Centralize o controle das suas financas</h2>
            <h6>de forma rapida e segura</h6>
            <button id="btn_Start" onClick={() => setHome(false)}>
              Iniciar
            </button>
          </div>
          <img src="./src/assets/Illustration.svg" alt="ilustrationsvg" />
        </>
      ) : (
        <>
          <div id="div_Started">
            <Header home={home} setHome={setHome} />
            <div id="divLeft" className="main">
              <Form inputs={inputs} setInputs={setInputs} />
              <TotalMoney inputs={inputs} />
            </div>
            <div className="main">
              <h3>Resumo Financeiro</h3>
              <Card inputs={inputs} setInputs={setInputs} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
//
export default App;
