import "./index.scss";
import { useState } from "react";
import Cabecalho from "../components/cabecalho";
import Titulo from "../components/titulo";
import Explicacao from "../components/explicacao";

export default function Exercicio02() {
  const [converterKG, setConverterKG] = useState(0);
  const [res, setRes] = useState(0);


  return (
    <div className="exercicio02">
      <Cabecalho />

      <div className="navegacao02">

        <Titulo
          titulo='Exercício 02 - Converter Kg/gramas'
          linha='#B3FF37'
        />

        <Explicacao
          explicacao='Implementar um programa em Javascript para converter kilos em gramas.'
        />

        <br />
        <br />
     
        <div className="funcionalidade02">
          <h3>Valor em kilos</h3>
          <input
            type="number"
            onChange={(e) => setConverterKG(e.target.value)}
          />

          <div className="executar02">
            <button onClick={() => setRes(converterKG * 1000)}>executar</button>

            <br />
            <br />
            <br />
          </div>
        </div>
        <div className="resultado02">
          <br />
          <h4>Resultado: O total é {res}</h4>
        </div>
      </div>
    </div>
  );
}
