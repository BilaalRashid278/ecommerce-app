import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'; 
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import CreateProduct from './Components/createProduct';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/createProduct' element={<CreateProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
