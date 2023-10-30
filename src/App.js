import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom'; 
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp/SignUp';
import CreateProduct from './Components/createProduct';
import SuccessCreatedProduct from './Components/SuccessCreatedProduct';
import { Context } from './context/context';
import { FetchDataFromApi } from './utils/api';

function App(props) {
  const [apiData,setApiData] = useState([]);
  useEffect(() => {
    FetchDataFromApi().then((data) => {
      setApiData(data.products);
    }).catch(e => console.log(e));
  });
  return (
    <Context.Provider value={{apiData,setApiData}}>
      {props.children}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/createProduct' element={<CreateProduct/>}/>
          <Route path='/SuccessCreatedProduct/:message' element={<SuccessCreatedProduct/>}/>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
