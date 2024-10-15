function createElement(tag, parent, className, content) {
    let element = document.createElement(tag);
    element.className = className;
    element.innerHTML = content || "";

    parent.appendChild(element);
    return element;
}

export class NodeManager {
    constructor(app, nodes_json) {
        this.app = app; // main element
        this.nodes = nodes_json;
        this.currently_selected_node = null;

    }

    /*
        * Puts the nodes on a circle at an equidistant angle from each other
        * the circle is the height of the screen
        */
    renderNodes() {
        let equidistant_points = this.getEquidistantPoints(this.nodes.length);

        let center = [window.innerWidth / 2, window.innerHeight / 2];

        center[1] += window.innerHeight;

        for (let i = 0; i < this.nodes.length; i++) {
            let node = this.nodes[i];
            let point = equidistant_points[i];

            let node_element = createElement('div', this.app, 'node');
            node_element.id = node.id;

            let node_width = node_element.offsetWidth;
            let node_height = node_element.offsetHeight;

            let node_x = (point[0] - node_width / 2);
            node_x += (node_x - center[0]) / 2;
            let node_y = (point[1] - node_height / 2);

            node_element.style.left = node_x + 'px';
            node_element.style.top = node_y + 'px';

            let node_name = createElement('h2', node_element, 'node-name', node.name);

            let node_content = createElement('div', this.app, 'node-content');
            let node_content_title = createElement('h3', node_content, 'node-content-title', node.name);
            let node_content_text = createElement('p', node_content, 'node-content-text', node.content.information);

            let node_content_images = createElement('div', node_content, 'node-content-images');
            for (let image of node.content.images) {
                let image_element = createElement('img', node_content_images, 'node-content-image');
                image_element.src = image;
            }
            let help_text = createElement('p', node_content, 'help-text', 'Click anywhere to close');

            node_content.style.left = center[0] + 'px';
            node_content.style.top = center[1] + 'px';
            node_content.style.opacity = 0;

            node_element.addEventListener('click', () => {
                if (this.currently_selected_node) {


                    this.currently_selected_node.animate([
                        { opacity: 1 },
                        { opacity: 0 }
                    ], {
                        duration: 1,
                        fill: 'forwards'
                    });
                    

                }

                node_content.animate([
                    { opacity: 0 },
                    { opacity: 1 }
                ], {
                    duration: 100,
                    fill: 'forwards'
                });

                this.currently_selected_node = node_content;

            });



            this.app.appendChild(node_element);
        }
        this.connectNodes();

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.node') && !e.target.closest('.line') && this.currently_selected_node) {
                this.currently_selected_node.animate([
                    { opacity: 1 },
                    { opacity: 0 }
                ], {
                    duration: 1,
                    fill: 'forwards'
                });
                this.currently_selected_node = null;
            }
        })

    }

    // connects the nodes connections with lines
    connectNodes() {

        let center = [window.innerWidth / 2, window.innerHeight / 2];
        center[1] += window.innerHeight;

        for (let node of this.nodes) {

            let connections = node.connections;

            let node_element = document.getElementById(node.id);
            let node_connection_elements = [];

            for (let connection of connections) {
                let connection_element = document.getElementById(connection);
                node_connection_elements.push(connection_element);
            }

            let i = 0;
            for (let node_connection_element of node_connection_elements) {
                let line = document.createElement('div');
                line.className = 'line';
                this.app.appendChild(line);


                let x1 = node_element.offsetLeft + node_element.offsetWidth / 2;
                let y1 = node_element.offsetTop + node_element.offsetHeight / 2;

                let x2 = node_connection_element.offsetLeft + node_connection_element.offsetWidth / 2;
                let y2 = node_connection_element.offsetTop + node_connection_element.offsetHeight / 2;

                let angle = Math.atan2(y2 - y1, x2 - x1);
                let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

                line.style.width = distance + 'px';
                line.style.left = x1 + 'px';
                line.style.top = y1 + 'px';
                line.style.transform = `rotate(${angle}rad)`;

                let node_content = createElement('div', this.app, 'node-content');
                let node_content_text = createElement('p', node_content, 'node-content-text', node.content.connection_content[i]);

                let help_text = createElement('p', node_content, 'help-text', 'Click anywhere to close');

                node_content.style.left = center[0] + 'px';
                node_content.style.top = center[1] + 'px';
                node_content.style.opacity = 0;

                line.addEventListener('click', () => {
                    if (this.currently_selected_node) {
                        this.currently_selected_node.animate([
                            { opacity: 1 },
                            { opacity: 0 }
                        ], {
                            duration: 1,
                            fill: 'forwards'
                        });
                    }

                    node_content.animate([
                        { opacity: 0 },
                        { opacity: 1 }
                    ], {
                        duration: 100,
                        fill: 'forwards'
                    });

                    this.currently_selected_node = node_content;

                })

                i++;

            }
        }

    }

    // returns list of points on 2d plane
    getEquidistantPoints(amount_of_points) {
        let radius = window.innerHeight / 2.5;
        let angle_distance = (2 * Math.PI) / amount_of_points;

        let points = [];
        let angle, x, y;

        let h = window.innerWidth / 2;
        let k = window.innerHeight / 2 + window.innerHeight;

        for (let i = 0; i < amount_of_points; i++) {
            angle = angle_distance * i;

            x = Math.cos(angle) * radius + h;
            y = Math.sin(angle) * radius + k;
            
            points.push([x, y]);
        }


        return points;
    }


}
