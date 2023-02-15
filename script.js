get = id => document.getElementById(id);

function getPapers(src, number, target, filetype) {
    var load = "";
    for (let i = 1; i <= number; i += 1) {
        load += `<img src="${src}${i}.${filetype}" alt="oldal ${i}" class="oldal"><br>`;
    }
    get(target).innerHTML += load;
}
function getPapers2Page(src, number, target, filetype) {
    var load = "";
    load += `<img src="${src}1.${filetype}" alt="oldal 1" class="oldal"><br>`;
    for (let i = 2; i < number; i += 1) {
        is_odd = (i + 1) % 2 != 0
        if (is_odd) {
            load += "<div class='teljesOldal'>"
        }
        load += `<img src="${src}${i}.${filetype}" alt="oldal ${i}" class="felOldal">`;
        if (!is_odd) {
            load += "</div><br>"
        }        
    }
    load += `<img src="${src}${number}.${filetype}" alt="impresszum" class="oldal">`;

    get(target).innerHTML += load;
}
getPapers2Page("./31e1szpng/ÚjSágvári - 31. évfolyam 1. szám (17)-", 32, "paperView", "png");

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