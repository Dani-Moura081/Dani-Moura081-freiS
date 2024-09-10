import { Link } from "react-router-dom";
import './index.scss'
import Cabecalho from "../components/cabecalho";
import { useState } from "react";
import Titulo from "../components/titulo";
import Explicacao from "../components/explicacao";


export default function Exercicio05() {
    const [media1, setMedia1] = useState(0)
    const [media2, setMedia2] = useState(0)
    const [media3, setMedia3] = useState(0)
    const [resp, setResp] = useState('')
    const [txt, setTxt] = useState('')
    function resultado() {

        const n1 = Number(media1);
        const n2 = Number(media2);
        const n3 = Number(media3);

        if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10) {
            setResp('Média inválida, algum valor está errado');
            return;
        }

        let mediaFinal = (n1 + n2 + n3) / 3;
        if (mediaFinal >= 5) {
            setTxt('aprovado')
        }
        else if (mediaFinal < 5) {
            setTxt('reprovado')
        } else {
            setTxt('ERRO')
        }
        setResp(mediaFinal.toFixed(1));


    }



    return (
        <div className="exercicio05">
            <Cabecalho />
            <div className="navegacao05">

                <Titulo
                    titulo='Exercício 05 -  Média de notas'
                    linha='#CB37FF'
                />


                <Explicacao
                    explicacao='Implemente um programa em Javascript para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6.'
                />

                <br />
                <br />
                <br />
                <div className="funcionalidade05">
                    <div className="entradas">
                        <div className="inputs">
                            <h3>nota 1</h3>
                            <input
                                type="number" onChange={e => setMedia1(e.target.value)} />



                        </div>
                        <div className="inputs">
                            <h3> nota 2</h3>
                            <input type="number" onChange={e => setMedia2(e.target.value)} />



                        </div>
                        <div className="inputs">
                            <h3>nota 3</h3>
                            <input type="number" onChange={e => setMedia3(e.target.value)} />




                        </div>
                    </div>

                    <div className="executar05">
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
                    <h4>a media final é: {resp} {txt}</h4>
                </div>
            </div>
        </div>
    )
}






// <div className="funcionalidade05">
// <div className="entradas">
//     <div className="inputs">
//         <h3>média 1</h3>
//         <input type="number" onChange={e => setMedia1(e.target.value)} />
//     </div>

//     <div className="inputs">
//         <h3> média 2</h3>
//         <input type="number" onChange={e => setMedia2(e.target.value)} />
//     </div>
//     <div className="inputs">
//         <h3>média 3</h3>
//         <input type="number" onChange={e => setMedia3(e.target.value)} />
//     </div>
// </div>
// <div className="executar">
//     <button onClick={resultado}>executar</button>

//     <br />
//     <br />
//     <br />
// </div>
// </div>
// <div className="resultado05">
// <br />
// <h4>a media final é: {resp} {txt}</h4>

// </div>
