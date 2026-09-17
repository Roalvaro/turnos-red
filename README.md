# Turnos Red

API RESTful para la gestión de turnos, médicos, profesionales y especialidades.

## Descripción

Este proyecto es una API backend desarrollada con Node.js, Express y TypeScript para gestionar:

- médicos
- turnos
- profesionales
- especialidades
- autenticación básica de usuarios

Incluye validaciones con Zod, manejo de errores HTTP y documentación Swagger.

## Tecnologías

- Node.js
- Express
- TypeScript
- Zod
- JWT
- Swagger

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

```bash
git clone https://github.com/Roalvaro/turnos-red.git
cd turnos-red/backend-express
npm install
```

## Ejecutar la API

```bash
npm run dev
```

La API queda disponible en:

- http://localhost:3000
- Swagger: http://localhost:3000/api-docs

## Endpoints principales

### Profesionales

- GET /api/profesionales
- POST /api/profesionales

### Médicos

- GET /api/medicos
- GET /api/medicos/:id
- POST /api/medicos
- PUT /api/medicos/:id
- DELETE /api/medicos/:id

### Turnos

- GET /api/turnos
- GET /api/turnos/:id
- POST /api/turnos
- PUT /api/turnos/:id
- DELETE /api/turnos/:id

### Especialidades

- GET /api/especialidades

### Auth

- POST /api/auth/login

## Estructura del proyecto

```text
backend-express/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── schemas/
│   ├── middlewares/
│   ├── data.ts
│   ├── dataMedicos.ts
│   ├── dataTurnos.ts
│   ├── server.ts
│   └── swagger.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Estado de la API

La API responde con códigos HTTP estándar como:

- 200 OK
- 201 Created
- 400 Bad Request
- 404 Not Found
- 500 Internal Server Error

## Autor

Rodrigo Maldonado