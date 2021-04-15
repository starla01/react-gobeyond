# Que veremos en React JS

## Prerequisitos

Hay algunas cosas que debe saber de antemano antes de comenzar a jugar con React. Si nunca antes ha usado JavaScript o DOM, por ejemplo, me familiarizaría con ellos antes de intentar abordar React.

Y estos son los requisitos previo que tenemos que considerar antes de entrar a abordar REACT JS

Conocimientos Básicos con [HTML](https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML) & [CSS](https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML)

Conocimientos Básicos de [Javascript](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps)

Comprensión Básica del [DOM](https://www.taniarascia.com/introduction-to-the-dom/)

Familiaridad con la sintaxis de las funciones de [ES6](https://www.taniarascia.com/es6-syntax-and-feature-overview/)

[NODE JS y NPM](https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/) instalados globalmente

## Goals

Aprender sobre conceptos escenciales de REACT y términos relacionados, como Babel, WebPack, componentes, props, estados y ciclo de vida.

Presentar una aplicacion simple que demuestre los conceptos enteriores

Aqui esta la fuente y las instrucciones para ejecutar y demostrar el resultado final en un navegador.

[Código de fuente GITHUB](http://github/calcualdora);

# ¿Que es REACT?

React es una biblioteca de Javascript, una de las mas populares, con mas de 100,000 estrellas en GitHub.

React no es un framework

React es un proyecto de código abierto creado por Facebook.

React se utiliza par crear interfaces de usuario (UI).

React es la capa de vista de una aplicacion.

Uno de los aspectos mas importantes de React es el hecho de que puede crear componentes, que son como elementos HTML personalizados y reutilizables, para construir interfaces de usuario de manera rápida y eficiente. React tambien agiliza la forma en que se almacenan y manejan los datos, utilizando el estate y los props.

# Configuración e instalación

Hay algunas formas de configurar React, en este curso mistraremos 2 para tener mejor idea de como funciona

## Archivo de HTML Estatico

Este primer metodo no es la forma mas popular de configurar React y no es la forma en que haremos el resto de la platica pero sera una manera facil de entender con repecto a las clases de los dias anteriores de HTML y Javascript ademas de que es la forma menos aterradora si no estamos femiliarizados con Webpack, Babel y Node.js.

Comenzaremos por crear un archivo de HTML Básico. Vamos a cargar 3 CDNs en la cabecera: `React`, `React DOM`, y `Babel`. Tambien vamos a crear un `<div></div>` con un id llamado `root`, y finalmente crearemos una etiqueta de script donde vivira todo nuestro código que construyamos.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Hello React!</title>
    <script
      crossorigin
      src="https://unpkg.com/react@17/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
  </head>

  <body>
    <div id="root"></div>
    <script type="text/babel">
      // React code will go here
    </script>
  </body>
</html>
```

React: la API de nivel superior de React

React DOM: agrega mètodos especificos de DOM

Babel: un compilador de Javascript que nos permite usar ES6+ en navegadores mas antiguos

El punto de entrada para nuestra Applicación sera el elemento `root`, que se nombra por convención. Tambien noten que el tipo de script `text/babel` es obligatorio para poder transpilar nuestro codigo de Javascript de ES6.

Ahora escribamos nuestro primer bloque de codigo de React.
Usaremos las funciones Javascript para crear un componente de React llamado `App`.

```jsx
function App() {
  // Code..
}
```

Ahora agregaremos un `return`, el único requerimiento en un componente funcional para retornar y representar elementos de DOM.

```jsx
Function App() {
      return (
          // JSX Nodes...
      );
}
```

Dentro de la declaración, vamos a poner lo que parece un elemento HTML simple. Tenga en cuenta que no estamos devolviendo una cadena aquí, así que no use comillas alrededor del elemento. Esto se llama JSX y pronto aprenderemos más sobre él.

```jsx
function App() {
  return <h1>Hello world!</h1>;
}
```

Finalmente usaremos el metodo `render()` de React DOM para renderizar la clase App que creamos en el `<div id="root"></div>` en el archivo `index.js`

```jsx
ReactDOM.render(<App />, document.getElementById("root"));
```

Aqui esta el codigo completo de como quedaria nuestro `index.html`

```jsx
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />

    <title>Hello React!</title>

    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
  </head>

  <body>
    <div id="root"></div>

    <script type="text/babel">
      function App() {
          return <h1>Hello world!</h1>
      }
      ReactDOM.render(<App />, document.getElementById('root'))
    </script>
  </body>
</html>
```

Ahora, si vez tu index.html en el navegador, verá la etiqueta h1 que creamos renderizada en el DOM.

Cool!, Ahora que hemos hecho esto, podemos ver que React no es tan aterrador para empezar.

Son solo algunas bibliotecas auxiliares de Javascript que podemos cargaren nuestro html

Hemos hecho esto con el fin de demostración pero de aquí en adelante vamos a utilizar otro método: [create-react-app](https://create-react-app.dev/)

## Create React App

El método explicado anteriomente cargando las librerias de `Javascript` en una pagina de `HTML` estàtica y renderizar React y Babel sobre la marcha no es muy eficiente y es dificil de mantener.

Afortunadamente [Facebook](https://www.facebook.com/) ha creado la aplicación Create React, un entorno que viene preconfigurado con todo lo necesario para crear una aplicacion React.

Esta creará un servidor de desarrollo en vivo, usará [WebPack](https://webpack.js.org/) para compilar automaticamente [React](https://reactjs.org/), [JSX](https://es.reactjs.org/docs/introducing-jsx.html), y [ES6](http://es6-features.org/#Constants), prefijara automaticamente los archivos CSS y usara [EsLint](https://eslint.org/) para probar y advertir sobre los errores en el código.

Para configurar `create-react-app` ejecutemos el siguiente código en nuestra terminal, en el directorio donde quieran que viva su proyecto.

```Shell
npx create-react-app react-tutorial
```

Una vez que termine de instalarse, muévase al directorio recién creado e inicie el proyecto.

```Shell
  cd react-tutorial && npm start
```

Una vez que ejecute este comando, aparecerá una nueva ventana en [Localhost](http://localhost:3000) con su nueva aplicación React.

Una vez que ejecute este comando, aparecerá una nueva ventana en localhost: 3000 con su nueva aplicación React.

```note
La aplicación Create React es muy buena para principiantes, así como para aplicaciones empresariales a gran escala, pero no es perfecta para todos los flujos de trabajo. También puede crear su propia configuración de Webpack para React.
```

Si Observamos la estructura del proyecto, veremos un directorio `/public` y `/src`
junto con las carpetas de `node_modules`, `.gitignore`, `README.md` y `package.json`.

En `/public`, nuestro archivo importante es `index.html` que es muy similar al archivo estatico que creamos anteriormente con solo un div `root`. Esta vez no se estan cargando bibliotecas ni scripts. El directorio `/src` contendra todo nuestro codigo React.

Para ver como el entorno compila y actualiza automaticamente nuestro código vemos el archivo `/App.js`:

iniciaremos editando `src/App.js` y guarda para recargar.

y reemplacemos con cualquier otro texto, una vez que guardemos el archivo editado notaras que [localhost:3000](http://localhost:3000) se compila y actualiza con los nuevos datos.

Eliminaremos todos los archivos de `/src`, solo mantendremos `index.css` e `index.js`.

Para el archivo `index.css` podemos empezar a trabajar con CSS primitivo pero si lo desean pueden agregar un MARCO de CSS de su preferencia.

Despues entraremos en el archivo `index.js` al principio de importan `React`, `ReactDOM` y el archivo `index.css`.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
```

Continuaremos nuestro componente de aplicacion nuevamente. Antes solo teniamos un `<h1>`, pero ahora tambien agregamos un elemento `<div>` con una clase, notaras que usamos `className` en lugar de `class` esta es nuesta primera pista de que el codigo que se escribe aqui es `javascript` y no `html`.

```jsx
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    );
  }
}
```

Finalmente, renderizaremos la aplicación en la raíz.

```jsx
ReactDOM.render(<App />, document.getElementById("root"));
```

Aqui esta nuestro `index.js` completo, Esta vez estamos cargando el `Component` como una propiedad de React, por lo que ya no necesitamos extender `React.Component`.

```jsx
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
```

Si regresas al navegador veras `Hola React!` justo como antes pero ahora con React.

# React developer Tools

Existe una extension llamada React Developer tools que te hara la vida mas sencilla cuando trabajes con `React`. Descarga `React Developer Tools` para Chrome o para Firefox.

Despues de instalarlo, cuando abras los `DevTools`veras una pestaña para React. Haz clic en el y podras inspeccionar los componentes tal como estan escritos. Aun puedes ir a la pestaña de `Elements` para ver la salida del DOM actual. Puede que ahora no parezca un gran problema pero a medida que la aplicacion se vielve mas complicada sera cada vez mas necesario usarla.

# JSX: Javascript + XML

Como haz visto, hemos estado usando lo que parece `HTML` en nuestro codigo `React` pero no es `HTML` del todo. Esto es JSX, que significa **Javascript XML**.

Con `JSX` podemos escribir lo que parece HTML, y tambien podemos crear y usar nuestras propias etiquetas similares a XML, Asi es como se ve JSX asignado a una variable.

```jsx
const heading = <h1 className="site-heading">Hello, React</h1>;
```

El uso de `JSX` no es obligatorio para escribir React. Debajo de este `Azúcar sintàtico` (Sugar sintax) se esta ejecutando createElement, que toma la etiqueta el objeto que contiene las propiedades y los elementos secundarios del componente y muestra la misma información.

El siguiente código tendrá el mismo resultado que el JSX anterior.

```JS
const heading = React.createElement('h1', {className: 'site-heading'}, 'Hello, React!')
```

JSX esta mas cerca de Javascript que de HTML, por lo que hay algunas diferencias clave a tener en cuenta al escribirlo.

`clasName` se usa en lugar de `class` para agregar clases CSS, ya que class es una palabra clave reservada en Javascript.

Las propiedades y métodos en JSX con camelCase: es decir el `onclick` se convertira en `onClick`.

Las etiquetas de cierre automatico deben terminar en una barra inclinada... por ejemplo `<img />`

Las expresiones de javascript tambien se pueden incrustar dentro de JSX usando llaves, incluidas variables, funciones y propiedades.

```js
const name = "Fernando";
const heading = <h1>Hello, {name}</h1>;
```

JSX es mas facil de escribir y comprender que crear y agregar muchos elementos en Javascript vanilla, y es una de las razones por las que la gente ama tanto a React.

# Componentes

Hasta ahora hemos creado un componente: el componente App. casi todo en React consta de componentes, que pueden ser componentes de clase o componentes simples.

La mayoría de las aplicacions React tienen muchos componentes pequeños y todo se carga en el componente principal de la aplicación.

Existen 2 tipos de componentes... que soncomponentes de clase y componentes funcionales.

Antes de continuar a adentrarnos con los componentes tenemos que tener en cuenta esta parte

### Componentes de clase

Los componentes de clase tienen el siguiente aspecto

```jsx
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    );
  }
}
```

### Componentes funcionales

Los componentes funcionales se ven así.

```jsx
function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
    </div>
  );
}
```

Los componentes tambien suelen tener su propio archivo, asi que cambiemos nuestro proyecto para hacerlo.

Nuestro index `index.js` tendrá el siguiente aspecto

```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

Crearemos un nuevo archivo llamado `App.js` y colocaremos el componentes ahí.

```jsx
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    );
  }
}

