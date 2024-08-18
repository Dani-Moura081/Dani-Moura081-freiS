import './index.scss';
import { Link } from 'react-router-dom';

export default function Sobre() {
    return (
        <div className='sobre'>
            <header className='cabecalho-sobre'>

                <div className='logo' >
                    <img src="/assets/images/logo.png" alt="logo do instituto social nossa senhora de Fátima" />
                    <h2>React FreiS</h2>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to="/"> inicio </Link>
                        </li>                    <br />
                        <li>
                            <Link to='/sobre'>sobre </Link>
                        </li>
                    </ul>
                </div>

            </header>

            <div className='bem-vindo'>
                <h2 className='titulo'>Sobre</h2>

                <p className='paragrafo'>
                    Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é ajudar você a aprimorar suas habilidades em Node.js e lógica de programação de forma prática e envolvente. Acreditamos que a prática constante é essencial para o aprendizado e o aperfeiçoamento em tecnologia. Nossa missão é fornecer um ambiente onde você possa  praticar e testar seus conhecimentos em Node.js e lógica de programação, permitindo  que você avance no seu próprio ritmo e de acordo com suas necessidades.
                </p>

                <p className='paragrafo'>Seja qual for seu nível de experiência, nossa plataforma é o lugar ideal para você crescer e desenvolver suas habilidades. 
                    Estamos ansiosos para ver seu progresso e sucesso!
                </p>

                <div className='logo-sobre'>
                    <img src="/assets/images/logo.png" alt="logo do instituto social nossa senhora de Fátima" />
                </div>

            </div>
        </div>
    )

}