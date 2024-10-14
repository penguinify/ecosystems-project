import { NodeManager } from './nodes.js'
import nodes_json from '../static/nodes.json';

function main() {
    const app = document.getElementById('app');

    const nodeManager = new NodeManager(app, nodes_json);
    nodeManager.renderNodes();


}

main();
