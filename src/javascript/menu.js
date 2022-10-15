import restaurant from "../assets/restaurant.jpg";

export default function menu(returnName){
    if(returnName === true){
        return "Menu";
    }
    const body = document.querySelector("#content");
    body.appendChild(menuItem("Porkchop", "Delicious", restaurant));
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
    item.appendChild(menuImage);
    item.appendChild(itemName);
    item.appendChild(descriptionDiv);
    return item;
}