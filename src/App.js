import React from 'react';
 
import Navbar from './layout/navbar';
import Produtos from './pages/produtos';
import Contato from './pages/contato';
import { Routes, Route } from "react-router-dom";
 
function App() {
  return (
    <div >    
    <Navbar/>
  <Routes>
  <Route path="/produtos" element={<Produtos />}/>
  <Route path="/" element={<Contato/>}/>
   </Routes>
 
  
    </div>
  );
}

export default App;
