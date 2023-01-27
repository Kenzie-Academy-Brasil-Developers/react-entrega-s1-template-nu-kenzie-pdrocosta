import "./TotalMoney.css";

export function TotalMoney({inputs}) {
  const valorTotal = 0
  inputs ? (
    valorTotal = inputs.reduce((valorAnterior, valorAtual)=>{
      valorAtual.value + valorAnterior;
   },0)
   return(
<>
     <div id="divTotalMoney">
       <div>
         <p>Valor Total:</p>
         <p>O valor se refere ao saldo</p>
       </div>
       <p id="resultadoSomas">{valorTotal}</p>
       </div>
     </>
   )
     
   ):(
    <><p>sem lancamentos</p></>
   )}
 
