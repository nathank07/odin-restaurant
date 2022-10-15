import restaurant from "../assets/restaurant.jpg";

export default function home(returnName){
    if(returnName === true){
        return "Home";
    }
    const body = document.querySelector("#content");

    const headline = document.createElement('h1');
    headline.innerText = "Our Lovely Dovely Restaurant";
    
    const restaurantImage = new Image();
    restaurantImage.classList.add("homeImg")
    restaurantImage.src = restaurant;

    const description = document.createElement('p');
    description.innerHTML = "Here at our lovely dovely restaurant we sell many great products, such as steak, porkchops, chicken, and more!"

    body.appendChild(headline);
    body.appendChild(restaurantImage);
    body.appendChild(description);
}

