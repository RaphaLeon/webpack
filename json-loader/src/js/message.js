import renderToDOM from './render-to-dom';
import makeMessage from './make-message';

const waitTime = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve('3 seconds passed');
    }, 3000)
})

module.exports = {
    firstMessage: 'Hello world from Message module!',
    delayedMessage: async () => {
        const message = await waitTime;
        console.log(message);
        renderToDOM(makeMessage(message));
    },
}