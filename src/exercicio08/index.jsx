import "./index.scss";
import { useState } from "react";
import Cabecalho from "../components/cabecalho";
import Titulo from "../components/titulo";
import Explicacao from "../components/explicacao";


export default function Exercicio08() {
    const [temperatura, setTemperatura] = useState(0);
    const [res, setRes] = useState(0);


    function calcularTemperatura() {
        setRes('insira os temperatura:')

        if (temperatura < 36) {
            setRes('hiportemia')
        }

        else if (temperatura >= 36 && temperatura < 37.6) {
            setRes('normal')
        }

        else if (temperatura >= 37.6 && temperatura < 39.6) {
            setRes('febre')
        }

        else if (temperatura >= 39.6 && temperatura < 41) {
            setRes('febre alta')
        }

        else if (temperatura >= 41) {
            setRes('hipertemia')
        }

    }

    return (
        <div className="exercicio08">
            <Cabecalho />

            <div className="navegacao08">

                <Titulo
                    titulo='Exercício 08 - Temperatura'
                    linha='#151515'
                />

                <Explicacao
                    explicacao='Implementar um programa em javascript que a partir da temperatura, avalie a situação da pessoa conforme a tabela. Ao final, apresente a classificação'
                />

                <br />
                <br />
                    <div className="termometro">
                        <img src="../../assets/images/termometro.svg" alt="" />

                    </div>

                <div className="funcionalidade08">



                    <h3>Temperatura </h3>
                    <input
                        type="number"
                        onChange={(e) => setTemperatura(e.target.value)}
                    />

                    <div className="executar08">
                        <button onClick={calcularTemperatura}>executar</button>

                        <br />
                        <br />
                        <br />
                    </div>
                </div>
                <div className="resultado08">
                    <br />
                    <h4>Resultado: {res} </h4>
                </div>
            </div>
        </div>
    );
}
