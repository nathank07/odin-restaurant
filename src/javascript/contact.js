const body = document.querySelector("#content");

export default function contact(returnName){
    if(returnName === true){
        return "Contact";
    }
    const contact = document.createElement("div");
    contact.innerHTML = "Contact at us at example@example.com";
    body.appendChild(contact);
}