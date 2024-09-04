import { Link } from "react-router-dom";
import "./index.scss";
import Cores from "../cores";


export default function Titulo(props) {
    const cores = Cores()
    

    return (
        <div className="comp-titulo" >
            <div className="titulo">
                <Link to="/">
                    <img src="/assets/images/seta.png" alt="" />
                </Link>
                <h2 className="titulo">{props.titulo}</h2>
            </div>
            <div className="linha" style={{backgroundColor: props.linha }}  />

            <div className="explicacao">
                <p className="explicacao">
                    {props.explicacao}
                </p>
            </div>
        </div>

    )


}