# Enchufados

Pequeña aplicación que presenta un catálogo de productos, el cual se obtiene de una API, brinda la opción de realizar un pedido de un producto a través de un formulario y persista los datos del pedido localmente, de modo que se puedan consultar los pedidos generados, también se debe poder filtrarlos por su identificador.

## Dependencias del proyecto

1. Angular CLI en su versión 8.0.3.
2. Repositorio del proyecto.
3. Conexión a internet.
4. Un navegador ( Chrome, Firefox, Opera ).


## Con que se construyo el proyecto

El proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3, para los estilos se uso CSS3 y [Boostrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/) en su version 4.3.1, los iconos se fueron tomados de [FontAwesome](https://fontawesome.com/) y [IconFinder](https://www.iconfinder.com/) todos en sus verisones gratuitas.


## Como instalar el proyecto

1. Clonar el repositorio del proyecto de GitHub https://github.com/casanc/enchufados.git
2. Entrar a la carpeta del proyecto.
3. En la carpeta del proyecto abrir una terminal.
4. Ejecutar el comando `npm install` para instalar las dependencias del proyecto.

## Como ejecutar el servidor de desarrollo

1. Entrar a la carpeta del proyecto.
2. En la carpeta del proyecto abrir una terminal.
3. Ejecutar el comando `ng serve -o`, este comando abrirá una ventana del navegador predeterminado con la url `http://localhost:4200/` en la cual se podrá hacer uso de todos los recursos del proyecto.

## Como compilar el proyecto

1. Entrar a la carpeta del proyecto.
2. En la carpeta del proyecto abrir una terminal.
3. Ejecutar el comando `ng build`, todos los artefactos generados luego de la compilación quedara almacenados en el directorio `dist/`. Para habilitar el modo de producción al momento ce compilar el proyecto se debe usar el parametro o bandera `-prod`, es decir, `ng build -prod`

## Ayuda

Para obtener ayuda de Angular CLI ejecute el comando `ng help` o comunique sus inquietudes al correo camilosancheztobon@gmail.com