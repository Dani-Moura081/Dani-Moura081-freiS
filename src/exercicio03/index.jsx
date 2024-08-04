import './index.scss'
import { Link } from "react-router-dom";



export default function Exercicio03() {
    return (
        <div>
            <header className='cabecalho'>

                <div className='logo' >
                    <img src="/assets/images/logo.png" alt="logo do instituto social nossa senhora de Fátima" />
                    <h2>React FreiS</h2>
                </div>

                <div>
                    <ul>
                        <li>
                            <Link to="/"> inicio </Link>

                        </li >                <br />
                        <li>
                            <Link to='/sobre'>sobre </Link>
                        </li>
                    </ul>
                </div>

            </header>

            <div className="navegacao03">

                <div className="titulo03">
                    <Link to='/'>
                        <img src="/assets/images/seta.png" alt="" />
                    </Link>
                    <h2>Exercício 03 - Valor total por quantidade</h2>
                </div>

                <div className="exercicio03">
                    <div className="explicacao03">

                        <p>Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, <br /> sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente</p>

                    </div>

                    <br /><br /><br />
                    <div className="funcionalidade03">
                        <div className='entradas'>


                            <div className='inputs'>
                                <h3>Quantidade pequeno</h3>
                                <input type="number" name="" id="" />

                            </div>

                            <div className='inputs'>
                                <h3> Quantidade médio</h3>
                                <input type="number" name="" id="" />

                            </div>
                            <div className='inputs'>
                                <h3>Quantidade grande</h3>
                                <input type="number" name="" id="" />

                            </div>
                        </div>
                        <div className="executar">


                            <button >
                                executar
                            </button>

                            <br /><br /><br />

                        </div>
                    </div>
                    <div className="resultado03">
                        <br />
                        <h4>
                            Resultado: O total é R$ 0,00
                        </h4>

                    </div>

                </div>



            </div>





        </div>







    )
}