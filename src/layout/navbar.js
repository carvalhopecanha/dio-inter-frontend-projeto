import React from 'react';
import Navstyle from './navbarStyle';
import { FiShoppingCart } from 'react-icons/fi'; //Importando Icone React icons 
import { Link } from 'react-router-dom';

function Navbar() {    

  return (
 
  <div  >
  <Navstyle>
  
 <ul>
  
  <li> <Link to="/">Contato</Link></li>
  <li> <Link to="/produtos">Produtos</Link></li>
  </ul> 
  
  </Navstyle>
    </div>
  );
}

export default Navbar;


 