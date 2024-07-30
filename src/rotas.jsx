import App from "./app/index";
import Sobre from "./sobre/index";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={App} />
                <Route path='/sobre' element={Sobre} />

                <Route />
            </Routes>
        </BrowserRouter>
    )
}


