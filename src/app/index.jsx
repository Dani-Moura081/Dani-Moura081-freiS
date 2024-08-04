import './index.scss';
// import '../../public/assets/fonts/fonts.css'
import { Link } from "react-router-dom";

export default function App() {
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
      <div className='menu'>
        <h1>Escolha um treino...</h1>

        <div className='containers'>
          <div className='opcao'>
            <Link to='/exercicio01'>
              <img src="../../assets/images/amarelo.png" alt="" />
            </Link>
            <br />
            <h5>Cupom de desconto</h5>
            <br />
            <p>Exercício 01</p>

          </div>

          <div className='opcao'>
            <Link to='/exercicio02'>
              <img src="../../assets/images/verde.png" alt="" />
            </Link>
            <br />
            <h5>Converter Kg/gramas</h5>
            <br />
            <p>Exercício 02</p>

          </div>

          <div className='opcao'>
            <Link to='/exercicio03'>
              <img src="../../assets/images/azul.png" alt="" />
            </Link>
            <br />
            <h5>Valor total por quantidade</h5>
            <br />
            <p>Exercício 03</p>
          </div>

        </div>

      </div>

    </div>
  )

}