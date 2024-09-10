import './index.scss';
import { useState } from "react";
import Titulo from "../components/titulo";
import Explicacao from "../components/explicacao";
import Cabecalho from "../components/cabecalho";



export default function Exercicio10() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [resultadoImc, setResultadoImc] = useState([
        {
            peso: 0,
            altura: 0,
            resultado: "",
        },
    ]);

    function calcularImc() {
        let calculo = Number(peso) / (Number(altura) * Number(altura));
        if (calculo < 16.9) {
            setResultadoImc([
                ...resultadoImc,
                { peso, altura, resultado: "Muito abaixo do peso" },
            ]);
            setAltura('');
            setPeso('');
        } else if (calculo >= 17 && calculo < 18.4) {
            setResultadoImc([
                ...resultadoImc,
                { peso, altura, resultado: "Abaixo do peso" },
            ]);
            setAltura('');
            setPeso('');
        } else if (calculo >= 18.5 && calculo < 24.9) {
            setResultadoImc([
                ...resultadoImc,
                { peso, altura, resultado: "Peso normal" },
            ]);
            setAltura('');
            setPeso('');
        } else if (calculo >= 25 && calculo < 29.9) {
            setResultadoImc([
                ...resultadoImc,
                { peso, altura, resultado: "Acima do peso" },
            ]);
            setAltura('');
            setPeso('');
        } else if (calculo >= 30 && calculo < 34.9) {
            setResultadoImc([
                ...resultadoImc,
                { peso, altura, resultado: "Obesidade Grau I" },
            ]);
            setAltura('');
            setPeso('');
        } else if (calculo >= 35 && calculo <= 40) {
            setResultadoImc([
                ...resultadoImc,
                { peso, altura, resultado: "Obesidade Grau II" },
            ]);
            setAltura('');
            setPeso('');
        } else if (calculo > 40) {
            setResultadoImc([
                ...resultadoImc,
                { peso, altura, resultado: "Obesidade Grau III" },
            ]);
            setAltura('');
            setPeso('');
        }
    }
    function removerImc(pos) {
        resultadoImc.splice(pos, 1);
        setResultadoImc([...resultadoImc]);




        return (

            <div className='exercicio10'>
                <Cabecalho />
                <div className='navegacao10'>
                    <Titulo
                        titulo='Exercício 10 - Calculo de IMC com histórico'
                        linha='#B75333'
                    />

                    <Explicacao
                        explicacao='Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação'
                    />
                    <br />
                    <br />
                    <br />


                    <div className='funcionalidade10'>
                        <div className='entrada'>
                            <div className='inputs'>
                                <h3>Altura</h3>
                                <input type="number" value={altura}
                                    id="altura"
                                    placeholder="1.73"
                                    onChange={(e) => setAltura(e.target.value)} />


                            </div>


                            <div className='inputs'>
                                <h3>peso</h3>
                                <input type="number" value={peso}
                                    id="peso"
                                    placeholder="55"
                                    onChange={(e) => setPeso(e.target.value)} />



                            </div>

                            <div className='executar10'>

                                <button onClick={calcularImc}>
                                    executar
                                </button>

                            </div>

                        </div>



                        <div className="results">
                            {resultadoImc.map((item, pos) => (
                                <div key={pos} className="resultado-item">
                                    <p>
                                        Altura: {item.altura} | Peso: {item.peso} | Situação:{" "}
                                        {item.resultado}{" "}
                                    </p>
                                    <span onClick={() => removerImc(pos)}>✖</span>
                                </div>
                            ))}
                        </div>




                    </div>
                </div>





            </div>


        )




    }
}





