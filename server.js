const express = require('express');
const path = require('path');
const rateLimit = require('express-rate-limit');
const { gpt4Route } = require('./routes/gpt4');
const { llamaRoute } = require('./routes/llama');
const { claudeRoute } = require('./routes/claude');
const { geminiRoute } = require('./routes/gemini');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, 'gui')));

// Rate limiting (100 requisições/15 minutos)
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Limite de requisições excedido"
});
app.use('/api', apiLimiter);

// Rotas
app.use('/api/gpt4', gpt4Route);
app.use('/api/llama', llamaRoute);
app.use('/api/claude', claudeRoute);
app.use('/api/gemini', geminiRoute);

// Rota raiz para a GUI
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'gui', 'index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
