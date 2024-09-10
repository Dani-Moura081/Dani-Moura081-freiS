import "./index.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cabecalho from "../components/cabecalho";
import Titulo from "../components/titulo";
import Explicacao from "../components/explicacao";

export default function Exercicio04() {
  const [nomeLivro, setNomeLivro] = useState("");
  const [qtdPaginas, setQtdPaginas] = useState(0);
  const [tempo, setTempo] = useState(0);
  const [res, setRes] = useState("");
  function calcularTempo() {
    let calcular = (qtdPaginas * tempo) / 3600
    setRes(calcular.toFixed(2))
  }
  return (
    <div className="exercicio04">
      <Cabecalho />
      <div className="navegacao04">

        <Titulo
          titulo='Exercício 04 -  Leitura do livro'
          linha='#37B7FF'
        />


        <Explicacao
          explicacao='Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página'
        />

        <br />
        <br />
        <br />
        <div className="funcionalidade04">
          <div className="entradas">
            <div className="inputs">
              <h3>Nome do livro</h3>
              <input
                type="text"
                onChange={(e) => setNomeLivro(e.target.value)}
              />

            </div>
            <div className="inputs">
              <h3> Quantidade de páginas</h3>
              <input
                type="number"
                onChange={(e) => setQtdPaginas(e.target.value)}
              />
            </div>
            <div className="inputs">
              <h3>Tempo em segundos de leitura</h3>
              <input
                type="number"
                onChange={(e) => setTempo(e.target.value)}
              />



            </div>
          </div>

          <div className="executar04">
            <button
              onClick={calcularTempo}>
              executar
            </button>


          </div>

          <br />
          <br />
          <br />
        </div>
        <div className="resultado">
          <br />
          <h4>você lerá {nomeLivro} em: {res}</h4>
        </div>
      </div>
    </div>);
}
