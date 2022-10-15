import porkchop from "../assets/porkchop.webp";
import steak from "../assets/steak.webp";

const body = document.querySelector("#content");
const menuList = document.createElement('div');
menuList.classList.add("menuList");

export default function menu(returnName){
    if(returnName === true){
        return "Menu";
    }
    menuList.innerHTML = "";
    menuItem("Porkchop", "Delicious", porkchop);
    menuItem("Steak", "Also delicious", steak);
    body.appendChild(menuList);
}

function menuItem(name, description, image){
    const item = document.createElement('div');
    item.classList.add("menuItem");
    const itemName = document.createElement('h2');
    itemName.innerHTML = name;
    const descriptionDiv = document.createElement('p');
    descriptionDiv.innerHTML = description;
    const menuImage = new Image();
    menuImage.src = image;
    menuImage.classList.add("menuImage");
    item.appendChild(menuImage);
    item.appendChild(itemName);
    item.appendChild(descriptionDiv);
    menuList.appendChild(item);
}