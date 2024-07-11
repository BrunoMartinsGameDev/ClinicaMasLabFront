const jsonServer = require('json-server');
const express = require('express');
const app = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = 3001;

app.use(express.json());
app.use(middlewares);

// Rota de autenticação
app.post('/users', (req, res) => {
  const { login, password } = req.body;
  const db = router.db; // Access to lowdb instance
  const user = db.get('users').find({ login, password }).value();

  console.log('Dados recebidos:', { login, password });
  console.log('Usuário encontrado:', user);

  if (user) {
    res.json({ authenticated: true });
  } else {
    res.status(401).json({ authenticated: false });
  }
});

app.use(router);
app.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
