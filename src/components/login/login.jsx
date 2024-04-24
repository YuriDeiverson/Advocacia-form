import {FaUser, FaLock} from 'react-icons/fa';
import {useState} from "react";
import "./login.css";

const login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState ("");
  const handleSubmit = (event) =>{
    event.preventDefault();

    alert("Enviando os dados: " + username + " - " + password);

    console.log(username, password);
    console.log("Envio"); 'Envio'

    
  };
  return (
    <div>
      <div className='Main-header'>
        <h1>Bem vindo a Advocacia Jurídica</h1>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Acesse nosso sistema</h1>
          <div className='input-field'>
          <input type="text"  placeholder='E-mail' required onChange={(e)=> setUsername(e.target.value)}/>
          <FaUser className="icon"/>
          </div>
          <div className='input-field'>
          <input type="password"  placeholder='Senha'required onChange={(e)=> setPassword(e.target.value)}/>
          <FaLock className='icon'/>
          </div>
          <div className="recall-forget">
            <label htmlFor="">
              <input type="checkbox" />
              Manter login
            </label>
            <a href="#">Esqueceu a senha?</a>
          </div>

          <button>Entrar</button>

          <div className="signup-link">
            <p>Novo por aqui? <a href="#">Registrar-se</a></p>
          </div>
        </form>
      </div>
    </div>  
  );
};

export default login
