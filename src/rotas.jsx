import App from "./app/index";
import Exercicio01 from "./exercicio01";
import Exercicio02 from "./exercicio02";
import Exercicio03 from "./exercicio03";
import Sobre from "./sobre/index";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/exercicio01' element={<Exercicio01 />} />
                <Route path='/exercicio02' element={<Exercicio02 />}></Route>
                <Route path='/exercicio03' element={<Exercicio03 />}></Route>

                <Route />
            </Routes>
        </BrowserRouter>
    )
}


