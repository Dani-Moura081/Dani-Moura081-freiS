import './index.scss';
import Cabecalho from '../components/cabecalho';
import Cards from '../components/card';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className='inicio'>
      <Cabecalho />

      <div className='titulo-inicio'>
        <h1>Escolha um treino...</h1>

      </div>

      <div className='menu'>

        <div className='cards'>
          <Cards
            link="/exercicio01"
            titulo="Cupom de desconto"
            subtitulo="Exercicio 01"
            background="#ffce37"
          />

        </div>
        <div className='cards'>
          <Cards
            link="/exercicio02"
            titulo="Converter Kg/gramas"
            subtitulo="Exercicio 02"
            background="#B3FF37"
          />

        </div>
        <div className='cards'>
          <Cards
            link="/exercicio03"
            titulo="Valor total por quantidade"
            subtitulo="Exercicio 03"
            background="#37FFF3"
          />

        </div>
        <div className='cards'>
          <Cards
            link="/exercicio04"
            titulo="Leitura de livro"
            subtitulo="Exercicio 04"
            background="#37B7FF"
          />

        </div>
        <div className='cards'>
          <Cards
            link="/exercicio05"
            titulo="Média de notas"
            subtitulo="Exercicio 05"
            background="#CB37FF"
          />

        </div>
        <div className='cards'>
          <Cards
            link="/exercicio06"
            titulo="Salário líquido"
            subtitulo="Exercicio 06"
            background="#FF5B37"
          />

        </div>
        <div className='cards'>
          <Cards
            link="/exercicio07"
            titulo="Cores primárias"
            subtitulo="Exercicio 7"
            background="#37FFAB"
          />

        </div>
        <div className='cards'>
          <Cards
            link="/exercicio08"
            titulo="Temperatura"
            subtitulo="Exercicio 08"
            background="#151515"
          />

        </div>
        <div className='cards'>
          <Cards
            link="/exercicio09"
            titulo="Sorveteria"
            subtitulo="Exercicio 09"
            background="#D0D0D0"
          />

        </div>

        <div className='cards'>
          <Cards
            link="/exercicio10"
            titulo="Calculo de IMC com histórico"
            subtitulo="Exercicio 10"
            background="#B75333"
          />


        </div>

      </div>

    </div>
  )

}