const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Configuração da conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword',
  database: 'yourdatabase'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MySQL.');
});

// Rota para obter as perguntas do quiz
app.get('/quiz/perguntas', (req, res) => {
  const query = 'SELECT * FROM perguntas';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Erro ao obter as perguntas' });
    } else {
      res.json(results);
    }
  });
});

// Rota para salvar as respostas do usuário
app.post('/quiz/respostas', (req, res) => {
  const { user, respostas } = req.body;

  // Cria um array para as respostas e substitui null para respostas em branco
  const respostasArray = Array(27).fill(null);
  respostas.forEach((resposta, index) => {
    if (index < respostasArray.length) {
      respostasArray[index] = resposta || null;
    }
  });

  const query = `
    INSERT INTO respostas (user, r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, 
                           r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, 
                           r21, r22, r23, r24, r25, r26, r27)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  
  db.query(query, [user, ...respostasArray], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Erro ao salvar as respostas' });
    } else {
      res.json({ message: 'Respostas salvas com sucesso' });
    }
  });
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000.');
});