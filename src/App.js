import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { Routes, Route } from 'react-router-dom';
import CardDetails from './component/CardDetails';
import Cards from './component/Cards';
import Login from './component/Login';
import Signup from './component/Signup';
import Fotter from './component/Footer';


function App() {
  return (
    <>
     
       <Header/>
        <Routes>
          <Route path='/' element={<Cards/>}/>
          <Route path='/cart/:id' element={<CardDetails/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
       
    <Fotter/>
   
      
    </>
  );
}

export default App;
