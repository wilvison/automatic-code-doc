const express = require('express');
const { HfInference } = require('@huggingface/inference');
const router = express.Router();

const hf = new HfInference(process.env.HF_API_KEY);

router.post('/', async (req, res) => {
  try {
    const { code } = req.body;
    const response = await hf.textGeneration({
      model: 'meta-llama/Llama-2-70b-chat-hf',
      inputs: `Documente este código em português:\n${code}`
    });
    res.json({ documentation: response.generated_text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = { llamaRoute: router };
