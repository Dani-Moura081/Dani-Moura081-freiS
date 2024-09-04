import "./index.scss";
import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
    <header className="comp-cabecalho">
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
  );
}
