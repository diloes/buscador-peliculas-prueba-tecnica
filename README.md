# Prueba Técnica de React

Crear una aplicación para buscar películas.

API a usar:

- https://www.omdbapi.com
- API_KEY: af989299

Requerimientos:

[x] Necesita mostrar un input para buscar la película y un botón para buscar.

[x] Lista las películas encontradas y muestra el título, año y poster.

[x] Dale funcionalidad al form

[x] Haz que las películas se muestren en un grid responsive.

[x] Hacer fetching de datos a la API

Primera iteración:

[x] Evitar que se haga la misma búsqueda dos veces seguidas.

[x] Haz que la búsqueda se haga automáticamente al escribir.

[x] Evita que se haga la búsqueda continuamente al escribir (debounce).

## Mis Apuntes

A continuación anoto cosas que considero importantes.

### input controlados vs no controlados

Los input controlados hacen que se renderice el componente cuando escribimos en él. Ralentizando mucho
nuestra app. Los no controlados son mejores en este caso. Pero estamos usando el controlado en esta app
para ver el uso de useMemo.

### Water.css

Para no perder tiempo con los estilos hemos usado **water.css** que es un framework sin clases
que te estila un poquito la web para que no tengas que preocuparte, ya que el objetivo de este proyecto
es trabajar la lógica con React.

### Manejo de API - JSON

Una buena práctica para saber cómo se muestra el json que recibimos de la API, evitando así estar continuamente haciendo
fetch, es poner la url con los parámetros y lo que vayamos a necesitar en el navegador y guardar el resultado
en un archivo en la carpeta `/mocks', también guardamos el json que recibimos sin resultados. De esta manera podemos consultarlo
las veces que queramos simplemente viéndolo en nuestro archivo.

Incluso un truco muy bueno es trabajar con estos archivos mientras maquetamos la web sin tener que hacer el fetch. Cuando
vayamos a utilizar el contenido del Json nos va a dar las distintas propiedades que tiene que de otra forma no nos lo daría
si no usamos typescript.

### Cómo evitar hacer dos veces la misma búsqueda

Para evitar hacer dos veces las misma búsqueda usamos useRef. Ya que este hook guarda un valor que persiste
entre renderizados, tendremos el nuevo search en el nuevo renderizado y lo comparamos con el antiguo search que está
guardado en el useRef(previousSearch).

### useMemo

Usamos useMemo para memoizar computaciones que hemos hecho que queremos evitar que se hagan a no ser que cambien
las dependencias que le indiquemos. En este caso evitamos que se haga el sort cada vez que cambia el input.

### useCallback

Se utiliza solo para las funciones, este utiliza useMemo por debajo. La diferencia es que ofrece una sintaxis
más limpia cuando se utiliza useMemo para una función.
