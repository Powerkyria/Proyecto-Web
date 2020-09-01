![Adalab](https://beta.adalab.es/resources/images/adalab-logo-155x61-bg-white.png)

# Adalab web starter kit

Ahoy! Este es nuestro Starter Kit creado en **node y gulp**. ¿Y qué es un Starter kit? Pues es una **plantilla de proyecto con funcionalidades preinstaladas y preconfiguradas**.

Este Kit incluye un motor de plantillas HTML, el preprocesador SASS y un servidor local y muchas cosas más. El Kit nos ayuda a trabajar más cómodamente, nos automatiza tareas.

En el Kit hay 3 tipos de ficheros y carpetas:

- Los ficheros que están sueltos en la raíz del repositorio, como gulpfile.js, package.json... Son la configuración del proyecto y no necesitamos modificarlos.
- La carpeta `src/`: son los ficheros de nuestra página web, como HTML, CSS, JS...
- Las carpetas `public/` y `docs/`, que son generadas automáticamente cuando arrancamos el proyecto. El Kit lee los ficheros que hay dentro de `src/`, los procesa y los genera dentro de `public/` y `docs/`.

## Guía de inicio rápido

> **NOTA:** Necesitas tener instalado [Node JS](https://nodejs.org/) para trabajar con este Starter Kit:

### Pasos a seguir cada vez que queremos arrancar un proyecto desde cero:

1. **Crea tu propio repositorio.**
1. Descarga este **Starter kit desde GitHub**.
   - No recomendamos que clones este repo ya que no podrás añadir commits.
1. **Copia todos los ficheros** de este Starter kit en la carpeta raíz de tu repositorio.
   - Recuerda que debes copiar **también los ficheros ocultos**.
   - Si has decidido clonar este repo, no debes copiar la carpeta `.git`. Si lo haces estarás machacando tu propio repositorio.
1. **Abre una terminal** en la carpeta raíz de tu repositorio.
1. **Instala las dependencias** locales ejecutando en la terminal el comando:

```bash
npm install
```

### Pasos para arrancar el proyecto:

Una vez hemos instalado las dependencias, vamos a arrancar el proyecto. **El proyecto hay que arrancarlo cada vez que te pongas a programar.** Para ello ejecuta el comando:

```bash
npm start
```

Este comando:

- **Abre una ventana de Chrome y muestra tu página web**, al igual que hace el plugin de VS Code Live Server (Go live).
- También **observa** todos los ficheros que hay dentro de la carpeta `src/`, para que cada vez que modifiques un fichero **refresca tu página en Chrome**.
- También **procesa los ficheros** HTML, SASS / CSS y JS y los **genera y guarda en la carpeta `public/`**. Por ejemplo:
   - Convierte los ficheros SASS en CSS.
   - Combina los diferentes ficheros de HTML y los agrupa en uno o varios ficheros HTML.

Después de ejecutar `npm start` ya puedes empezar a editar todos los ficheros que están dentro de la carpeta `src/` y programar cómodamente.

### Pasos para publicar el proyecto en GitHub Pages:

Para generar tu página para producción ejecuta el comando:

```bash
npm run docs
```

Y a continuación:

1. Sube a tu repo la carpeta `docs/` que se te acaba de generar.
1. Entra en la pestaña `settings` de tu repo.
1. Y en el apartado de GitHub Pages activa la opción **master branch /docs folder**.
1. Y ya estaría!!!

Además, los comandos:

```bash
npm run push-docs
```
o

```bash
npm run deploy
```

son un atajo que nos genera la versión de producción y hace push de la carpeta `docs/` del tirón. Te recomendamos ver el fichero `package.json` para aprender cómo funciona.

## Flujo de archivos con Gulp

Estas tareas de Gulp producen el siguiente flujo de archivos:

![Gulp flow](./gulp-flow.png)

## `gulpfile.js` y `config.json`

Nuestro **gulpfile.js** usa el fichero `config.json` de configuración con las rutas de los archivos a generar / observar.

De esta manera separarmos las acciones que están en `gulpfile.js` de la configuración de las acciones que están en `config.json`.

## Estructura de carpetas

La estructura de carpetas tiene esta pinta:

```
src
 ├─ api // los ficheros de esta carpeta se copian en public/api/
 |  └─ data.json
 ├─ images
 |  └─ logo.jpg
 ├─ js // los ficheros de esta carpeta se concatenan en el fichero main.js y este se guarda en public/main.js
 |  ├─ main.js
 |  └─ events.js
 ├─ scss
 |  ├─ components
 |  ├─ core
 |  ├─ layout
 |  └─ pages
 └─ html
    └─ partials
```

> **NOTA:** Los partials de HTML y SASS del proyecto son orientativos. Te recomendamos usar los que quieras, y borrar los que no uses.

## Vídeotutoriales del Starter kit

- [Qué es, trabajar con la versión de desarrollo y rutas relativas](https://www.youtube.com/watch?v=XwvhXvBijos)
- [Migración de un proyecto, trabajar con la versión de producción y GitHub Pages](https://www.youtube.com/watch?v=qqGClcgt9Uc)
- [Motor de plantillas](https://www.youtube.com/watch?v=4GwXOJ045Zg)


-------------------------------------------------------

# RESIZE IMAGES

![Imgur](https://i.imgur.com/GLMJvVf.png)

# Demo

1. down images w/ imagen
2. instal npm i sharp

```javascript
const sharp = require('sharp');
const fs = require('fs');
const directory = './src/images';

fs.readdirSync(directory).forEach(file => {
  const name = file.split('.')[0];
  console.log(file, name);
});
```

```javascript
const sharp = require('sharp');
const fs = require('fs');
const directory = './src/images';

fs.readdirSync(directory).forEach(file => {
  const name = file.split('.')[0];
  sharp(`${directory}/${file}`)
    .resize(180,220) // width,height
    .toFile(`${directory}/${name}-small.jpg`);

  sharp(`${directory}/${file}`)
    .resize(205, 245) // width,height
    .toFile(`${directory}/${name}-medium.jpg`);
    
  sharp(`${directory}/${file}`)
    .resize(278, 318) // width,height
    .toFile(`${directory}/${name}-big.jpg`);
});
```
3. node resize.js

```html
<picture>
  <source srcset="assets/images/image-small.jpg" media="(max-width: 768px)" />
  <source srcset="assets/images/image-medium.jpg" media="(max-width: 1200px)" />
  <source srcset="assets/images/image.jpg" media="(max-width: 1440px)" />
  <img src="assets/images/image.jpg" />
</picture>
```
------------------------------------------------------------------------------------

# COMPRESS IMAGES WHIT IMAGEMIN

0. npm install --save-dev gulp-imagemin
1. npm install imagemin-mozjpeg     ---> Para imagene jpg
2. npm install imagemin-pngquant    ---> Para imagenes png



![Imgur](https://i.imgur.com/imphVvI.png)

```js
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg');
	 
gulp.task('imagemin', () => {
  return gulp.src('src/assets/imgs/*')
    .pipe(imagemin([
      pngquant({quality: [0.5, 0.5]}),
      mozjpeg({quality: 50}),
    ]))
    .pipe(gulp.dest('src/assets/imgs/'));
});

```
3. gulp imagemin   ---> ejecutar tarea

# WEBP IMAGES WHIT IMAGEMIN 

1. npm i gulp-ext-replace --save-dev
2. npm i imagemin-webp --save-dev

![Imgur](https://i.imgur.com/FeAsPBW.png)

```js
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const extReplace = require('gulp-ext-replace');
const webp = require('imagemin-webp');
	 

gulp.task('webp', () => {
  return gulp.src('src/imgs/*')
    .pipe(imagemin([
      webp({quality: 50})
    ]))
    .pipe(extReplace('.webp'))
    .pipe(gulp.dest('src/imgs/'))
});
```
3. gulp webp   ---> ejecutar tarea