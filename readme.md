# **Fórmula 1 API - Fastify**

Este projeto é uma API simples desenvolvida com Fastify, que fornece informações sobre as equipes e pilotos do grid da Fórmula 1 de 2024. A API foi construída para listar todas as equipes e pilotos da temporada e também permitir a consulta detalhada de um piloto específico com base no seu ID.
Funcionalidades

* Listagem de todas as equipes que participam do campeonato de Fórmula 1 de 2024.
* Listagem de todos os pilotos do grid de 2024.
* Detalhamento de informações de um piloto específico a partir de seu ID.

### **Tecnologias Utilizadas**

* Node.js: Plataforma usada para executar o projeto e desenvolver a API.
* Fastify: Framework web que permite a criação de servidores de forma rápida e eficiente.
* @fastify/cors: Plugin utilizado para habilitar o suporte a CORS, permitindo o compartilhamento de recursos entre origens diferentes.
* TypeScript: Utilizado para adicionar tipagem estática e melhorar a experiência de desenvolvimento.

### **Estrutura do Projeto**

O projeto é dividido em alguns endpoints principais, que retornam informações sobre equipes e pilotos, além de detalhes de um piloto específico. Utilizamos um array para armazenar os dados e a API foi projetada para responder com informações no formato JSON.