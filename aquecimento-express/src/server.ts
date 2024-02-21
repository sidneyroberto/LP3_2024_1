import express from "express";
import cors from "cors";
import logger from "morgan";

const app = express();

/**
 * Libera o acesso a todos os endpoints
 * por qualquer app frontend (requisitante)
 */
app.use(cors());

/**
 * Habilita logs de todas as requisições recebidas
 */
app.use(logger("dev"));

app.get("/pi", (req, res) => {
  const pi = Math.PI;
  return res.status(200).json({ pi });
});

app.get("/somar/:numero1/:numero2", (req, res) => {
  const { numero1, numero2 } = req.params;
  const n1 = Number(numero1);
  const n2 = Number(numero2);

  if (!Number.isNaN(n1) && !Number.isNaN(n2)) {
    const resultado = n1 + n2;
    return res.status(200).json({ resultado });
  }

  return res.status(400).json({ mensagem: "Números inválidos!" });
});

app.get("/dividir", (req, res) => {
  const { numero1, numero2 } = req.query;
  const n1 = Number(numero1);
  const n2 = Number(numero2);

  if (!Number.isNaN(n1) && !Number.isNaN(n2)) {
    if (n2 !== 0) {
      const resultado = n1 / n2;
      return res.status(200).json({ resultado });
    }

    return res.status(400).json({ mensagem: "O divisor não pode ser zero!" });
  }

  return res.status(400).json({ mensagem: "Números inválidos!" });
});

app.get("/", (req, res) => res.send("API de Aquecimento 1.0"));

app.listen(3000, () => console.log("Server running"));
