import { Link } from "react-router-dom";
import { useState } from 'react'
import "./index.scss";
import Cabecalho from "../components/cabecalho";
import Titulo from "../components/titulo";
import Explicacao from "../components/explicacao";



export default function Exercicio09() {

    const [qtdGramas, setQtdGramas] = useState(0)
    const [resp, setResp] = useState('')

    function calcularGramas() {
        const precoGrama = 0.035
        const gramaDesconto = 0.030

        if (qtdGramas <= 0) {
            setResp('peso inválido')
        }
        else if (qtdGramas < 1000) {
            let total = qtdGramas * precoGrama
            setResp(`O valor é R$${total.toFixed(2)}`)
        }
        else if (qtdGramas >= 1000) {
            let total = qtdGramas * gramaDesconto
            setResp(`O valor é  R$${total.toFixed(2)}`)
        }


    }

    return (
        <div className="exercicio09">
            <Cabecalho />

            <div className="navegacao09">

                <Titulo
                    titulo='Exercício 09 - Temperatura'
                    linha='#151515'
                />

                <Explicacao
                    explicacao='Implementar um programa em javascript que calcule o total a se pagar em uma compra na sorveteria, a partir do total de gramas comprado. O preço de 100g é R$ 3,50 mas se o total de gramas for a partir de 1kg, o preço das 100g diminui 50 centavos.'                />

                <br />
                <br />
             

                <div className="funcionalidade09">



                    <h3>Total de gramas </h3>
                    <input
                        type="number"
                        onChange={(e) => setQtdGramas(e.target.value)}
                    />

                    <div className="executar09">
                        <button onClick={calcularGramas}>executar</button>

                        <br />
                        <br />
                        <br />
                    </div>
                </div>
                <div className="resultado09">
                    <br />
                    <h4>Resultado: {resp} </h4>
                </div>
            </div>
        </div>
    );
}
