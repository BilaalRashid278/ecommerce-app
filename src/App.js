import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom'; 
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp/SignUp';
import CreateProduct from './Components/createProduct';
import SuccessCreatedProduct from './Components/SuccessCreatedProduct';

function App(props) {
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/createProduct' element={<CreateProduct/>}/>
          <Route path='/SuccessCreatedProduct/:message' element={<SuccessCreatedProduct/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
