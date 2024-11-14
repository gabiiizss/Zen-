const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors'); //instale o cors também no navegador, eu instalei a extenção do chrome

const app = express();
const port = 3001;

// Configurar o middleware CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });
  

// Configuração do body-parser para lidar com requisições POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuração da conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Desenvolvedor@123', // substitua pela sua senha do MySQL
  database: 'sistema' // substitua pelo nome do seu banco de dados
});

// Conectando ao MySQL
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL!');
});

// Rota de autenticação
app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  // Consulta para verificar se o usuário existe
  const query = 'SELECT * FROM cadastro WHERE email = ? AND senha = ?';
  db.query(query, [email, senha], (err, results) => {
    if (err) {
      console.error('Erro ao consultar o banco de dados:', err);
      res.status(500).send('Erro no servidor');
      return;
    }

    if (results.length > 0) {
      res.send('Login bem-sucedido!');
    } else {
      res.status(401).send('email ou senha incorretos');
    }
  });
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});