const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")


eventHub.addEventListener(
    "click",
    (clickEvent) => {
        const buttonClicked = clickEvent.target
        const rideEvent = new CustomEvent ("rideTicketPurchased")
        if (buttonClicked.id.startsWith("ride")) {
            //what is done if they click on the right thing
            eventHub.dispatchEvent(rideEvent)
            console.log("Purchased ride ticket")
        } 
    }
)

eventHub.addEventListener(
    "click",
    (clickEvent) => {
        const buttonClicked = clickEvent.target
        const foodEvent = new CustomEvent ("foodTicketPurchased")
        if (buttonClicked.id.startsWith("food")) {
            eventHub.dispatchEvent(foodEvent)
            console.log("Purchased food ticket")
        }
    }
)



// Altered example taken from W3 schools for event listener on a button
// document.getElementById("rideTicket").addEventListener("click", function() {
//     const rideEvent = new CustomEvent("rideTicketPurchased");
//   });


export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gameTicket">Game Ticket</butonn>
        <button id="sideshowTicket">Sideshow Ticket</button>
        </div>
    `
}

