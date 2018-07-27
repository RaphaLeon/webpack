import '../css/style.css';
import { firstMessage, delayedMessage } from './message';
import platziImg from '../images/platzi.png';
import data from './teachers.json';
import renderToDOM from './render-to-dom';

import React, { Component } from 'react';
import { render } from 'react-dom';
import Teachers from './components/teachers';

render(<Teachers data={data} />, document.getElementById('container'));

console.log(data);

const img = document.createElement('img');
img.setAttribute('src', platziImg);
img.setAttribute('width', 50);
img.setAttribute('height', 50);
document.body.appendChild(img);

delayedMessage();
