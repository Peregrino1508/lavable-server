const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let session = null;

// Endpoint raiz para testar se o servidor está online
app.get("/", (req, res) => {
  res.send("Servidor Antygravity Online 🚀");
});

// Endpoint de conexão
app.get("/connect", (req, res) => {
  session = { user: "ari", status: "connected" };
  res.json({ status: "connected", session });
});

// Porta padrão Render (process.env.PORT) ou 3000 para testes locais
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
