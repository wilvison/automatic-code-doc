const express = require('express');
const { Configuration, OpenAIApi } = require("openai");
const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

router.post('/', async (req, res) => {
  try {
    const { code } = req.body;
    const completion = await openai.createCompletion({
      model: "gpt-4",
      prompt: `Gere documentação técnica em português para este código:\n\n${code}`,
      max_tokens: 500
    });
    res.json({ documentation: completion.data.choices[0].text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = { gpt4Route: router };
