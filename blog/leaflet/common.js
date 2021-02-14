const config = {
    markers:[]
}

function createList() {
    html = `
    <h2>DOM Rendering Markers</h2>
    <h3>Will resize on zoom</h3>
    <a href="./01-circleMarkers.html"><p>L.circleMarker</p></a>
    <a href="./03-icon.html"><p>L.icon (png)</p></a>
    <a href="./03.2-icon.html"><p>L.icon (svg to encoded base-64)</p></a>
    <a href="./04-divIcon.html"><p>L.divIcon (custom)</p></a>
    <h3>No resize on zoom</h3>
    <a href="./01-circle.html"><p>L.circle</p></a>
    <a href="./02-svgOverlay.html"><p>L.svgOverlay</p></a>
    <hr>
    <h2>Canvas Rendering Markers</h2>
    <a href="./21-circleMarker.html"><p>L.circleMarker, 10,000 markers</p></a>
    <a href="./22-leafletMarkersCanvas.html"><p>Plugin: leaflet-markers-canvas, L.Icon (png)</p></a>
    <a href="./22.1-leafletMarkersCanvas.html"><p>Plugin: leaflet-markers-canvas, L.Icon (svg to encoded base-64)</p></a>
    <a href="./23-L.CircleMarker-extend.html"><p>L.circleMarker.extend to star</p></a>
    <a href="./24-L.CircleMarker-custom.html"><p>L.circleMarker modify src</p></a>
    <a href="./25-L.CircleMarker-extend.html"><p>L.circleMarker extend to price</p></a>
    <a href="./21-circle-markers.html"><p>L.circleMarker (leaflet mod)</p></a>
    `
    document.getElementById('list').innerHTML = html;  
}
function getRandomLatLng() {
return [53.2 + .5 * Math.random(), -6 - .5 * Math.random()];
}
function getPoolbegLighthouse(){
    return [53.342119, -6.151307];
}

// create the html list
createList()

// create the map and set the start point
let map = L.map("map", {customOption:'hello'});
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(map);
map.setView([53.35, -6.3], 10);