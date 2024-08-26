import "./index.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cabecalho from "../components/cabecalho";

export default function Exercicio03() {
  const [qtdPQN, setQtdPQN] = useState(0);
  const [qtdMED, setQtdMED] = useState(0);
  const [qtdGG, setQtdGG] = useState(0);
  const [res, setRes] = useState(0);

  return (
    <div>
      <Cabecalho/>
      <div className="navegacao03">
        <div className="titulo03">
          <Link to="/">
            <img src="/assets/images/seta.png" alt="" />
          </Link>
          <h2>Exercício 03 - Valor total por quantidade</h2>
        </div>
        <div className="linha" />
        <div className="exercicio03">
          <div className="explicacao03">
            <p>
              Implementar um programa em Javascript para calcular o total de uma
              venda de açaí a partir das quantidades compradas para cada
              tamanho: pequeno, médio e grande, sabendo que o valor do
              açaí é R$ 13,50, R$ 15,00 e R$ 17,50 respectivamente
            </p>
          </div>

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
            <div className="executar">
              <button
                onClick={(e) =>
                  setRes(qtdPQN * 13.5 + qtdMED * 15.0 + qtdGG * 17.5)
                }
              >
                executar
              </button>

              <br />
              <br />
              <br />
            </div>
          </div>
          <div className="resultado03">
            <br />
            <h4>Resultado: O total é R$ {res}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
