import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";

//pages
import Login from './pages/Login';
import Home from './pages/Home';
import CreateLogin from './pages/CreateLogin';
import EditarProdutos from './pages/EditarProdutos'
import CriarProdutos from './pages/CriarProdutos'
import DeletarProdutos from './pages/DeletarProdutos';
import EstoqueCamisa from './pages/EstoqueCamisa';
import EstoqueCalca from './pages/EstoqueCalca';
import EstoqueSapatos from './pages/EstoqueSapatos';
import FormDE from './components/Formulario/FormDE';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Login/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/CreateLogin' element={<CreateLogin/>}/>
            <Route path='/EditarProdutos' element={<EditarProdutos/>}/>
            <Route path='/CriarProdutos' element={<CriarProdutos/>}/>
            <Route path='/DeletarProdutos' element={<DeletarProdutos/>}/>
            <Route path='/EstoqueCamisa' element={<EstoqueCamisa/>}/>
            <Route path='/EstoqueCalca' element={<EstoqueCalca/>}/>
            <Route path='/EstoqueSapatos' element={<EstoqueSapatos/>}/>
            <Route path='/FormDE' element={<FormDE/>}/>

          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;