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