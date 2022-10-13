import load from "./javascript/pageload.js";

function component(){
    const body = document.querySelector("#content");
    const div = document.createElement('div');
    div.innerHTML = "ratio";
    body.appendChild(div);
}
console.log("something!");
load();
