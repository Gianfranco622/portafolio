<h1 align="center">Portafolio</h1>
  <p align="center">
 Portafolio Web de presentaci贸n creado como una PWA presentar los conocimientos y experiencia adquiridos
  </p>

_Puede visualizar el proyecto desplegado en la web https://gianfranco622.github.io/portafolio/

 ## :ledger: Index

- [Pre-Requisitos](#pre-requisitos-)
- [Instalaci贸n](#instalaci贸n-)
- [PWA](#ejecutando-como-pwa-)
- [Analisis de Codigo](#analisis-de-codigo-)
- [PageSpeed](#page-speed)
- [Construido](#construido-con-)


## Comenzando 馃殌

_Estas instrucciones te permitir谩n obtener una copia del proyecto en funcionamiento en tu m谩quina local para prop贸sitos de desarrollo y pruebas._

### Instalaci贸n 馃敡

_Para ejecutar un entorno de desarrollo_

_Previamente ejecutar el comando en la terminal para descargar "node_modules" para el funcionamiento del proyecto_

```
npm install
```

_Para ejecutar un servidor de pruebas local usar el comando donde **"PUERTO"** sera el puerto donde deseamos ejecutar el proyecto , por default **ng serve** ejecuta el puerto 4200_

```
ng serve --port [PUERTO]
```

_Dirigirse a la ruta http://localhost:4200_


## Ejecutando como PWA 馃懆馃徎鈥嶐煉?

_Para ejecutar como PWA(Progressive Web App) , previamente debe tenerse instalado la libreria http-serve_

```
npm install --global http-server
```

_Una vez instalada proceder a ejecutar el siguiente comando , que nos permite ejecutar en entorno local nuestra PWA_

```
npm run start-pwa
```

_Este comando se encuentra configurado en el archivo *package.json de la raiz del proyecto por default ejecuta el puerto 8080*_


## PageSpeed

_Haciendo uso de la herramienta *https://pagespeed.web.dev/* , se evaluo el tiempo de carga y renderizado por primera vez de la web_

_Obtuviendo un puntaje de **97** en rendimiento en mobile y **100** en desktop_

![Performance PageSpeed 1](/docs/performance/performance-mobile.png)

![Performance PageSpeed 2](/docs/performance/performance-desktop.png)


# Analisis de Codigo 馃敥

_**Pre requisitos**_

_En la raiz del proyecto se tiene el archivo *sonar-project.properties* el cual tiene las propiedades necesarias para ejecutarlo sobre un SonarQube_

_Configurar los apartados : *sonar.host.url* , *sonar.login* *sonar.password* con los datos de su instancia correspondiente o usar SonarCloud con su token correspondiente_

```
Sonaqube >= 9.X
```

![SonarQube Properties](/docs/sonar/sonar-properties.png)

_Las pruebas fueron realizas sobre *SonarQube 9.8* para ejecutar el analisis de codigo ejecutar el comando para la instancia local:_

```
npm run sonar
```

_Reporte de Cobertura en SonarQube_

![SonarQube 1](/docs/sonar/sonarqube-1.png)


## Construido con 馃洜锔?

_Las herramientas utilizadas son:_

- [Angular](https://angular.io/docs) - El Framework para Desarrollo Web
- [NPM](https://www.npmjs.com/) - Manejador de dependencias
- [TailwindCSS](https://tailwindui.com/) -Framework de CSS de c贸digo abierto鈥? para el dise帽o de p谩ginas web
- [Visual Studio Code](https://code.visualstudio.com/) - Editor de Codigo
- [SonarQube](https://www.sonarqube.org/) - Evaluacion de codigo on premise
- [Prettier](https://prettier.io/) - Formateador de Codigo
- [TabNine](https://www.tabnine.com/) - Autocompletador de Codigo

## Versionado 馃搶

Usamos [GIT](https://git-scm.com/) para el versionado.

## Autor鉁掞笍

- **Gianfranco Alfaro Mari帽o** - _Developer_
- [GAM](https://github.com/Gianfranco622)
- Email : gianfranco62211@gmail.com