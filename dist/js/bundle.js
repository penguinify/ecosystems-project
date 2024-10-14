/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nodes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodes.js */ \"./js/nodes.js\");\n/* harmony import */ var _static_nodes_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/nodes.json */ \"./static/nodes.json\");\n/* harmony import */ var _static_nodes_json__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_nodes_json__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction main() {\n  const app = document.getElementById('app');\n  const nodeManager = new _nodes_js__WEBPACK_IMPORTED_MODULE_0__.NodeManager(app, (_static_nodes_json__WEBPACK_IMPORTED_MODULE_1___default()));\n  nodeManager.renderNodes();\n}\nmain();\n\n//# sourceURL=webpack://ecosystems-project/./js/index.js?");

/***/ }),

/***/ "./js/nodes.js":
/*!*********************!*\
  !*** ./js/nodes.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NodeManager: () => (/* binding */ NodeManager)\n/* harmony export */ });\nfunction createElement(tag, parent, className, content) {\n  let element = document.createElement(tag);\n  element.className = className;\n  element.innerHTML = content || \"\";\n  parent.appendChild(element);\n  return element;\n}\nclass NodeManager {\n  constructor(app, nodes_json) {\n    this.app = app; // main element\n    this.nodes = nodes_json;\n    this.currently_selected_node = null;\n  }\n\n  /*\n      * Puts the nodes on a circle at an equidistant angle from each other\n      * the circle is the height of the screen\n      */\n  renderNodes() {\n    let equidistant_points = this.getEquidistantPoints(this.nodes.length);\n    let center = [window.innerWidth / 2, window.innerHeight / 2];\n    for (let i = 0; i < this.nodes.length; i++) {\n      let node = this.nodes[i];\n      let point = equidistant_points[i];\n      let node_element = createElement('div', this.app, 'node');\n      node_element.id = node.id;\n      let node_width = node_element.offsetWidth;\n      let node_height = node_element.offsetHeight;\n      let node_x = point[0] - node_width / 2;\n      node_x += (node_x - center[0]) / 2;\n      let node_y = point[1] - node_height / 2;\n      node_element.style.left = node_x + 'px';\n      node_element.style.top = node_y + 'px';\n      let node_name = createElement('h2', node_element, 'node-name', node.name);\n      let node_content = createElement('div', this.app, 'node-content');\n      let node_content_title = createElement('h3', node_content, 'node-content-title', node.name);\n      let node_content_text = createElement('p', node_content, 'node-content-text', node.content.information);\n      let node_content_images = createElement('div', node_content, 'node-content-images');\n      for (let image of node.content.images) {\n        let image_element = createElement('img', node_content_images, 'node-content-image');\n        image_element.src = image;\n      }\n      let help_text = createElement('p', node_content, 'help-text', 'Click anywhere to close');\n      node_content.style.left = center[0] + 'px';\n      node_content.style.top = center[1] + 'px';\n      node_content.style.opacity = 0;\n      node_element.addEventListener('click', () => {\n        if (this.currently_selected_node) {\n          this.currently_selected_node.animate([{\n            opacity: 1\n          }, {\n            opacity: 0\n          }], {\n            duration: 1,\n            fill: 'forwards'\n          });\n        }\n        node_content.animate([{\n          opacity: 0\n        }, {\n          opacity: 1\n        }], {\n          duration: 100,\n          fill: 'forwards'\n        });\n        this.currently_selected_node = node_content;\n      });\n      this.app.appendChild(node_element);\n    }\n    this.connectNodes();\n    document.addEventListener('click', e => {\n      if (!e.target.closest('.node') && this.currently_selected_node) {\n        this.currently_selected_node.animate([{\n          opacity: 1\n        }, {\n          opacity: 0\n        }], {\n          duration: 1,\n          fill: 'forwards'\n        });\n        this.currently_selected_node = null;\n      }\n    });\n  }\n\n  // connects the nodes connections with lines\n  connectNodes() {\n    for (let node of this.nodes) {\n      let connections = node.connections;\n      let node_element = document.getElementById(node.id);\n      let node_connection_elements = [];\n      for (let connection of connections) {\n        let connection_element = document.getElementById(connection);\n        node_connection_elements.push(connection_element);\n      }\n      for (let node_connection_element of node_connection_elements) {\n        let line = document.createElement('div');\n        line.className = 'line';\n        this.app.appendChild(line);\n        let x1 = node_element.offsetLeft + node_element.offsetWidth / 2;\n        let y1 = node_element.offsetTop + node_element.offsetHeight / 2;\n        let x2 = node_connection_element.offsetLeft + node_connection_element.offsetWidth / 2;\n        let y2 = node_connection_element.offsetTop + node_connection_element.offsetHeight / 2;\n        let angle = Math.atan2(y2 - y1, x2 - x1);\n        let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);\n        line.style.width = distance + 'px';\n        line.style.left = x1 + 'px';\n        line.style.top = y1 + 'px';\n        line.style.transform = `rotate(${angle}rad)`;\n      }\n    }\n  }\n\n  // returns list of points on 2d plane\n  getEquidistantPoints(amount_of_points) {\n    let radius = window.innerHeight / 2.5;\n    let angle_distance = 2 * Math.PI / amount_of_points;\n    let points = [];\n    let angle, x, y;\n    let h = window.innerWidth / 2;\n    let k = window.innerHeight / 2;\n    for (let i = 0; i < amount_of_points; i++) {\n      angle = angle_distance * i;\n      x = Math.cos(angle) * radius + h;\n      y = Math.sin(angle) * radius + k;\n      points.push([x, y]);\n    }\n    return points;\n  }\n}\n\n//# sourceURL=webpack://ecosystems-project/./js/nodes.js?");

