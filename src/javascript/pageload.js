import restaurant from "../assets/restaurant.jpg";

export default function load(){
    const body = document.querySelector("#content");
    const headline = "";
    const restaurantImage = new Image();
    restaurantImage.src = restaurant;
    body.appendChild(restaurantImage);
    const desc = "";
    console.log("finished")
}

