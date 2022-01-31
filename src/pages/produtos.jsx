import React from 'react';
import { ContainerProdutos, ContainerCards } from './produtosStyle';
import Cards from '../components/cards/cards';


function Produtos() {
  return <ContainerProdutos>
      <h2>Frutas e Vegetais</h2>
      <h3>Encontre frutas, vegetais e váris tipos de alimentos.</h3>
      <ContainerCards>

      <Cards > </Cards>   
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      
      </ContainerCards>
  </ContainerProdutos>;
}

export default Produtos;
