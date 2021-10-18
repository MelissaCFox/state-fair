const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")


eventHub.addEventListener(
    "click",
    (clickEvent) => {
        const buttonClicked = clickEvent.target
        const rideEvent = new CustomEvent ("rideTicketPurchased")
        const foodEvent = new CustomEvent ("foodTicketPurchased")
        const gameEvent = new CustomEvent ("gameTicketPurchased")
        const sideshowEvent = new CustomEvent ("sideshowTicketPurchased")
        const fullPackageEvent = new CustomEvent ("fullPackageTicketPurchased")
        if (buttonClicked.id.startsWith("ride")) {
            eventHub.dispatchEvent(rideEvent)
        } else if (buttonClicked.id.startsWith("food")) {
            eventHub.dispatchEvent(foodEvent)
        } else if (buttonClicked.id.startsWith("game")) {
            eventHub.dispatchEvent(gameEvent)
        } else if (buttonClicked.id.startsWith("sideshow")) {
            eventHub.dispatchEvent(sideshowEvent)
        } else if (buttonClicked.id.startsWith("full")) {
            eventHub.dispatchEvent(fullPackageEvent)
        }
    }
)

// eventHub.addEventListener(
//     "click",
//     (clickEvent) => {
//         const buttonClicked = clickEvent.target
//         const foodEvent = new CustomEvent ("foodTicketPurchased")
//         if (buttonClicked.id.startsWith("food")) {
//             eventHub.dispatchEvent(foodEvent)
//             console.log("Purchased food ticket")
//         }
//     }
// )
//* I combined this event listener with the ride ticket listener above



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
        <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}

