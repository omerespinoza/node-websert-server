# SPA con Node.js

Proyecto simple de SPA con Node.js y Express que sirve archivos estáticos.

## Requisitos

- Node.js o Docker

## Dev Container

Este proyecto usa un Dev Container para un entorno de desarrollo aislado con Node.js y TypeScript.

```json
{
  "name": "Rest Web",
  "image": "mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm",
  "forwardPorts": [3000],
  "runArgs": ["--name=rest-server"],
  "postCreateCommand": "npm init -y"
}
```

## Instalación y uso

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
npm install
npm run dev
```
Abrir http://localhost:3000 en el navegador.