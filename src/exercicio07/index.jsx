import { Link } from "react-router-dom";
import { useState } from 'react'
import "./index.scss";
import Cabecalho from "../components/cabecalho";

export default function Exercicio07() {


    const [cor1, setCor1] = useState('')
    const [cor2, setCor2] = useState('')
    const [resp, setResp] = useState('')


    function resultado() {

        if (cor1 == 'azul' || cor1 == 'amarelo' || cor1 == 'vermelho' || cor2 == 'azul' || cor2 == 'amarelo' || cor2 == 'vermelho') {
            setResp("As cores são primárias")
            return
        } else {
            setResp('as cores não são primárias ou os valores são inválidos')
            return
        }
    }

    return (
        <div>

            <Cabecalho />

            <div className="navegacao07">
                <div className="titulo07">
                    <Link to="/">
                        <img src="/assets/images/seta.png" alt="" />
                    </Link>
                    <h2>Exercício 07 - Cores primárias</h2>
                </div>
                <div className="linha" />

                <div className="exercicio07">
                    <div className="explicacao07">
                        <p>
                            Implementar um programa em javascript para verificar se duas cores são primárias
                        </p>
                    </div>

                    <br />
                    <br />
                    <br />
                    <div className="funcionalidade07">
                        <h3>Cor 1</h3>
                        <input type="text" onChange={e => setCor1(e.target.value)} />

                        <h3>Cor 2</h3>
                        <input type="text" onChange={e => setCor2(e.target.value)} />

                        <div className="executar">
                            <button onClick={resultado}>executar</button>

                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                    <div className="resultado07">
                        <br />
                        <h4> {resp} </h4>
                    </div>
                </div>
            </div>
        </div>
    );


}