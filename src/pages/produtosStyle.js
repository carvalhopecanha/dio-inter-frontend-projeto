import styled from 'styled-components';

export const ContainerProdutos = styled.div`
  overflow: hidden;
  width: 100%;
  background-color:#f6f7f9; 
  padding: 60px 100px 60px 100px;
  font-family: Helvetica;
   h2{
       font-size: 3em;
       font-weight: 600;
       color: #374673;
 
   }
   h3{
       font-size: 1.2em;
       font-weight: 400; 
       color: #595959;
   
   }
};
`
 
export const ContainerCards = styled.div`
  padding-top: 40px;
   
  display: grid;
  grid-gap: 1rem;
  margin: auto;

  @media (min-width: 600px) {
  grid-template-columns: repeat(1, 1fr); 
}

  @media (min-width: 700px) {
  grid-template-columns: repeat(2, 1fr); 
}

@media (min-width: 950px) {
  grid-template-columns: repeat(3, 1fr); 
 
}
  @media (min-width: 1200px) {
  grid-template-columns: repeat(4, 1fr);
}

`
 