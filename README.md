# Especificaciones

Se desarrollará una página web con las siguientes características:

Uso de HTML y Sass (al principio usaréis CSS pero la versión final debe usar Sass)

Uso de mediaqueries y otras técnicas de diseño responsive para que la web se adapte al tamaño de pantalla de distintos dispositivos

Uso de git para el control de versiones del proyecto

Publicación del resultado en Internet usando GitHub Pages

La web tendrá varias páginas:

una página principal (Home) con la información principal sobre el equipo

una página de contacto con un formulario para que puedan ponerse en contacto con vosotras

opcionalmente, una página por cada componente del equipo con información más detallada sobre cada una

Todas las páginas tendrán una cabecera (header) y un pie de página (footer). En la cabecera aparece el nombre del equipo y un menú de navegación que debe mantenerse fijo en la parte superior de la ventana al hacer scroll. En el pie de página aparece el copyright, otro menú y un logo.

En la página principal, aparece:

una foto del equipo
la frase (claim) del equipo
una sección "equipo" con la descripción del mismo (por qué os identificáis como equipo, cosas que tenéis en común) y vuestras fortalezas y debilidades
una sección de "quiénes somos" con información resumida de cada miembro del equipo: nombre, foto, breve bio y enlaces sociales (Twitter, LinkedIn, GitHub y correo)

FORMULARIO

En la página de contacto habrá un formulario que recoge información de contacto como nombre completo, email, teléfono y mensaje, y un botón para poder enviarlo.

Las páginas principal y de contacto tienen un diseño establecido, al que debéis ajustaros lo máximo posible. El diseño está realizado para 3 tamaños de dispositivo:

móvil, por debajo de 768px
tablet, desde 768px hasta 1200px
desktop, a partir de 1200px

LOGO, ICONOS TIPOGRAFIA Y PALETA

Los iconos sociales los podéis sacar de Font Awesome

Las tipografías:
Open Sans y Rubik, disponibles en Google Fonts.

HISTORIAS DE USUARIO

Para la gestión del proyecto, usaremos historias de usuario, que es una herramienta para definir las características de un producto que veremos en detalle durante el curso.

Primera. Versión móvil de la web

Desarrollar la versión para móvil de la web (página principal) con HTML y CSS

Crear el contenido de la web: textos e imágenes

Segunda. Versión responsive de la web

Hacer la web para el resto de tamaños de pantalla (tablet, desktop)

Tercera. Mejora de tecnología

Integración con gulp para automatización de tareas
Dividir HTML en partials
Pasar el CSS a Sass (también usando partials)
Aplicar las técnicas avanzadas aprendidas en la parte final del curso:
Grid en la sección de "quiénes somos"
Opcionalmente añadir animaciones y transiciones

Cuarta. Formulario de contacto

Realizar el formulario de contacto para todos los dispositivos
Hacer que funcione el envío usando el servicio formspree.io

ALGUNOS CONSEJOS IMPORTANTES:

Diseñaremos siempre con el pixel como medida para márgenes, relleno, tamaño de fuentes y bordes y con el porcentaje para anchos y algunas alturas

Lo normal es diseñar en una pantalla de 320x480

Es recomendable usar múltiplos de 12, 8 o 10 para las medidas, de esta forma creamos cierto ritmo y consistencia en el diseño

Lo normal para los márgenes en móvil es usar entre 16 y 24 píxeles

Usar un interlineado de entre 1.4 y 1.6 para el texto ayuda a dar espacio y lo deja mucho menos sobrecargado.

Es fundamental usar un grid para las vistas en ordenador


/*******************************************************************************************************************/


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