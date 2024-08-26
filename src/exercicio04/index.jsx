import "./index.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cabecalho from "../components/cabecalho";

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
    <div>
      <Cabecalho />


      <div className="navegacao04">
        <div className="titulo04">
          <Link to="/">
            <img src="/assets/images/seta.png" alt="" />
          </Link>
          <h2>Exercício 04 - Livros</h2>
        </div>
        <div className="linha" />
        <div className="exercicio04">
          <div className="explicacao04">
            <p>
              Implemente um programa em React que calcule o tempo em que um
              livro será lido por uma pessoa, a partir do nome do livro, do
              total de paginas e da quantidade de segundo de leitura por pagina
            </p>
          </div>

          <br />
          <br />
          <br />
          <div className="funcionalidade04">
            <div className="entradas">
              <div className="inputs">
                <h3>Nome do livro</h3>
                <input type="text" onChange={e => setNomeLivro(e.target.value)} />
              </div>

              <div className="inputs">
                <h3> Quantidade de paginas</h3>
                <input type="number" onChange={e => setQtdPaginas(e.target.value)} />
              </div>
              <div className="inputs">
                <h3>Tempo de leitura em seg</h3>
                <input type="number" onChange={e => setTempo(e.target.value)} />
              </div>
            </div>
            <div className="executar">
              <button onClick={calcularTempo}>executar</button>

              <br />
              <br />
              <br />
            </div>
          </div>
          <div className="resultado04">
            <br />
            <h4>Resultado: O tempo de leitura é  {res}H</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
