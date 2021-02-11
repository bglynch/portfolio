const config = {
    markers:[]
}

function createList() {
    html = `
    <h2>DOM Rendering Markers</h2>
    <a href="./01-circleMarkers.html"><p class="h6">L.circleMarker</p></a>
    <a href="./01-circle.html"><p class="h6">L.circle</p></a>
    <a href="./02-svgOverlay.html"><p class="h6">L.svgOverlay</p></a>
    <a href="./03-icon.html"><p class="h6">L.icon (png)</p></a>
    <a href="./03.2-icon.html"><p class="h6">L.icon (svg to encoded base-64)</p></a>
    <a href="./04-divIcon.html"><p class="h6">L.divIcon (custom)</p></a>
    <hr>
    <h2>Canvas Rendering Markers</h2>
    <a href="./21-circle-markers.html"><p class="h6">L.circleMarker</p></a>
    `
    document.getElementById('list').innerHTML = html;  
}
function getRandomLatLng() {
return [53.2 + .5 * Math.random(), -6 - .5 * Math.random()];
}

// create the html list
createList()

// create the map and set the start point
let map = L.map("map");
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(map);
map.setView([53.35, -6.3], 10);