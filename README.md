Especificaciones

Se desarrollará una página web con las siguientes características:

Uso de HTML y Sass (al principio usaréis CSS pero la versión final debe usar Sass)

Uso de mediaqueries y otras técnicas de diseño responsive para que la web se adapte al tamaño de pantalla de distintos dispositivos
Uso de git para el control de versiones del proyecto
Publicación del resultado en Internet usando GitHub Pages

La web tendrá varias páginas:

una página principal (Home) con la información principal sobre el equipo

una página de contacto con un formulario para que puedan ponerse en contacto con vosotras

opcionalmente, una página por cada componente del equipo con información más detallada sobre cada una

Todas las páginas tendrán una cabecera (header) y un pie de página (footer). En la cabecera aparece el nombre del equipo y un menú de navegación que debe mantenerse fijo en la parte superior de la ventana al hacer scroll. En el pie de página aparece el copyright, otro menú y el logo de Adalab.

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

Colores
Verde oscuro: #099d8d
Verde claro: #14d9c4
Blanco: #ffffff
Negro: #000000
Gris oscuro: #54585a
Gris claro: #b8b8b9
Gris de fondo: #f1f1f1


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