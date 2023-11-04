import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp/SignUp';
import CreateProduct from './Components/createProduct';
import SuccessCreatedProduct from './Components/SuccessCreatedProduct';
import NavigateCategory from './Components/NavigateCategory';
import ProductDetail from './Components/ProductDetail';
import Loader from './Components/Loader';
import NoApiRespond from './Components/NoApiRespond';
function App(props) {

  return (
    <React.Fragment>
      <div className='hello'>
        <Loader/>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/createProduct' element={<CreateProduct />} />
          <Route path='/SuccessCreatedProduct/:message' element={<SuccessCreatedProduct />} />
          <Route path='/searchCategory' element={<NavigateCategory />} />
          <Route path='/productDetails/:productID' element={<ProductDetail />} />
          <Route path='/notRespond' element={<NoApiRespond />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
