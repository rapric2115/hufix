# Hufix

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Generar los Services Worker de Forma facil al proyecto

Agregar cuando finalice el proyecto, puedes agregar cuando desee pero es recomendable al final.
Copia el siguiente enlace y en la linea de comando agregalo 
  ng add @angular/pwa --project hufix 

Esto es para que de la sensacion de una app nativa y funcionamiento offline, esto agregara varios archivos el cual tendras que realizar algunos cambios en el manifest el color y los iconos que se 
generaron.

## Para que la app se lea mejor por los google bots, y tenga mejor seo.

Esto facilita a que la pagina se lea el codigo html, asi los google spider leen de que trata la pagina, ya que los google spider no saben leer javascript. solo tener que agregar este codigo en la command line 
  ng add @nguniversal/express-engine --clientProject hufix

esto generara varios archivos (browser y server), yo en este punto ambos archivos lo subo a la web, 
ya que dependera del mismo browser cual de estos leer. en dado caso puedes hacer pruebas subiendo un archivo primero y luego el otro y ver cual de los dos da los codigos html de la pagina.

##NOTA 
Los archivos estaran en github, la direccion sera agregada mas tarde, despues de clonar los archivos debes de abrir la linea de comando y escribir esta linea para instalar todas las dependencias de la pagina para que pueda trabajar en ella, y ver su funcionamiento, esto es dentro de la carpeta donde se encuentra alojado los archivos de la pagina.
npm install
