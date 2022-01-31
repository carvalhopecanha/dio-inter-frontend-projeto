import styled from 'styled-components';

const Navstyle = styled.div`
  overflow: hidden;
  background-color: #333;
  list-style: none;
  display: flex;
  justify-content:  center; 
  font-family: Helvetica;
 
  padding: 0px 50px 0px 50px ;
  ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

a:active,a:focus {
  background-color: #ff8700;
  transition: 0.01s;
}

li a:hover {
  background-color: #ff8700;
}
  } `


export default Navstyle;