/***/ }),

/***/ "./static/nodes.json":
/*!***************************!*\
  !*** ./static/nodes.json ***!
  \***************************/
/***/ ((module) => {

eval("module.exports = [{\"id\":1,\"name\":\"Plants\",\"content\":{\"images\":[],\"information\":\"aB1!cD2@eF3#gH4$iJ5%kL6^mN7&oP8*pQ9(rS0)sT1-uV2=wX3+yY4_zZ5\"},\"connections\":[2,3]},{\"id\":2,\"name\":\"Animals\",\"content\":{\"images\":[],\"information\":\"qW1!eR2@tY3#uI4$oP5%aS6^dF7&gH8*jK9(lL0)zX1-xC2=vV3+bN4_mM5\"},\"connections\":[6,3]},{\"id\":3,\"name\":\"Keystone Species\",\"content\":{\"images\":[\"./static/puma_picture.webp\"],\"information\":\"The puma as an apex predator plays a big role in the ecosystem. Being the main predator to guanaco, it helps prevent overgrazing to support the many plants and flowers. It is also the only large predator, so it also has a massive role, keeping smaller mammals and other animals lower in the food chain from over populating such as hares.\"},\"connections\":[2,7]},{\"id\":4,\"name\":\"Location & Terrain\",\"content\":{\"images\":[\"./static/topographicmap.png\",\"./static/googlemap.png\"],\"information\":\"Torres del Paine national park is located in Patagonia, Chile, which is near the southern tip. The park in total is 700.43 square miles and is mainly mountainous with a few valleys. A few of the main valleys are French Valley, Bader Valley, Ascension Valley, and Valley of Silence. The highest peak in the park, Cerro Paine Grande, reaches 9461ft tall. There are also four different ecological zones, Andean Desert, Magellanic subpolar forest, pre-Andean shrublands, and Patagonian steppe.\"},\"connections\":[5,2]},{\"id\":5,\"name\":\"Climate & Weather\",\"content\":{\"images\":[\"./static/temperaturechart.png\"],\"information\":\"Due to Torres del Paine being in the southern hemisphere, it’s summer and winter months are flipped. So, while in the northern hemisphere it is warm in June, it is freezing in the southern hemisphere. From the graph below, you can see the average temperatures compared to the temperatures from Olympic national park in Washington. From that you can observe that Torres del Paine remains cold throughout the entire year. Torres del Paine is also known to be extremely windy like other mountainous national parks.\"},\"connections\":[7,4]},{\"id\":6,\"name\":\"Water Sources\",\"content\":{\"images\":[],\"information\":\"Torres del Paine national park does not connect to the ocean but it does encompass a few freshwater lakes such as Gray Lake, Lago Sarmiento de Gamboa, Lake Pehoé, Nordenskjold Lake, and Lago Geikie. There are a few rivers between and flowing into the lakes. These lakes are a stable source of water for the animals living there and good amount of snow especially during their winter months.\"},\"connections\":[3,4]},{\"id\":7,\"name\":\"Human Interactions\",\"content\":{\"images\":[\"./static/wildfire.png\"],\"information\":\"Humans have a major role in the Torres del Paine national park. For example, in 2012, A tourist accidently caused a massive wildfire in Torres del Paine burning down about 15000 hectares. With nearly 300,000 tourists each year in this 700 square mile park there is bound to be plastic and other trash scattered around in the park, negatively affecting wildlife. On the other hand, CONAF, the Chilean national park authority, help repair damaged ecosystems. They also use tools such as photo monitoring to improve conservation efforts. \"},\"connections\":[5,1]}]\n\n//# sourceURL=webpack://ecosystems-project/./static/nodes.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;