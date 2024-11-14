import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../gabi/login.css';
import bannerLogin from '../Imagens/BannerLogin.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Inicializa o hook de navegação

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Usuário logado:', { email, senha });

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
        mode: 'cors',
      });

      if (response.ok) {
        alert("Logado com sucesso");
        setError('');
        navigate('/home'); // Redireciona para a página Home após o login
      } else {
        setError('Email ou senha incorretos!');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-cover">
        <div className="login-front">
          <img src={bannerLogin} alt="Login Banner" />
        </div>
      </div>

      <div className="login-forms">
        <form onSubmit={handleLogin} className="login-form-content">
          <h2 className="login-title">Login</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="login-input-box">
            <input
              className="inputlogin"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login-input-box">
            <input
              className="inputlogin"
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <div className="login-button">
            <input className="inputlogin" type="submit" value="Entrar" />
          </div>
        </form>
        <p className="login-text">
          Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
