
# MARKDOW LINKS

##  Tabla de contenido
* [ Deficición ](#Deficición)
* [ Documentación ](#Documentación)
    * [ Instalación ](#Instalación)
    * [ Uso ](#Uso)
    * [ Opciones ](#Opciones)
    * [ Diagrama de flujo ](#Diagrama-de-flujo)
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

** `md-links` ** funciona si ya tiene instalado nodejs y, por lo tanto, también npm, que se instala junto con node.


###  Uso

####  API 

Para ejecutar la libreria utiliza este comando:

```
$  md-links 
```

####  CLI (interfaz de línea de comandos)

Después de iniciar la libreria :
* Introduzca su ruta absoluta/relativa
* Eliga la opción de tu preferencia (--basic , --validate ,--stats ,--validate & --stats , --statsPlus)


> Si necesitas información acerca de las opciones ,  seleccione la última opción **--Please, help**


###  Opciones

####  --Basic

La opción --basic muestra información general acerca de los links que se encuentran en los archivos Markdown  . Obtendremos información acerca de  la ruta del archivo , los enlaces que se encuentren y los textos de los enlaces.


####  --Validate

La opción --validate , aparte de mostrar la información general del link (la ruta del archivo , los enlaces que se encuentren y los textos de los enlaces) se encarga de realizar la solicitud HTTP para saber el estado del link. Si el enlace funciona correctamente obtendremos un status de 200 y un texto de ok , si el enlace falla , el status será de 404 y el texto será de fail.


####  --Stats

Con la opción -- stats obtendremos información acerca del número total de links , links únicos y links repetidos  que se encuentran en el ruta que se ha analizado.


####  --Validate  & --Stats

Al combinar las opciones de --stats y --validate obtendremos información acerca del  número total de links , links únicos , links repetidos y links rotos que se encuentran en el ruta que se ha analizado.

####   --StatsPlus

Al usar la opción --StatsPlus obtendremos información acerca del número de veces en que aprarece cada link.

###  Diagrama de flujo
A continuacion se muestran los diagramas de flujo de la API  y del CLI

####  API de diagrama de flujo

<div align=center><img src="https://user-images.githubusercontent.com/87873460/150701174-91fe5998-4399-4ea1-bd56-f806d48a7227.png" width=60%></div>

####  Diagrama de flujo CLI


<div align=center><img src="https://user-images.githubusercontent.com/87873460/150701263-6b718b12-3633-4c90-84dc-b80aeafd6904.png" width=100%></div>



###  Documentación técnica de la biblioteca
- JavaScript
- Nodoe.js
- Inquirer
- Table
- Mocks
- RegEx
- Chalk
- Babel


#  Autor

Nicol Lesly Mendoza Mattos


