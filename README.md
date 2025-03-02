# Documentação Automática de Código com IA Generativa

[![MIT License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)]

Framework open-source para comparação de modelos de IA generativa na documentação automática de código.

## Estrutura do Projeto
```
📦automatic-code-doc/
├──📂 gui/
│   └──📜 index.html
├──📂 routes/
│   ├──📜 gpt4.js
│   ├──📜 llama.js
│   ├──📜 claude.js
│   └──📜 gemini.js
├──📂 evaluation/
│   ├──📜 analysis.ipynb
│   ├──📜 results.csv
│   └──📜 code_samples.jsonl
├──📂 paper/
│   ├── main.tex
│   ├──📂 IEEE-template/
│   ├──📂 figures/
│   │   ├──📜 workflow.png
│   │   └──📜 results.png
│   └── references.bib
├──📂 presentation/
│   ├──📜 slides.pptx
│   ├──📜 slides.pdf
│   └──📂 assets/
│       ├──📜 logo.png
│       └──📜 architecture.png
├──📜 server.js
├──📜 Dockerfile
├──📜 docker-compose.yml
├──📜 package.json
├──📜 .env.example
└──📜 LICENSE
├──📜 README.md
├──📜 LICENSE

```

## Funcionalidades
✅ Suporte a GPT-4, Llama, Claude e Gemini  
✅ Interface web responsiva  
✅ Avaliação automática com métricas BLEU/ROUGE  
✅ Integração com Docker  
✅ Sistema de rate limiting  

## Instalação
# Instruções para Execução

1 - Instalar as dependências:
```
npm install
```
2 - Configure como variáveis ​​de ambiente:
```
cp .env.example .env  //Preencha as chaves no arquivo .env
```
3 - Execute o servidor:
```
npm run dev  //Modo desenvolvimento
ou
docker-compose up  //Com Docker

```
4 - Acesse a interface:
```
http://localhost:3000
```
## Citação

Se você usar este projeto em sua pesquisa, por favor cite:

```
@article{https://www.linkedin.com/in/wilvison,
  title={AutoDocGen: Documentação Automática de Código com IA Generativa},
  author={Wilvison Ralis},
  journal={Proceedings of the IEEE},
  year={2025}
}
```
