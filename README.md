# Forex Dashboard - Front-End Challenge (BRQ)

Este projeto foi desenvolvido como parte do desafio técnico para vaga de Desenvolvedor(a) Front-End Sênior na BRQ.

## Tecnologias

- React + TypeScript
- Material UI (MUI)
- Redux Toolkit
- React Router
- Jest + React Testing Library

## Funcionalidades

- Cadastro e edição de usuário
- Alternância entre tema claro e escuro com cores customizáveis
- Exibição de moedas com valores convertidos via API (fixer.io)
- Ordenação e paginação de tabela
- Responsividade
- Testes unitários com cobertura > 80%

## Scripts

```bash
# Instalar dependências
npm install

# Rodar o app
npm start

# Rodar testes
npm test

# Verificar cobertura
npm run test -- --coverage
```

## Configuração da API

Altere a chave da API em `src/services/fixerApi.ts`:
```ts
const API_KEY = 'sua-chave-do-fixer-aqui';
```
