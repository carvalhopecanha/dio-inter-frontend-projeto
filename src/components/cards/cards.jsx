import React from 'react';
import { CardStyle, ButtonAdd, ImgStyle } from './cardsStyle'
import ImgMaca from '../../images/maca.jpg'



function Cards() {
  return <div>
   <CardStyle>   
   <ImgStyle src={ImgMaca}></ImgStyle>
    <h4><b>Produto</b></h4> 
    <p>R$ 50,00</p>

    <ButtonAdd type='button'> Adicionar ao carrinho </ButtonAdd>

 
   </CardStyle>

  </div>;
}

export default Cards;


