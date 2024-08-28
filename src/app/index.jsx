import './index.scss';
// import '../../public/assets/fonts/fonts.css'
import { Link } from "react-router-dom";
import Cabecalho from '../components/cabecalho';


export default function App() {
  return (
    <div>
      <Cabecalho />


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


          <div className='opcao'>
            <Link to='/exercicio04'>
              <img src="../../assets/images/Rectangle4.svg" alt="" />
            </Link>
            <br />
            <h5>Leitura de livro</h5>
            <br />
            <p>Exercício 04</p>
          </div>


          <div className='opcao'>
            <Link to='/exercicio05'>
              <img src="../../assets/images/rosa.svg" alt="" />
            </Link>
            <br />
            <h5>Média de notas</h5>
            <br />
            <p>Exercício 05</p>
          </div>

          <div className='opcao'>
            <Link to='/exercicio06'>
              <img src="../../assets/images/crimsom.svg" alt="" />
            </Link>
            <br />
            <h5>Salário líquido</h5>
            <br />
            <p>Exercício 06</p>
          </div>

          <div className='opcao'>
            <Link to='/exercicio07'>
              <img src="../../assets/images/ciano.png" alt="" />
            </Link>
            <br />
            <h5>Cores primárias</h5>
            <br />
            <p>Exercício 07</p>
          </div>










          <div className='opcao'>
            <Link to='/exercicio11'>
              <img src="../../assets/images/roxo.svg" alt="" />
            </Link>
            <br />
            <h5>Tabuada</h5>
            <br />
            <p>Exercício 11</p>
          </div>

        </div>

      </div>

    </div>
  )

}