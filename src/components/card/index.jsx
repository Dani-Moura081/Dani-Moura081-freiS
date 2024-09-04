import "./index.scss";
import { Link } from "react-router-dom";
import Cores from "../cores";

export default function Card(props) {




     
    

    return (
        <div className='containers'>
            <div className='opcao'>
                <Link className="link" to={props.link}>
                  <div className="cores" ><style></style></div>
                </Link>
                <br />
                <h5 className="aprsentacao">Cupom de desconto</h5>
                <br />
                <p className="exercicio">Exercício 01</p>

            </div>
        </div>


    )
}