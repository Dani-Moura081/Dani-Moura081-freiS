import "./index.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

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
      <header className="cabecalho">
        <div className="logo">
          <img
            src="/assets/images/logo.png"
            alt="logo do instituto social nossa senhora de Fátima"
          />
          <h2>React FreiS</h2>
        </div>

        <div>
          <ul>
            <li>
              <Link to="/"> inicio </Link>
            </li>{" "}
            <br />
            <li>
              <Link to="/sobre">sobre </Link>
            </li>
          </ul>
        </div>
      </header>

      <div className="navegacao03">
        <div className="titulo03">
          <Link to="/">
            <img src="/assets/images/seta.png" alt="" />
          </Link>
          <h2>Exercício 04 - Livros</h2>
        </div>
        <div className="linha" />
        <div className="exercicio03">
          <div className="explicacao03">
            <p>
              Implemente um programa em React que calcule o tempo em que um
              livro será lido por uma pessoa, a partir do nome do livro, do
              total de paginas e da quantidade de segundo de leitura por pagina
            </p>
          </div>

          <br />
          <br />
          <br />
          <div className="funcionalidade03">
            <div className="entradas">
              <div className="inputs">
                <h3>Nome do livro</h3>
                <input type="text"  onChange={e => setNomeLivro(e.target.value)}/>
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
          <div className="resultado03">
            <br />
            <h4>Resultado: O tempo de leitura é  {res}H</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
