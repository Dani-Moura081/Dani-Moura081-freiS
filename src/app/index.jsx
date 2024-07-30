import './index.scss';
// import '../../public/assets/fonts/fonts.css'

export default function App() {
  return(
    <div>
      <header className='cabecalho'>

        <div>
          <img className='logo' src="/assets/images/logo.png" alt="logo do instituto social nossa senhora de Fátima" />
        </div>

        <div>
          <ul>
            <li>inicio</li>
            <li>sobre</li>
          </ul>
        </div>

      </header>
      <div className='menu'>
        <h1>Escolha um treino...</h1>

        <div className='containers'>  
          <div className='opcao'>
            <img src="../../assets/images/amarelo.png" alt="" />
            <br />
            <h5>Cupom de desconto</h5>
            <br />
            <p>Exercício 01</p>
          </div>

          <div className='opcao'>
            <img src="../../assets/images/verde.png" alt="" />            
            <br />
            <h5>Converter Kg/gramas</h5>
            <br />
            <p>Exercício 02</p>
          </div>

          <div className='opcao'>
            <img src="../../assets/images/azul.png" alt="" />
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