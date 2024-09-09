import { Link } from "react-router-dom";
import { useState } from 'react'
import "./index.scss";
import Cabecalho from "../components/cabecalho";
import Titulo from "../components/titulo";
import Explicacao from '../components/explicacao';


export default function Exercicio07() {


    const [cor1, setCor1] = useState('')
    const [cor2, setCor2] = useState('')
    const [resp, setResp] = useState('')


    function resultado() {

        if (cor1 == 'azul' && cor1 == 'amarelo' && cor1 == 'vermelho' && cor2 == 'azul' && cor2 == 'amarelo' && cor2 == 'vermelho') {
            setResp("As cores são primárias")
            return
        } else {
            setResp('as cores não são primárias ou os valores são inválidos')
            return
        }
    }

    return (
        <div className='exercicio'>

            <Cabecalho />

            <div className="navegacao">
                <Titulo
                    titulo='Exercício 07 - Cores primárias'
                    linha='#37FFAB'
                />
                <Explicacao
                    explicacao='Implementar um programa em javascript para verificar se duas cores são primárias'
                />

                <br />
                <br />
                <div className="funcionalidade">
                    <h3>cor 1</h3>
                    <input type="text" onChange={(e) => setCor1(e.target.value)} />

                    <h3>cor 2</h3>
                    <input type="text" onChange={(e) => setCor2(e.target.value)} />

                    <div className="executar">
                        <button onClick={resultado}>executar</button>

                        <br />
                        <br />
                        <br />
                    </div>
                </div>
                <br />
                <div className='resultado'>
                    <h4 > {resp}</h4>


                </div>
            </div>
        </div>


    );


}