import { Link } from "react-router-dom";
import {useState} from 'react'
import "./index.scss";
import Cabecalho from "../components/cabecalho";

export default function Exercicio01() {
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
    <div>
      
        <Cabecalho/>

      <div className="navegacao01">
        <div className="titulo01">
          <Link to="/">
            <img src="/assets/images/seta.png" alt="" />
          </Link>
          <h2>Exercício 01 - Cupom de desconto</h2>
        </div>
        <div className="linha" />

        <div className="exercicio01">
          <div className="explicacao01">
            <p>
              Implementar um programa em Javascript para calcular o valor final
              de uma compra a partir do valor da compra e do cupom de desconto.
              O cupom diz quantos reais terá de desconto.
            </p>
          </div>

          <br />
          <br />
          <br />
          <div className="funcionalidade01">
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
          <div className="resultado01">
            <br />
            <h4>Resultado: O total é R$ {res}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
