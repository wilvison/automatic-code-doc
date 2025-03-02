const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post('/', async (req, res) => {
  try {
    const { code } = req.body;
    const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });
    const result = await model.generateContent(`
      Gere documentação técnica em português para este código:
      ${code}
    `);
    res.json({ documentation: result.response.text() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = { geminiRoute: router };
