(()=>{var e={123:e=>{e.exports=[{id:1,name:"Plants",content:{images:["./static/trees.png","./static/grass.png"],information:"In the Patagonian Steppe, there are a lot of grass and shrubs but no trees. A few species here include the Destuca Gracillima and Jarava Chrysophylla. While the Pre-Andean Scrubland is similar to the Patagonian Steppe, it is more grassy and contains shrubs and trees such as the Nothofagus Pumiolio. The Magellanic Forest is more humid and cooler than the other regions of the park. Some of the trees in this forest are the Nothofagus Pumilio and the Nothofagus Betuloids. The Andean Desert has litter to no vegetation. In fact, it has less than 10% vegetation cover. It is cold year round with permanent ice and less water than the other areas.",connection_content:["Plants -> Animals: <br> Animals like the lesser horned owl use trees for shelter. It is also the lowest in the food chain, getting eating by animals such as guanacos.",""]},connections:[2]},{id:2,name:"Animals",content:{images:[],information:"While the Torres del Paine ecosystem is large, there are a few important standout species. Guanacos are a grazer near the middle of the food chain. They eat shrubs, herbs, lichens, fungi, cacti, and flowers. Guanacos live in small packs of around 30. Pumas, Torres del Paine’s apex predator, eats guanacos, hares, and the hog-nosed skunk. Pumas play an important role preventing overgrazing which promotes biodiversity among the flowers and plants. There are also birds such as the lesser horned owl, which eats rodents as well as small birds and insects. The main endangered and protected animal is the South Andean deer. This animal eats leaves and grass, but since it is Chile’s national animal, it is important it doesn’t go extinct.",connection_content:["Animals -> Plants: <br> Guanacos eat shrubs, grass, and flowers and other animals use plants such as trees for shelter.","Animals -> Water Sources: <br> Animals require water in order to survive, luckily, Torres del Paine has many freshwater lakes in its 700 square mile park for the animals to drink from. In desperate times, animals could also eat snow or ice for water."]},connections:[1,6]},{id:3,name:"Keystone Species",content:{images:["./static/puma_picture.webp"],information:"The puma as an apex predator plays a big role in the ecosystem. Being the main predator to guanaco, it helps prevent overgrazing to support the many plants and flowers. It is also the only large predator, so it also has a massive role, keeping smaller mammals and other animals lower in the food chain from over populating such as hares.",connection_content:["Keystone Species -> Animals: <br> As an apex predator, the puma is the main predator to guanacos, hares, and the hog-nosed skunk. This helps prevent overgrazing and promotes biodiversity among the flowers and plants.","Keystone Species -> Plants: <br> The puma helps prevent overgrazing from the guanacos which can promote biodiversity among the flowers and plants."]},connections:[2,1]},{id:4,name:"Location & Terrain",content:{images:["./static/topographicmap.png","./static/googlemap.png"],information:"Torres del Paine national park is located in Patagonia, Chile, which is near the southern tip. The park in total is 700.43 square miles and is mainly mountainous with a few valleys. A few of the main valleys are French Valley, Bader Valley, Ascension Valley, and Valley of Silence. The highest peak in the park, Cerro Paine Grande, reaches 9461ft tall. There are also four different ecological zones, Andean Desert, Magellanic subpolar forest, pre-Andean shrublands, and Patagonian steppe.",connection_content:["Location & Terrain -> Climate & Weather: <br> Due to Torres del Paine being mountainous, it is very cold year round with permanent ice aswell as being windy.","Location & Terrain -> Animals: <br> Spatial niche partitioning occurs in the park due to the 4 distinct ecological zones. This is mostly due to the elevation differences due to the location."]},connections:[5,2]},{id:5,name:"Climate & Weather",content:{images:["./static/temperaturechart.png"],information:"Due to Torres del Paine being in the southern hemisphere, it’s summer and winter months are flipped. So, while in the northern hemisphere it is warm in June, it is freezing in the southern hemisphere. From the graph below, you can see the average temperatures compared to the temperatures from Olympic national park in Washington. From that you can observe that Torres del Paine remains cold throughout the entire year. Torres del Paine is also known to be extremely windy like other mountainous national parks.",connection_content:["Climate & Weather -> Water Sources: <br> Torres del Paine gets a lot of rain, at least 230mm per month. This water contributes to the water source supply which sustains the ecosystem.","Climate & Weather -> Animals: <br> Animals like the Dwarf Armadillo hibernate during the cold winter months, or summer months in the northenr hemisphere, in order to wat out the cold."]},connections:[6,2]},{id:6,name:"Water Sources",content:{images:[],information:"Torres del Paine national park does not connect to the ocean but it does encompass a few freshwater lakes such as Gray Lake, Lago Sarmiento de Gamboa, Lake Pehoé, Nordenskjold Lake, and Lago Geikie. There are a few rivers between and flowing into the lakes. These lakes are a stable source of water for the animals living there and good amount of snow especially during their winter months.",connection_content:["Water Sources -> Plants: <br> Water is vital for plants to survive. This is evident because in the Andean Desert, there is less than 10% vegetation cover due to the lack of water.","Water Sources -> Climate & Weather: <br> Due to the high amount of water in the park, when it is hot it is very humid in the park."]},connections:[1,5]},{id:7,name:"Human Interactions",content:{images:["./static/wildfire.png"],information:"Humans have a major role in the Torres del Paine national park. For example, in 2012, A tourist accidently caused a massive wildfire in Torres del Paine burning down about 15000 hectares. With nearly 300,000 tourists each year in this 700 square mile park there is bound to be plastic and other trash scattered around in the park, negatively affecting wildlife. On the other hand, CONAF, the Chilean national park authority, help repair damaged ecosystems. They also use tools such as photo monitoring to improve conservation efforts.",connection_content:["Human Interaction -> Animals: <br> CONAF uses photo monitoring to improve conservation efforts which can help conserve endengered species. For example, CONAF helps with the conservation of the South Andean deer in order to prevent its extinction.","Human Interaction -> Climate & Weather: <br> The massive wildfire in 2012 which was caused by a tourist burnt down about 15000 hectares of the park. The fire caused a decent amount of air pollution as well as heating up the park and the surrounding landscape burning up shelter."]},connections:[2,5]}]}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e,t,n,a){let o=document.createElement(e);return o.className=n,o.innerHTML=a||"",t.appendChild(o),o}class t{constructor(e,t){this.app=e,this.nodes=t,this.currently_selected_node=null}renderNodes(){let t=this.getEquidistantPoints(this.nodes.length),n=[window.innerWidth/2,window.innerHeight/2];n[1]+=window.innerHeight;for(let a=0;a<this.nodes.length;a++){let o=this.nodes[a],i=t[a],s=e("div",this.app,"node");s.id=o.id;let r=s.offsetWidth,l=s.offsetHeight,h=i[0]-r/2;h+=(h-n[0])/2;let c=i[1]-l/2;s.style.left=h+"px",s.style.top=c+"px",e("h2",s,"node-name",o.name);let d=e("div",this.app,"node-content"),p=(e("h3",d,"node-content-title",o.name),e("p",d,"node-content-text",o.content.information),e("div",d,"node-content-images"));for(let t of o.content.images)e("img",p,"node-content-image").src=t;e("p",d,"help-text","Click anywhere to close"),d.style.left=n[0]+"px",d.style.top=n[1]+"px",d.style.opacity=0,s.addEventListener("click",(()=>{this.currently_selected_node&&this.currently_selected_node.animate([{opacity:1},{opacity:0}],{duration:1,fill:"forwards"}),d.animate([{opacity:0},{opacity:1}],{duration:100,fill:"forwards"}),this.currently_selected_node=d})),this.app.appendChild(s)}this.connectNodes(),document.addEventListener("click",(e=>{e.target.closest(".node")||e.target.closest(".line")||!this.currently_selected_node||(this.currently_selected_node.animate([{opacity:1},{opacity:0}],{duration:1,fill:"forwards"}),this.currently_selected_node=null)}))}connectNodes(){let t=[window.innerWidth/2,window.innerHeight/2];t[1]+=window.innerHeight;for(let n of this.nodes){let a=n.connections,o=document.getElementById(n.id),i=[];for(let e of a){let t=document.getElementById(e);i.push(t)}let s=0;for(let a of i){let i=document.createElement("div");i.className="line",this.app.appendChild(i);let r=o.offsetLeft+o.offsetWidth/2,l=o.offsetTop+o.offsetHeight/2,h=a.offsetLeft+a.offsetWidth/2,c=a.offsetTop+a.offsetHeight/2,d=Math.atan2(c-l,h-r),p=Math.sqrt((h-r)**2+(c-l)**2);i.style.width=p+"px",i.style.left=r+"px",i.style.top=l+"px",i.style.transform=`rotate(${d}rad)`;let m=e("div",this.app,"node-content");e("p",m,"node-content-text",n.content.connection_content[s]),e("p",m,"help-text","Click anywhere to close"),m.style.left=t[0]+"px",m.style.top=t[1]+"px",m.style.opacity=0,i.addEventListener("click",(()=>{this.currently_selected_node&&this.currently_selected_node.animate([{opacity:1},{opacity:0}],{duration:1,fill:"forwards"}),m.animate([{opacity:0},{opacity:1}],{duration:100,fill:"forwards"}),this.currently_selected_node=m})),s++}}}getEquidistantPoints(e){let t,n,a,o=window.innerHeight/2.5,i=2*Math.PI/e,s=[],r=window.innerWidth/2,l=window.innerHeight/2+window.innerHeight;for(let h=0;h<e;h++)t=i*h,n=Math.cos(t)*o+r,a=Math.sin(t)*o+l,s.push([n,a]);return s}}var a=n(123),o=n.n(a);!function(){const e=document.getElementById("app");new t(e,o()).renderNodes(),function(){let e=document.getElementById("intro");window.addEventListener("scroll",(function(){let t=window.scrollY;e.animate([{top:.3*t+"px",opacity:1-t/700}],{duration:50,easing:"ease",fill:"forwards"})}))}()}()})()})();