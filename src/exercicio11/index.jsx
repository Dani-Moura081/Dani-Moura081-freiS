import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.scss";
import Cabecalho from "../components/cabecalho";

export default function Exercicio11() {
  const [valor, setValor] = useState(0);
  const [tabuadas, setTabuadas] = useState([]);

  function calcularValor() {
    let tabuada = [];

    for (let i = 0; i <= 10; i++) {
      let resultado = i * valor;

      let textResult = ` ${valor} X ${i} = ${resultado} `;

      tabuada.push(textResult);
    }
    setTabuadas(tabuada);
  }

  return (
    <div>
      <Cabecalho />

      <div className="navegacao11">
        <div className="titulo11">
          <Link to="/">
            <img src="/assets/images/seta.png" alt="" />
          </Link>
          <h2>Exercício 11 - Tabuadas</h2>
        </div>

        <div className="linha" />

        <div className="exercicio11">
          <div className="explicacao11">
            <p>
              Implemente um programa em Javascript que escreva a tabuada de um
              número informado pelo usuário. A mensagem deve estar no formato ”A
              x B = X”.
            </p>
          </div>

          <br />
          <br />
          <br />
          <div className="funcionalidade11">
            <h3>Tabuada do:</h3>
            <input
              placeholder="0"
              type="number"
              onChange={(e) => setValor(e.target.value)}
            />

            <div className="executar">
              <button onClick={calcularValor}>executar</button>

              <br />
              <br />
              <br />
            </div>
          </div>
          <div className="resultado11">
            <br />
            {tabuadas.map((linha) => (
              <h4>{linha}</h4>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
