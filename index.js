import { React, ReactDOM } from "https://unpkg.com/es-react";
import htm from "https://unpkg.com/htm?module";
const html = htm.bind(React.createElement);
import { Router, Link } from "./web_modules/@reach/router.js";

// const navigate = (to, replace = false) =>
//   window.history[`${replace ? "replace" : "push"}State`](null, null, to);

// function Link({ to, children, ...rest }) {
//   function handleClick(event) {
//     event.preventDefault();
//     console.log("clicked");
//     navigate(to, true);
//   }
//   return html`
//     <a href=${to} onClick=${handleClick} ${{ ...rest }}>${children}</${Link}>
//   `;
// }

// function App() {
//   React.useEffect(() => {
//     window.addEventListener("popstate", event => {
//       console.log(event);
//       event.preventDefault();
//       navigate(window.location);
//       // location = window.location
//     });
//   });
//   const { pathname } = window.location;
//   console.log(pathname);
//   switch (window.location.pathname) {
//     case "/":
//       return html`
//       <main>
//         <h1>Home</h1>
//         <${Link} to="/about">About</Link>
//         </main>
//       `;
//     case "/about":
//       return html`
//         <h1>About</h1>
//       `;
//     default:
//       return html`
//         <h1>404</h1>
//       `;
//   }
// }

function Home() {
  return html`<div><h1>Home</h1><${Link} to="/about">About</${Link}></div>`;
}

function About() {
  return html`<h1>About</h1`;
}

function App() {
  console.log("rendering");
  return html`
    <${Router}>
      <${Home} path="/" />
      <${About} path="/about" />
    </${Router}>
  `;
}

// function App() {
//   return html`<h1>Hello</h1`;
// }

ReactDOM.render(
  html`
    <${App} />
  `,
  root
);