export default App;
```

Exportamos el componente como `App` y lo cargamos en index.js. No es obligatorio separar los componentes en archivos pero una aplicación comenzará a volverse dificil de manejar y se les saldrá de control si no lo hacen.

Y es donde aplico el dicho de 'Divide y venceras'.

# Componentes

Creemos otro componente. Vamos a crear una mesa. Creamos `Table.js` y rellenamos con los siguientes datos.

```jsx
import React from "react";

function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Charlie</td>
          <td>Janitor</td>
        </tr>
        <tr>
          <td>Mac</td>
          <td>Bouncer</td>
        </tr>
        <tr>
          <td>Dee</td>
          <td>Aspiring actress</td>
        </tr>
        <tr>
          <td>Dennis</td>
          <td>Bartender</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
```

Este es un componente funcional. y lo capitalizaremos los componentes funcionales para diferenciarlos de los elementos `HTML` normales.

Regresemos al archivo `App.js` y en las cabeceras importaremos de la siguiente manera

```jsx
import Table from "./Table";
```

Luego dentro del return sustituimos el despues del return el H1 por nuestro nuevo componente importado.

```jsx
import React from "react";
import Table from "./Table";

function App() {
  return (
    <div className="container">
      <Table />
    </div>
  );
}

export default App;
```

Si vuelves a cargar tu navegador veras los cambios actualizados.

# Props

En este momento tenemos un componente de tabal genial. pero los datos estan Hardcodeados. Una de las grandes caracteristicas de React es como se manejan los datos y como lo hace con las propiedades y estado tambien llamadas `props` y `state`

Por ahora nos centraremos solo en los `props`

Primero eliminaremos todos los datos de nuestro componente Table.

```jsx
function Table() {
  return <tbody />;
}
```

Luego moveremos todos los datos a una `array` de objetos, como si estuvieramos incorporando una API pasada en formato JSON.

estos datos estaran dentro de nuestro componete `App`.

```jsx
function App() {
  const characters = [
    {
      name: "Charlie",
      job: "Janitor",
    },
    {
      name: "Mac",
      job: "Bouncer",
    },
    {
      name: "Dee",
      job: "Aspring actress",
    },
    {
      name: "Dennis",
      job: "Bartender",
    },
  ];

  return (
    <div className="container">
      <Table />
    </div>
  );
}
```

Ahora vamos a pasar los datos al componente secundario `Table` con `props` (propiedades) de una manera muy similar a como podría pasar los datos usando atributos de datos en una etiqueta de HTML.

Podemos llamar la propiedad de forma arbitraria siempre y cuando no sea una palabra reservada y de manera semantica asi que la llamaremos `characterData`.

Los datos que estoy transmitiendo son las variables de `characters` y las redeare con `{}` ya que es una exprecion de Javascript.

```jsx
return (
  <div className="container">
    <Table characterData={characters} />
  </div>
);
```

Ahora los datos pasan a nuestro componente `Table` y tenemos que trabajar en nuestro componente secundario para acceder a ellos.

```jsx
function Table({ characterData }) {
  return (
    <table>
      {characterData.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
          </tr>
        );
      })}
    </table>
  );
}
```

Si vas a tu navegador, veras la lista de Caracteres como antes...

Notaremos que se un `key` en el `tr` de la tabla, siempre que se usan listas en React es indispensable agregar este Key, esto ayudara que React pueda identificar cada elemento de la lista.

Los `props` son una manera efectiva de pasar datos existentes a un componente React, sin embargo, el componente no puede cambiar (mutar) los `props` ya que estos son de solo lectura (inmutables).

# State

Hasta este momento almacenamos los datos de los `characteres` en una constante (const) pasandolo como props a un componente. Esto es bueno para empezar, pero imaginen si queremos eliminar un elemento de la lista.

Tenemos un flijo de datos unidireccional, es decir de manera descendente de un componente padre a un componente hijo y los datos de los props son inmutables. Solo com props esto no seria posible.

pero con el estado (state) si podremos.

Piensen en el state como cualquier dato que deba guardarse y modificarse sin ser una base de datos, por ejemplo agregar, eliminar 'characteres' de la lista

Para empezar crearemos un objeto de estado utilizando Hooks

para esta sesion utilizaremos el hook de `useState` para el manejo de estado de nuestro componente.

Primeramente en la parte superior de nuestro componente `Table` agregaremos este hook `useState` para tenerlo disponible de la siguiente manera.

```jsx
import React, { useState } from "react";

