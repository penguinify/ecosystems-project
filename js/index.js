import { NodeManager } from './nodes.js'
import nodes_json from '../static/nodes.json';

function main() {
    const app = document.getElementById('app');

    const nodeManager = new NodeManager(app, nodes_json);
    nodeManager.renderNodes();

    scrollEffect();


}

function scrollEffect() {
    let intro = document.getElementById('intro');

    window.addEventListener('scroll', function() {
        let value = window.scrollY;

        intro.animate([
            { 
                top: value * 0.3 + 'px',
                opacity: 1 - value / 700
            }
        ], {
            duration: 50,
            easing: 'ease',
            fill: 'forwards'
        });

    });
}

main();
