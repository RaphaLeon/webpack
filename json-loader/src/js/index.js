import '../css/style.css';
import { firstMessage, delayedMessage } from './message';
import platziImg from '../images/platzi.png';
import data from './teachers.json';
import renderToDOM from './render-to-dom';

console.log(data);


data.teachers.forEach((teacher) => {
    const element = document.createElement('li');
    element.textContent = teacher.name;
    renderToDOM(element);

})

const img = document.createElement('img');
img.setAttribute('src', platziImg);
img.setAttribute('width', 50);
img.setAttribute('height', 50);
document.body.appendChild(img);

delayedMessage();
