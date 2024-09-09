import "./index.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import Titulo from "../components/titulo";
import Explicacao from "../components/explicacao";
import Cabecalho from "../components/cabecalho";

export default function Exercicio03() {
  const [qtdPQN, setQtdPQN] = useState(0);
  const [qtdMED, setQtdMED] = useState(0);
  const [qtdGG, setQtdGG] = useState(0);
  const [res, setRes] = useState(0);

  return (
    <div className="exercicio03">
      <Cabecalho />
      <div className="navegacao03">

        <Titulo
          titulo='Exercício 03 - Valor total por quantidade'
          linha='#37FFF3'
        />


        <Explicacao
          explicacao='Implementar um programa em Javascript para calcular o total de uma
              venda de açaí a partir das quantidades compradas para cada
              tamanho: pequeno, médio e grande, sabendo que o valor do
              açaí é R$ 13,50, R$ 15,00 e R$ 17,50 respectivamente '
        />
      
        <br />
        <br />
        <br />
        <div className="funcionalidade03">
          <div className="entradas">
            <div className="inputs">
              <h3>Quantidade pequeno</h3>
              <input
                type="number"
                onChange={(e) => setQtdPQN(e.target.value)}
              />

            </div>
            <div className="inputs">
              <h3> Quantidade médio</h3>
              <input
                type="number"
                onChange={(e) => setQtdMED(e.target.value)}
              />
            </div>
            <div className="inputs">
              <h3>Quantidade grande</h3>
              <input
                type="number"
                onChange={(e) => setQtdGG(e.target.value)}
              />



            </div>
          </div>

          <div className="executar03">
            <button
              onClick={(e) =>
                setRes(qtdPQN * 13.5 + qtdMED * 15.0 + qtdGG * 17.5)
              }
            >
              executar
            </button>


          </div>

          <br />
          <br />
          <br />
        </div>
        <div className="resultado">
          <br />
          <h4>Resultado: O total é R$ {res}</h4>
        </div>
      </div>
    </div>
  );
}
