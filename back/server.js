const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const bcrypt = require('bcrypt');
const port = process.env.PORT || 3001;

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Conexão ao MongoDB estabelecida com sucesso');
});

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
const myModelRouter = require('./routes/myModel');
app.use('/myModels', myModelRouter);

app.listen(port, () => {
  console.log(`Servidor Express está rodando na porta ${port}`);
});
