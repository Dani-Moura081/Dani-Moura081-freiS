import App from "./app/index";
import Exercicio01 from "./exercicio01";
import Exercicio02 from "./exercicio02";
import Exercicio03 from "./exercicio03";
import Exercicio04 from "./exercicio04"
import Exercicio05 from "./exercicio05"
import Exercicio06 from "./exercicio06";
import Exercicio07 from "./exercicio07";
import Exercicio11 from "./exercicio11"
import Sobre from "./sobre/index";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/exercicio01' element={<Exercicio01 />}/>
                <Route path='/exercicio02' element={<Exercicio02 />}></Route>
                <Route path='/exercicio03' element={<Exercicio03 />}></Route>
                <Route path='/exercicio04' element={<Exercicio04 />}></Route>
                <Route path='/exercicio05' element={<Exercicio05 />}></Route>
                <Route path='/exercicio06' element={<Exercicio06 />}></Route>
                <Route path='/exercicio07' element={<Exercicio07 />}></Route>

                <Route path='/exercicio11' element={<Exercicio11 />}></Route>





                <Route />
            </Routes>
        </BrowserRouter>
    )
}


