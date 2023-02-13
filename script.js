get = id => document.getElementById(id);

function getPapers(src, number, target) {
    var load = "";
    for (let i = 1; i <= number; i += 1) {
        load += `<img src="${src}-${i}.svg">`;
    }
    get(target).innerHTML += load;
}
getPapers("./31é1sz/ÚjSágvári - 31. évfolyam 1. szám (17)", 32, "paperView");
get("paperView").innerHTML += '<img src="./31é1sz/ÚjSágvári - 31. évfolyam 1. szám (17)-1.svg">';