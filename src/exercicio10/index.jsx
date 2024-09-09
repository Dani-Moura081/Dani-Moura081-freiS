import './index.scss';
import { useState } from "react";
import Titulo from "../components/titulo";
import Explicacao from "../components/explicacao";
import Cabecalho from "../components/cabecalho";



export default function Exercicio10() {
    const [resultados, setResultados] = useState([]);

    const [altura, setAltura] = useState(0);   
    const [peso, setPeso] = useState(0);   
    const [msg, setMsg] = useState("");

    function calcularIMC() {
        let resultado = [];

        const calculo = altura * altura
        const imc =  peso / calculo;   


        for(let i = false; i != true; i++) {

            if(imc <18.5){
                setMsg(`altura: ${altura} | peso:${peso} | abaixo do peso`)
              } 
              else if(imc >=18.5 && imc <24.9){
                setMsg(`altura: ${altura} | peso:${peso}| peso normal`)
              }
              else if(imc >=25 && imc <=29.9){
                setMsg(`altura: ${altura} | peso:${peso}| sobrepeso`)
              }
              else if(imc >=30 && imc <= 34.9 ){
                setMsg(`altura: ${altura} | peso:${peso}| obesidade grau 1`)
              }
              else if(imc >=35 && imc <=39.9){
                setMsg(`altura: ${altura} | peso:${peso}| Obesidade grau 2`)
              }
              else if(imc >=40){
                setMsg(`altura: ${altura} | peso:${peso}| Obesidade grau 3`)
              }

              resultado.push(msg)
        }
        setResultados(resultado)
    }





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
                            <input type="number" onChange={e=> setAltura(e.target.value)} />

                            
                        </div>

                      
                        <div className='inputs'>
                            <h3>peso</h3>
                            <input type="number" onChange={e=> setPeso(e.target.value)} />  

                            

                        </div>
                        
                        <div className='executar10'>
                            
                            <button onClick={ calcularIMC }>
                                executar
                            </button>
                            
                        </div>

                    </div>



                    <div className='saida'>
                        <h2>resultado do IMC</h2>
                        {resultados.map((texto) => (
                            <h4>{texto}</h4>
                        ))}

                    </div>
                </div>










            </div>


        </div>
    )




}