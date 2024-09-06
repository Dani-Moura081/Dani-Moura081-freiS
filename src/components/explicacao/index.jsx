import "./index.scss";





export default function Explicacao(props) {


    return (
        <div className="exercicio">

            <div className="explicacao">
                <p className="explicacao">
                    {props.explicacao}
                </p>
            </div>
        </div>
    )
}