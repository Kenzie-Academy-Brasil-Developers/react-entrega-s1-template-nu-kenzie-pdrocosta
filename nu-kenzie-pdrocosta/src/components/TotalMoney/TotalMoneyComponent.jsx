import "./TotalMoney.css";

export function TotalMoney({ inputs }) {
  let valorTotal = 0;
  valorTotal = inputs.reduce((valorAnterior, valorAtual) => {
    console.log(valorAtual.type);
    if (valorAtual.type === "saida") {
      return valorAnterior - Number(valorAtual.value);
    } else {
      return valorAnterior + Number(valorAtual.value);
    }
  }, valorTotal);
  return (
    <>
      <div id="divTotalMoney">
        <div>
          <p>Valor Total:</p>
          <p>O valor se refere ao saldo</p>
        </div>
        <p id="resultadoSomas">R${valorTotal}</p>
      </div>
    </>
  );
}
