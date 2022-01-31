import styled from 'styled-components';


export  const ContainerContato = styled.section`
  text-align: center;
  font-family: 'Helvetica';
  background: #15171a;
  padding: 20px;
  display: block;
  color: white;
 

  input {
  width: 60% !important; 
  padding: 5px
}
  
  textarea {
  width: 80% !important; 
  margin: 10px;
}
 
 label{
   padding: 10px;
  font-family: 'Helvetica';
  font-weight: 600;
 
 }



@media (min-width: 1200px) {
  textarea {
    
  margin:auto;
  width: 60% !important; 
}
 
 }
`

export const ContainerMsg = styled.div`
   text-align: center;
   display: grid;
   grid-gap: 1rem;
   padding: 60px;
   background: #191b1f;

   h4{
     color: #ff8700;
     font-weight: 600;
   }
   p{
    top: 5px;
     position: relative;
     color: #22242b;
     font-weight: 400;
   }
   small{
     color: #8c91a9;
     top: 15px;
     position: relative;
     font-weight: 600;
   }
 
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

export const ButtonEnviar = styled.button`
  background-color: #15171a; 
 
  border: 2px solid #ff8700;
  color: #ff8700;
 
  margin: 10px;
  padding: 10px 60px;
  text-align: center;
  text-decoration: none;

  display: inline-block;
  font-size: 1.3em;
  font-weight: 600;
  border-radius: 6px;
  cursor:pointer;

  &:hover{
   background-color:#ff8700;
   transform: scale(1);
   color: white;
  }

 `



 export const Titulomsg = styled.h2`
   text-align: center;
  font-family: 'Helvetica';
  background: #191b1f;
  padding-top: 20px;
  color: #d9dce8;
 
 
  font-weight: 800;
 `

 export const TItulo = styled.label`
 color:red;
 `