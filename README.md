# Manual Técnico del Proyecto: Módulo de Gestión de Empleados

## 1. Introducción

Este proyecto consiste en la construcción de un sistema básico de gestión de usuarios utilizando el stack MERN con un frontend sencillo en HTML, CSS, y JavaScript vanilla, y un backend desarrollado con Node.js, Express, y MongoDB. La aplicación permite realizar todas las operaciones CRUD (Create, Read, Update, Delete) sobre usuarios almacenados en una base de datos NoSQL (MongoDB).

## 2. Arquitectura del Sistema

### 2.1 Diagrama de Arquitectura

**Descripción:** La aplicación está dividida en dos partes principales: el frontend, desarrollado en HTML, CSS y JavaScript vanilla, y el backend, desarrollado con Node.js y Express, que interactúa con una base de datos MongoDB.

**Diagrama:** ![Diagrama de Arquitectura](https://ellow.io/wp-content/uploads/2023/12/Architectural-Structure-of-MERN-Stack.png)

## 3. Backend

### 3.1 Descripción General

- **Lenguaje de programación:** JavaScript.
- **Framework utilizado:** Express.js.
- **Base de datos:** MongoDB.

### 3.2 Estructura del Proyecto

El backend del proyecto tiene la siguiente estructura:

```plaintext
backend/
│
├── users/
│   ├── controler.js  # Contiene la lógica de negocio para manejar las operaciones CRUD.
│   ├── model.js      # Define la estructura de los datos en MongoDB.
│   └── routes.js     # Define las rutas de la API que mapean las operaciones CRUD a las funciones del controlador.
│
├── .env              # Archivo de configuración de variables de entorno.
└── app.js            # Punto de entrada del backend donde se inicializa el servidor y la conexión a la base de datos.
```

### 3.3 Instalación y Configuración

#### Requisitos previos:

- [Node.js (versión 14 o superior)](https://nodejs.org/) 
- [MongoDB (instalado y en funcionamiento)](https://www.mongodb.com/try/download/community)


#### Instrucciones de instalación:

- Abre una terminal y ejecuta el siguiente comando para clorar el repositorio
  ```bash
  git clone https://github.com/jdgiraldot/UserManagement.git
  ```
- Selecciona la carpeta backend usando el siguiente comando en la terminal:
  ```bash
  cd backend
  ```
- Ejecuta el siguiente comando para instalar las dependencias del proyecto:
  ```bash
  npm install
  ```
- Edita el archivo .env en la carpeta backend, reemplaza la palabra `myapp` por el nombre de tu base de datos:
  ```plaintext
  MONGO_URI=mongodb://localhost:27017/myapp
  PORT=5000
  ```
  _Adicionalmente, dentro de tu base de datos debe estar creada una colección llamada `users`._
- Inicia el servicio de backend usando el comando:
  ```bash
  npm start
  ```

### 3.4 Endpoints de la API

- **GET /api/users/:id:** Obtener un usuario por su documento.
- **POST /api/users:** Crear un nuevo usuario.
- **PUT /api/users/:id:** Actualizar un usuario existente por su documento.
- **DELETE /api/users/:id:** Eliminar un usuario por su documento.

### 3.5 Conexión a la Base de Datos

- **Configuración:** La conexión a la base de datos se gestiona en el archivo `app.js`. Este archivo contiene la lógica para conectarse a MongoDB utilizando la URI definida en las variables de entorno en el archivo `.env`. La base de datos se ejecuta localmente en `mongodb://localhost:27017/myapp`.

## 4. Frontend

### 4.1 Descripción General

- **Lenguaje de programación:** JavaScript.
- **Estructura:** HTML, CSS y JavaScript Vanilla.

### 4.2 Estructura del Proyecto

El frontend del proyecto tiene la siguiente estructura:

```plaintext
frontend/
│
├── css/
│   └── styles.css        # Archivo CSS para el estilo de la aplicación.
│
├── js/
│   └── app.js            # Lógica principal de la aplicación para interactuar con el backend mediante solicitudes HTTP.
│
├── index.html            # Página principal con el formulario para crear, consultar, actualizar y borrar usuarios.
└── README.md             # Documentación del proyecto.
```

- **`css/styles.css`**: Contiene los estilos CSS aplicados a la interfaz de usuario para darle formato y diseño.

- **`js/app.js`**: Incluye la lógica principal de la aplicación, manejando las interacciones con el backend a través de solicitudes HTTP para crear, consultar, actualizar y borrar usuarios.

- **`index.html`**: Es la página principal que muestra el formulario de gestión de usuarios, permitiendo la interacción del usuario con la aplicación.

- **`README.md`**: Documentación del proyecto que describe cómo instalar, configurar y utilizar la aplicación.

### 4.3 Instalación y Configuración

- **Requisitos previos:** Un navegador web.
- **Instrucciones de instalación:**
  - No es necesario instalar dependencias adicionales para el frontend.
  - Simplemente abre el archivo `index.html` en cualquier navegador para cargar la interfaz de usuario.

### 4.4 Conexión con el Backend

Los componentes del frontend interactúan con el backend enviando y recibiendo datos a través de peticiones HTTP utilizando `fetch`.

**Ejemplo de una Petición:**

- **Crear un usuario**      [POST] [http://localhost:5000/api/users](http://localhost:5000/api/users)
- **Consultar un usuario**  [GET] [http://localhost:5000/api/users/{id}](http://localhost:5000/api/users/{id})
- **Actualizar un usuario** [PUT] [http://localhost:5000/api/users/{id}](http://localhost:5000/api/users/{id})
- **Eliminar un usuario**   [DELETE] [http://localhost:5000/api/users/{id}](http://localhost:5000/api/users/{id})

Se debe cambiar `{id}` por el número del documento con que fue creado el usuario.

## 5. Pruebas

### 5.1 Pruebas Backend

- **Descripción**: Las pruebas del backend se pueden realizar utilizando herramientas como Postman o Insomnia para verificar las operaciones CRUD de la API.
- **Ejemplo de Prueba Unitaria**: Un test básico para verificar la funcionalidad de un controlador puede incluir la validación de respuestas de la API para asegurarse de que los datos se manejen correctamente.

### 5.2 Pruebas Frontend

- **Descripción**: Las pruebas del frontend aseguran que los componentes de la aplicación funcionen correctamente. Se pueden utilizar herramientas como Jasmine o Karma para validar la funcionalidad de los componentes y la integración con el backend.

## 6. Despliegue

### 6.1 Backend

- **Descripción**: Para desplegar el backend en un servidor de producción, puedes utilizar plataformas como Heroku o AWS. Asegúrate de configurar las variables de entorno correctamente y de que la base de datos esté accesible desde el entorno de producción.

### 6.2 Frontend

- **Descripción**: El frontend puede desplegarse en servicios como Netlify o Vercel. Simplemente sube el contenido de la carpeta `frontend` y configura el dominio y las opciones de despliegue según las instrucciones de la plataforma elegida.

## 7. Conclusiones

- **Resumen**: Este proyecto implementa un sistema básico de gestión de usuarios utilizando el stack MEAN con un frontend en HTML, CSS y JavaScript vanilla, y un backend en Node.js con Express y MongoDB. Las funcionalidades principales incluyen la capacidad de crear, consultar, actualizar y eliminar usuarios. Para futuras mejoras, se podría considerar la integración de un framework frontend más robusto o la adición de autenticación y autorización.
