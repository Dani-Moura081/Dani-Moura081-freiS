import './index.scss'
import { Link } from "react-router-dom";


export default function Exercicio02() {
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

            <div className="navegacao02">

                <div className="titulo02">
                    <Link to='/'>
                        <img src="/assets/images/seta.png" alt="" />
                    </Link>
                    <h2>Exercício 02 - Converter Kg/gramas</h2>
                </div>

                <div className="exercicio02">
                    <div className="explicacao02">

                        <p>Implementar um programa em Javascript para converter kilos em gramas.</p>

                    </div>

                    <br /><br /><br />
                    <div className="funcionalidade02">
                        <h3>Valor em gramas</h3>
                        <input type="number" name="" id="" />

                        <div className="executar">
                      

                            <button >
                                executar
                            </button>

                            <br /><br /><br />

                        </div>
                    </div>
                    <div className="resultado02">
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