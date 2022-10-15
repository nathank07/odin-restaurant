import home from "../javascript/home.js";
import menu from "../javascript/menu.js";
import contact from "../javascript/contact.js";

const body = document.querySelector("#content");

export default function load(){
    tabView([home, menu, contact], 0);
}

function tabView(pages, index){
    const tabViewDiv = document.createElement('div');
    tabViewDiv.classList.add('tabView');
    pages.forEach((page, index) => {
       const button = document.createElement('button');
       button.innerHTML = page(true);
       button.addEventListener('click', () => {
           body.innerHTML = "";
           tabView(pages, index)
       });
       tabViewDiv.appendChild(button);
    });
    body.appendChild(tabViewDiv);
    pages[index]();
}
