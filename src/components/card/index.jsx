import { Link } from "react-router-dom";
import './index.scss'


export default function Cards(props) {
    const estilo = {
      width: 90,
      height: 90, 
      backgroundColor: props.background,
      borderRadius: 15,
    }

  return (
    <div className="container">
      <Link to={props.link} style={{ textDecoration: 'none' }}>
        <div className="opcao">
          <div style={estilo}></div>
          <h4>{props.titulo}</h4>
          <span>{props.subtitulo}</span>
        </div>
      </Link>
    </div>
  );
}