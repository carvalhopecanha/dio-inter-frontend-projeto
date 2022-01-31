import {useEffect, useState }from 'react';
import { ContainerContato, ContainerMsg, ButtonEnviar, Titulomsg, Titulo} from './contatoStyle'
import  MsgCard from '../components/msg/msg';
import styled from 'styled-components';

function Contato() {
  const url = 'http://localhost:5000/message';
   const [message, setMessage] = useState([]);
   const [author, setAuthor] = useState('');
   const [content, setContent] = useState('');
   const [validator, setValidator] = useState(false); //aletar errp
   const [success, setSuccess] = useState(false); //aletar sucesso
   const [render, setRender] = useState(false);

   useEffect (async () => {
     const response = await fetch('http://localhost:5000/message')
     const data = await response.json();
     setMessage(data);
     
   }, [render])
  
    const sendMessage = () =>{
      setValidator(false);
      if (author.length <= 0 || content.length <= 0){
        return setValidator(!validator)
      }
      const bodyForm = {
        email: author,
        message: content,
      }


      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyForm)
      })

      .then((response) => response.json())
      .then((data) => {
        if(data.id) {
          setRender(true);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 5000)
        }
      })

      setAuthor('');
      setContent('');

      console.log(content)
    }

  return <div>
  <ContainerContato>
  
  <form key={content.id}>
  <div>
  <label>E-mail:</label></div>
  <input type="text" label="Name" id="name" placeholder='Seu e-mail:' value={author} onChange={(event)=>
  {setAuthor(event.target.value)}} /> 
  </form>
 

  <div className='Titulo'>
  <label>Mensagem:</label></div>
  <textarea rows="2" cols="50" name="comment" placeholder='Digite Sua Mensagem...' form="usrform" id="message" label="Message" onChange={(event)=>
  {setContent(event.target.value)}}>
  </textarea>
  

  <div>  
  <ButtonEnviar type="button" onClick={sendMessage} >Enviar </ButtonEnviar>
  </div>
  {validator && <strong> Por favor preencher todos os campos!!!</strong> //alerta erro
   }
  {success && <strong>  Mensagem foi enviada</strong> //alerta erro
   }
  
  </ContainerContato>
  
   <Titulomsg>MENSAGENS</Titulomsg>
 
  <ContainerMsg>
  {message.map((content) => {
    return (
      <Msgs> 
      <div key={content.id}>
      <h4><b>{content.email}</b></h4> 
      <p>{content.message}</p>
      <small>{content.created_at}</small>
      </div>
      </Msgs> 
    )
  })}
  
  </ContainerMsg>
  
      </div>;
}

export default Contato;
const Msgs = styled.div`
padding: 40px;
font-family: Helvetica;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
background: #fff;
border-radius: 8px;
`