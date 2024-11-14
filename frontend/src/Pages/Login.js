import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa o Link do react-router-dom
import '../gabi/login.css'; // Seu arquivo CSS de estilos
import bannerLogin from '../imagens/BannerLogin.png'; // Ajuste o caminho conforme necessário

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(''); // Defina o estado do erro
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Defina o estado de login

  const handleLogin = async (e) => { // Tornar a função assíncrona
    e.preventDefault();
    console.log('Usuário logado:', { email, senha });

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
        mode: 'cors', // Explicitamente definindo o modo CORS
      });

      if (response.ok) {
        setIsLoggedIn(true);
        alert("Logado com sucesso")
        setError('');
      } else {
        setError('Email ou senha incorretos!');
        
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        {isLoggedIn ? (
          <div>
            <h1>Logado com sucesso</h1>
          </div>
        ) : (
          <form onSubmit={handleLogin}>
          <h2>Login</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>
        )}
    
        <p>
          Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
        </p>
      </div>
      <div className="imagem-container">
        <img src={bannerLogin} alt="Login" />
      </div>
    </div>
  );
};

export default Login;
