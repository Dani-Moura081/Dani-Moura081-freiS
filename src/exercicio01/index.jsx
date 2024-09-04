import {useState} from 'react'
import "./index.scss";
import Cabecalho from "../components/cabecalho";
import Titulo from "../components/titulo";



export default function Exercicio() {
  const [valor, setValor] = useState(0);
  const [cupom, setCupom] = useState(0)
  const [res, setRes] = useState('')
  function valorTotal(){
    if(cupom == ''){
      setRes(valor)
    }else if (cupom >= valor){
      setRes(0)
    } else {
      setRes(valor-cupom)
    }
  }
  return (
    <div className='exercicio'>
      
        <Cabecalho/>

      <div className="navegacao">
        <Titulo
          titulo='Exercício  - Cupom de desconto'
          linha= '#FFCE37'
          
          explicacao='Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá de desconto.'
        />


          <br />
          <br />
          <br />
          <div className="funcionalidade">
            <h3>Informe o valor do pedido</h3>
            <input type="number"  onChange={(e) => setValor(e.target.value)}/>

            <h3>Informe o valor do cupom</h3>
            <input type="number" onChange={(e) => setCupom(e.target.value)}/>

            <div className="executar">
              <button onClick={valorTotal}>executar</button>

              <br />
              <br />
              <br />
            </div>
          </div>
          <div className="resultado">
            <br />
            <h4>Resultado: O total é R$ {res}</h4>
          </div>
        </div>
      </div>
  );
}
