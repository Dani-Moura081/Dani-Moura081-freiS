import { useState } from 'react';
import Cabecalho from '../components/cabecalho';
import './index.scss'
import Titulo from "../components/titulo";
import Explicacao from "../components/explicacao";



export default function Exercicio06() {


    const [salarioBase, setSalarioBase] = useState(0)
    const [bonusMensal, setBonusMensal] = useState(0)
    const [desconto, setDesconto] = useState(0)
    const [resp, setResp] = useState('')


    function resultado() {

        const n1 = Number(salarioBase);
        const n2 = Number(bonusMensal);
        const n3 = Number(desconto);

        if (n1 < 0 || n2 < 0 || n3 < 0) {
            setResp('algum valor está inválido');
            return
        }

        let resultadoDesconto = (n1 * n2) / 100
        let final = (n1 + resultadoDesconto) - desconto

        setResp(final.toFixed(2));

    }



    return (
        <div className="exercicio06">
            <Cabecalho />
            <div className="navegacao06">

                <Titulo
                    titulo='Exercício 06 - Salário líquido'
                    linha='#FF5B37'
                />


                <Explicacao
                    explicacao='Implemente um programa em javascript para calcular o salário líquido de um funcionário, a partir de seu salário base, do bônus mensal em porcentagem e do total de descontos em reais'
                />

                <br />
                <br />
                <br />
                <div className="funcionalidade06">
                    <div className="entradas">
                        <div className="inputs">
                            <h3>Salário base</h3>
                            <input type="number" onChange={e => setSalarioBase(e.target.value)} />



                        </div>
                        <div className="inputs">
                            <h3> Bônus mensal em porcentagem</h3>
                            <input type="number"  onChange={ e=> setBonusMensal(e.target.value)} />


                        </div>
                        <div className="inputs">
                            <h3>Total de descontos</h3>
                            <input type="number" onChange={e=> setDesconto(e.target.value)} />



                        </div>
                    </div>

                    <div className="executar06">
                        <button
                            onClick={resultado}>
                            executar
                        </button>


                    </div>

                    <br />
                    <br />
                    <br />
                </div>
                <div className="resultado">
                    <br />
                    <h4>o salário líquido é: R${resp} </h4>
                </div>
            </div>
        </div>





    )


}




