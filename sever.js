const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

const submissions = [];

// Rota principal
app.get("/", (req, res) => {
    res.send("API de Formulário está funcionando!");
});

// Rota para enviar dados do formulário
app.post("/submit", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: "Por favor, preencha todos os campos!" });
    }

    // Armazena os dados na memória
    submissions.push({ id: submissions.length + 1, name, email });

    console.log("Dados recebidos:", { name, email });
    res.status(201).json({ message: "Dados enviados com sucesso!", data: { name, email } });
});

// Rota para listar todas as submissões
app.get("/submissions", (req, res) => {
    res.json(submissions);
});

// Inicializa o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});