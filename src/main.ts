import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
// import './topics/01-basic-types.ts'
// import './topics/02-object-interface.ts'
// import './topics/03-functions.ts'
// import './topics/04-homework-types.ts'
// import './topics/05-basic-destructuring.ts'
// import './topics/06-function-destructuring.ts'
// import './topics/test.ts'
// import './topics/07-import-export.ts';
// import './topics/08-classes.ts
// import './topics/08-classes-weird.ts'
// import './topics/09-generics.ts';
// import './topics/10-decorators.ts
import './topics/11-optional-chaining.ts'
console.log('test');

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>hola</h1>
  <button id="counter">click me</button>
  `
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
