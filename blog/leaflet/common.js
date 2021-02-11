const config = {
    markers:[]

}

function createList() {
    html = `
    <h2>DOM Rendering Markers</h2>
    <a href="./01-circle-markers.html"><p class="h6">Circle Markers</p></a>
    <hr>
    <h2>Canvas Rendering Markers</h2>
    <a href="./basic2.html"><p class="h6">Canvas - 10,000 markers</p></a>
    `
    document.getElementById('list').innerHTML = html;  
}


createList()