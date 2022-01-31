import styled from 'styled-components';

export  const CardStyle = styled.div`
  background: white;
  box-shadow: 0 0 20px  rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 95%;
  max-width: 600px;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 10px;
  border-radius: 6px;
 
};
`
 
export  const ButtonAdd = styled.button`

  background-color: #6b83ca;  
  color: white;
  padding: 8px 0px 8px 0px;
  border: none;
  border-radius: 6px;
  box-shadow: 0 0 20px  rgba(0,0,0,0.15);
  margin: 10px 50px 10px 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  
  @media (min-width: 450px) {
    margin: 10px;
}

  
  &:hover{
   background-color: #2b438a;
   transform: scale(0.98);
  }


`


export const ImgStyle = styled.img`
margin: auto;
width: 30%;
`