function Table({ characterData }) {
  return (
    <table>
      {characterData.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
          </tr>
        );
      })}
    </table>
  );
}
```

Luego almacenaremos los props de `characterData` dentro de nuestro state de con la siguiente linea.

```jsx
const [chars, setChars] = useState(characterData);

// chars: position 0 del arreglo de useState donde se almacena el valor del estado
// setChars: position 1 del arreglo de useState donde tendremos una funcion disponible para actualizar el valor del stado
// useState(characterData) inicializacion del valor del estado con los props
```

Usaremos el metodo `filter` para filtrar nuestro array que se encuentra en el estado `chars`

Crearemos una funcion como la siguiente.

```jsx
function removeChar(index) {
  setChars(
    chars.filter((char, i) => {
      return index !== i;
    })
  );
}
```

Esta es una funcion que recibe un indice `index` para identificar el character a eliminar de la lista.

Luego usaremos la funcion del estate `setChars` para modificar su valor `chars`.

dentro del recorrido del `filter` usaremos una funcion `callback` o `funcion anonima` que hara una comparacion y deveolvera todos los objetos del array excepto el que le pasamos como argumento `index`.

Para ejecutar esta función, agregaremos un evento `onClick` en un nuevo campo de nuestra table de `characters` como se muestra en la siguiente línea.

```jsx
<td onClick={() => removeChar(key)}>remover</td>
```

Noestro componente completo quedaria de la siguiente manera.

```jsx
import React, { useState } from "react";

function Table({ characterData }) {
  const [chars, setChars] = React.useState(characterData);

  function removeChar(index) {
    setChars(
      chars.filter((char, i) => {
        return index !== i;
      })
    );
  }

  function reastartList() {
    setChars(characterData);
  }

  return (
    <table>
      <tbody onClick={restartList}>Reiniciar</tbody>
      <tbody>
        {chars.map(({ name, job }, key) => {
          return (
            <tr key={key}>
              <td>{name}</td>
              <td>{job}</td>
              <td onClick={() => removeChar(key)}>remover</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
```

Ahora comprendemos cómo se inicializa el estado y cómo se puede modificar y como de puede reinicializar.

## Gracias totales !!!
