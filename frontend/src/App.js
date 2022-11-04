
import React from 'react';
import './App.css';
import home from './Pages/home';
import login from './Pages/login';
import car from './Pages/car';
import register from './Pages/register';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<home/>}/>
        <Route path='/register' element = {<register/>}/>
        <Route path='/login' element = {<login/>}/>
        <Route path='/car' element = {<car/>}/>
      </Routes>
   
    </div>
  );
}

export default App;
