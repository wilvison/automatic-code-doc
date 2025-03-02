const express = require('express');
const { Anthropic } = require('@anthropic-ai/sdk');
const router = express.Router();

const anthropic = new Anthropic({ apiKey: process.env.CLAUDE_API_KEY });

router.post('/', async (req, res) => {
  try {
    const { code } = req.body;
    const completion = await anthropic.completions.create({
      model: 'claude-2.1',
      prompt: `Documente este código em português:\n\n${code}`,
      max_tokens_to_sample: 500
    });
    res.json({ documentation: completion.completion });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = { claudeRoute: router };
