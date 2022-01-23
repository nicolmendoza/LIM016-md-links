
# MARKDOW LINKS

##  Tabla de contenido
* [ Deficición ](#Deficición)
* [ Documentación ](#Documentación)
    * [ Instalación ](#Instalación)
    * [ Uso ](#Uso)
    * [ Opciones ](#Opciones)
    * [ Diagrama de flujo ](#Diagrama de flujo)
    * [ Documentación técnica de la biblioteca. ](#Documentacion-tecnica-de-la-biblioteca)
    * [ Prueba ](#Prueba)
* [ Proyecto ](#Proyecto)
    


##  Descripción

Markdown-links-library  es una libreria que te permite leer , analizar y reportar un analisis de los links que se encuentran en archivos Markdown. 

** `md-links` **  facilita el proceso de:

- Proporcionar información básica sobre enlaces de los archivos .md
- Proporcionar información estadística sobre enlaces en archivos .md
- Validar enlaces que se encientran en los archivos .md
- Reportar links repetidos.

##  Documentación

###  Instalación

* Instalar por npm: 

```
npm i markdown-links-library
```


** `mdLinks` ** funciona si ya tiene instalado nodejs y, por lo tanto, también npm, que se instala junto con node.

Este módulo incluye un ejecutable y una interfaz que podemos importar para usarlo programáticamente.


###  Uso

####  API 

Para ejecutar la libreria utiliza este comando:

```bash
$  md-links 
```

####  CLI (interfaz de línea de comandos)

Después de iniciar la libreria :
1. Introduzca su ruta absoluta/relativa
2. Eliga la opción de tu preferencia (--basic , --validate ,--stats ,--validate & --stats , --statsPlus)


> Si necesitas información acerca de las opciones ,  seleccione la última opción **Please, help**


###  Opciones

####  --Basic

La opción --basic muestra información general acerca de los links que se encuentran en los archivos Markdown  . Obtendremos información acerca de  la ruta del archivo , los enlaces que se encuentren y los textos de los enlaces.


####  --Validate

La opción --validate , aparte de mostrar la información general del link (la ruta del archivo , los enlaces que se encuentren y los textos de los enlaces) se encarga de realizar la solicitud HTTP para saber el estado del link. Si el enlace funciona correctamente obtendremos un status de 200 y un texto de ok , si el enlace falla , el status será de 404 y el texto será de fail.


####  --Stats

Con la opción -- stats obtendremos información acerca del número total de links , links únicos y links repetidos  que se encuentran en el ruta que se ha analizado.


####  --Validate  & --Stats

Al combinar las opciones de --stats y --validate obtendremos información acerca del  número total de links , links únicos , links repetidos y links rotos que se encuentran en el ruta que se ha analizado.


###  Diagrama de flujo
A continuacion se muestran los diagramas de flujo de la API  y del CLI

####  API de diagrama de flujo


####  Diagrama de flujo CLI







###  Documentación técnica de la biblioteca
-JavaScript
-Nodoe.js
-Inquirer
-Table
-Mocks
-RegEx
-Chalk
-Babel


#  Autor

Nicol Lesly Mendoza Mattos


