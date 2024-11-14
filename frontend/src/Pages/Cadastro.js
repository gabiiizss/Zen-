import React, { useState } from 'react';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import '../gabi/cadastro.css'; // Seu arquivo CSS de estilos

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    telefoneImpresa: '',
    senha: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/cadastro', formData);
      alert('Cadastro concluido com sucesso!');
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        nome: '',
        email: '',
        cpf: '',
        telefoneImpresa: '',
        senha: '',
      });
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      alert('Erro ao cadastrar. Verifique o console para mais detalhes.');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className='formsSistema'>

      <div className="container">
        <div className="imagem-container">
          <img src={require('../imagens/BannerCadastrro.png')} alt="Cadastro" />
        </div>
        <div className="form-container">
          <h2>Cadastro</h2>

          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="cpf"
            placeholder="CPF"
            value={formData.cpf}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="telefone"
            placeholder="Telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
          <button type="submit">Cadastrar</button>

          {/* Link para a página de login */}
          <p>
            Já tenho conta? <Link to="/login">Faça login</Link>
          </p>
        </div>
      </div>
    </Form>
  );
};

export default Cadastro;
