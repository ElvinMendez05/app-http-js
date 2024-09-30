import './style.css'
import { breakingBadApp } from './src/breakingbad/breaking-bad-app';

document.querySelector('#app').innerHTML = `
  <div>
  
    <h1 id="app-title">  </h1>
    <div class="card">
    </div>
  </div>
`
const element = document.querySelector('.card');
breakingBadApp(element);