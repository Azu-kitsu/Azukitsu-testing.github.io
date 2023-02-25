get = id => document.getElementById(id);

function getPapers(src, number, target, filetype) {
    var load = "";
    for (let i = 1; i <= number; i += 1) {
        load += `<img src="${src}${i}.${filetype}" alt="oldal ${i}" class="oldal"><br>`;
    }
    get(target).innerHTML += load;
}
function getPapers2Page(src, number, target, filetype) {
    if (current_src == src) {
        return
    }
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

    get(target).innerHTML = load;
}

paperView = get("paperView")
paperView.style.width = screen.width*0.4*(1024/722) + "px";
kiadasok = get("kiadasok")
current_src = ""

document.documentElement.style.setProperty('--kiadas_width', screen.height*0.45 + "px");

function getKiadas(srcElem) {
    console.log(srcElem);
    var src = srcElem.attributes.src.value;
    var src = src.replace("icon.png", "")
    console.log(src)
    getPapers2Page(src, 32, "paperView", "png");
    current_src = src
    kiadasok.style.display = "none"
    paperView.style.display = "block"
}

function mainPage() {
    document.body.style.animation = "hide 0s forwards"
    document.body.style.animation = "show_down 1.5s forwards"
    kiadasok.style.display = "unset"
    paperView.style.display = "none"
}

var menu_button = get("misc");
var toggle = 1;
menu_button.addEventListener("click", event => {
    console.log(event);
    if (toggle) {
        zoom.style.opacity = "0";
    } else {
        zoom.style.opacity = "0.7";
    }
    toggle += 1;
    toggle %= 2;
})

menu = get("menu")
var offset = this.scrollY;
window.onscroll = event => {  
    // called when the window is scrolled.  
    var new_offset = this.scrollY
    
    console.log(offset, new_offset)
    if (new_offset < 100) {
        menu.style.animation = "show 1s forwards"
        return
    }
    if (offset < new_offset) {
        menu.style.animation = "hide 2s forwards"
    } else {
        menu.style.animation = "show 1s forwards"
    }
    offset = new_offset
} 