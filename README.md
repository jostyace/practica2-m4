# Práctica de Autenticación con JWT

Implementación de un sistema de autenticación desde cero utilizando tokens JWT (JSON Web Tokens) en una aplicación Node.js con Express.js
El objetivo principal es incluir la funcionalidad de expiración de tokens para mejorar la seguridad del sistema

## Estructura del Proyecto

/
├── index.js
├── routes
│ └── authRoutes.js
├── controllers
│ ├── login-controller.js
│ └── verify-controller.js
└── config
  └── config.js

## Implementación

Se Inicializó el Proyecto NodeJS con "init -y"
Se instalaron las dependencias necesarias para el proyecto "npm install express jsonwebtoken dotenv"
Se creó el archivo "config.js" para almacenar las variables de entorno
Se creo el archivo .env para definir las variables de Entorno
Se creó el archivo "index.js" para levantar el Servidor y se importó el puerto en el que escucharía nuestro Servidor
Se creó el archivo "routes/authRoutes.js" para definir las rutas la aplicación
Se creó el archivo "controllers/login-controller.js" para definir la lógica de la autenticación
Se creó el archivo "controllers/verify-controller.js" para definir la lógica de la verificación de los tokens

## Lógica de Generación y expiración de Tokens usando JWT

Se definió una variable de Entorno llamada KEY que contiene el secret con el que se realizará la generación del Token usando JWT

Se definió una variable de Entorno llamada EXPIRATION_TIME que contiene el tiempo de expiración del Token en segundos

En el controller login-controller se manejar la autenticación de usuarios. Este controlador verifica las credenciales y genera un token JWT usando la KEY como secret y EXPIRATION_TIME para designar el tiempo de expiración si las credenciales son correctas.

En el Controller verify-controller se decodifica y valida el token usando la clave secreta KEY

Se intenta decodificar el token usando jwt.decode(token).
Si la decodificación falla (es decir, tkn es null), se responde con un código de estado 401 y un mensaje indicando que el token no es válido.

Se verifica si el tiempo de expiración del token (tkn.exp * 1000) es menor que la fecha y hora actual (Date.now()).
Si el token ha expirado, se responde con un código de estado 401 y un mensaje indicando que el token ha expirado.

Se utiliza jwt.verify(token, KEY) para verificar la validez del token con la clave secreta (KEY).
Si ocurre un error durante la verificación (err), se responde con un código de estado 401 y un mensaje indicando que el token es inválido.

Si el token es válido, se responde con un código de estado 200 y un mensaje indicando que el token es válido junto con el contenido decodificado del token.

## Manejo de Errores

Si ocurre algún error inesperado durante el proceso, se captura y se responde con un código de estado 401 y un mensaje indicando que el token es inválido
