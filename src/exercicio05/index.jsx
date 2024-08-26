import { Link } from "react-router-dom";
import './index.scss'
import Cabecalho from "../components/cabecalho";
import { useState } from "react";

export default function Exercicio05() {
    const [media1, setMedia1] = useState(0)
    const [media2, setMedia2] = useState(0)
    const [media3, setMedia3] = useState(0)
    const [resp, setResp] = useState('')
    const [txt, setTxt] = useState('')
    function resultado() {

        const m1 = Number(media1);
        const m2 = Number(media2);
        const m3 = Number(media3);

        if (m1 < 0 || m1 > 10 || m2 < 0 || m2 > 10 || m3 < 0 || m3 > 10) {
            setResp('Média inválida, algum valor está errado');
            return;
        }

        let mediaFinal = (m1 + m2 + m3) / 3;
        if (mediaFinal>=5) {
            setTxt('aprovado')
        }
        else if (mediaFinal<5) {
            setTxt('reprovado')
        }
        setResp(mediaFinal.toFixed(1));


    }



    return (
        <div>

            <Cabecalho />

            <div className="navegacao05">
                <div className="titulo05">
                    <Link to="/">
                        <img src="/assets/images/seta.png" alt="" />
                    </Link>
                    <h2>Exercício 05 - Livros</h2>
                </div>
                <div className="linha" />
                <div className="exercicio05">
                    <div className="explicacao05">
                        <p>
                            Implemente um programa em Javascript para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6.
                        </p>
                    </div>

                    <br />
                    <br />
                    <br />
                    <div className="funcionalidade05">
                        <div className="entradas">
                            <div className="inputs">
                                <h3>média 1</h3>
                                <input type="number" onChange={e => setMedia1(e.target.value)} />
                            </div>

                            <div className="inputs">
                                <h3> média 2</h3>
                                <input type="number" onChange={e => setMedia2(e.target.value)} />
                            </div>
                            <div className="inputs">
                                <h3>média 3</h3>
                                <input type="number" onChange={e => setMedia3(e.target.value)} />
                            </div>
                        </div>
                        <div className="executar">
                            <button onClick={resultado}>executar</button>

                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                    <div className="resultado05">
                        <br />
                        <h4>a media final é: {resp}</h4>
                        <h4>{txt}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}