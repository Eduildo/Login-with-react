import {useState} from 'react';

import logo from './assets/logo.svg';
import './styles.css';

function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className="container">
      <div className="container-login">
        <div className= "wrap-login">
          <form className="login-form">
            <span className="login-form-title">Bem Vindo</span>
            <span className="login-form-title">
              <img src={logo} alt="Logotipo"></img>
            </span>
            <div className="wrap-input">
              <input className={email !== "" ? 'has-val input': 'input'} value={email} onChange={e => setEmail(e.target.value)} type="email"/>
              <span className="focus-input" data-placeholder="Email"></span>
            </div>
            <div className="wrap-input">
              <input className={password !== "" ? 'has-val input': 'input'} value={password} onChange={e => setPassword(e.target.value)} type="password"/>
              <span className="focus-input" data-placeholder="Password"></span>
            </div>
            <div className="container-login-form-btn">
              <button className="login-form-btn">Entrar</button>
            </div>
            <div className="text-center">
              <span className="txt1">Não possui uma conta? </span>
              <a className="txt2" href="www.lima.com"> Criar conta </a>
            </div>
            <div className="text-center2">
              <span className="txt">developed by: Eduildo Lima </span>
            </div>
          </form>
        </div>
        </div>
    </div>
  );
}

export default App;
