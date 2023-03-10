import "./style.css";
import typescriptLogo from "./typescript.svg";
/* import { setupCounter } from "./counter";
import { charmander } from './bases/04-injection'; */
import { Pokemon } from "./bases/05-decorators";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>EL pokemon es </h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

const charmander = new Pokemon(4, "charmander");
charmander.scream();
charmander.speak();
