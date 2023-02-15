get = id => document.getElementById(id);

function getPapers(src, number, target, filetype, plus) {
    var load = "";
    for (let i = 1; i <= number; i += 1) {
        load += `<img src="${src}${i}.${filetype}" alt="oldal ${i}" class="oldal">${plus}`;
    }
    get(target).innerHTML += load;
}
getPapers("./31e1szpng/ÚjSágvári - 31. évfolyam 1. szám (17)-", 32, "paperView", "png", "<br>");

//const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
//console.log(vw);
//document.querySelectorAll(".oldal").forEach(img => img.style.width = `${vw*0.8}px`)

var zoom = get("zoomSlider");
//var zoomValue = get("output");
//zoomValue.innerHTML = zoom.value;
zoom.oninput = function() {
    //output.innerHTML = this.value;
    get("paperView").style.width = `${this.value}%`;
    //document.querySelectorAll(".oldal").forEach(img => img.style.width = `${this.value}%`)
}

var menu = get("menuButton");
var toggle = 1;
menu.addEventListener("click", event => {
    console.log(event);
    if (toggle) {
        zoom.style.opacity = "0";
    } else {
        zoom.style.opacity = "0.7";
    }
    toggle += 1;
    toggle %= 2;
})
zoom.addEventListener("mouseenter", event => {
    zoom.style.opacity = "1";
})
zoom.addEventListener("mouseleave", event => {
    zoom.style.opacity = "0.7";
})