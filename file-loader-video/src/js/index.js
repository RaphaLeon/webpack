import '../css/style.css';
import { firstMessage, delayedMessage } from './message';
import platziImg from '../images/platzi.png';
import platziVideo from '../video/que-es-core.mp4';



const img = document.createElement('img');
img.setAttribute('src', platziImg);
img.setAttribute('width', 50);
img.setAttribute('height', 50);
document.body.appendChild(img);

const video = document.createElement('video');
video.setAttribute('src', platziVideo);
video.setAttribute('width', 500);
video.setAttribute('height', 500);
video.setAttribute('autoplay', true);
video.setAttribute('controls', true);
document.body.appendChild(video);

delayedMessage();
