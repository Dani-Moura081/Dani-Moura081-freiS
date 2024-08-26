import { useState } from 'react';
import Cabecalho from '../components/cabecalho';
import './index.scss'
import { Link } from 'react-router-dom';

export default function Exercicio06() {


    const [salarioBase, setSalarioBase] = useState(0)
    const [bonusMensal, setBonusMensal] = useState(0)
    const [desconto, setDesconto] = useState(0)
    const [resp, setResp] = useState('')


    function resultado() {

        const n1 = Number(salarioBase);
        const n2 = Number(bonusMensal);
        const n3 = Number(desconto);

        if (n1 < 0 || n2<0 || n3 < 0) {
            setResp('algum valor está inválido');
            return
        }

        let resultadoDesconto = (n1 * n2 ) / 100
        let final = (n1 + resultadoDesconto) - desconto

        setResp(final.toFixed(2));

    }



    return (
        <div>

            <Cabecalho />

            <div className="navegacao06">
                <div className="titulo06">
                    <Link to="/">
                        <img src="/assets/images/seta.png" alt="" />
                    </Link>
                    <h2>Exercício 06 - Salário líquido</h2>
                </div>
                <div className="linha" />
                <div className="exercicio06">
                    <div className="explicacao06">
                        <p>Implemente um programa em javascript para calcular o salário líquido de um funcionário, a partir de seu salário base, do bônus mensal em porcentagem e do total de descontos em reais
                        </p>
                    </div>

                    <br />
                    <br />
                    <br />
                    <div className="funcionalidade06">
                        <div className="entradas">
                            <div className="inputs">
                                <h3>Salário base</h3>
                                <input type="number" onChange={e=> setSalarioBase(e.target.value)}  />
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
                        <div className="executar">
                            <button onClick={resultado}>executar</button>

                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                    <div className="resultado06">
                        <br />
                        <h4>o salário líquido é: R${resp} </h4>

                    </div>
                </div>
            </div>
        </div>






    )


}